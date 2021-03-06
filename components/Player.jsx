import { useCallback, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { debounce } from "lodash";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "../atoms/songAtoms";
import { SwitchHorizontalIcon, VolumeUpIcon as VolumeDownIcon } from "@heroicons/react/outline";
import { RewindIcon, PauseIcon, PlayIcon, ReplyIcon, FastForwardIcon, VolumeUpIcon } from "@heroicons/react/solid";


export default function Player() {
    const spotifyApi = useSpotify();
    const songInfo = useSongInfo();
    const {data:session, status} = useSession();
    const [currentTrackId, setcurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [volume, setVolume] = useState(50);
    

    // fetch song & setup current track
    const fetchCurrentSong = () => {
        if(!songInfo){
            spotifyApi.getMyCurrentPlayingTrack().then(data => {
                setcurrentTrackId(data.body?.item?.id);

                spotifyApi.getMyCurrentPlaybackState().then( data => {
                    setIsPlaying(data.body?.is_playing)
                });
            })
        }
    }


    // trigger to call above func
    useEffect(() => {
        if(spotifyApi.getAccessToken() && !currentTrackId){
            fetchCurrentSong();
            setVolume(50);
        }

    }, [currentTrackId, spotifyApi, session])

    
    // handle play & puase functionality
    const handlePlayPause = () => {
        spotifyApi.getMyCurrentPlaybackState().then(data => {
            if(data.body.is_palying){
                spotifyApi.pause();
                setIsPlaying(false);
            } else {
                spotifyApi.play();
                setIsPlaying(true);
            }
        })
    }

    const debouncedAdjustVolume = useCallback(
        debounce(volume => {
            spotifyApi.setVolume(volume).catch(err => {console.log(err)});
        }, 200, [])
    );


    useEffect(() => {
        if(volume > 0 && volume < 100){
            debouncedAdjustVolume(volume);
        }
    }, [volume])



    return (
        <div className="h-24 bg-gradient-to-b from-black to-gray-800 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
            {/* left */}
            <div className="flex items-cenetr space-x-4">
                <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0].url} alt="" />
                <div>
                    <h3>{songInfo?.name}</h3>
                    <p>{songInfo?.artist?.[0]?.name}</p>
                </div>
            </div>

            {/* Center */}
            <div className="flex items-center justify-evenly">
                <SwitchHorizontalIcon className="button" />
                <RewindIcon className="button" />

                {isPlaying ? (
                    <PauseIcon onClick={handlePlayPause} className="button w-10 h-10"/>
                ) : (
                    <PlayIcon onClick={handlePlayPause} className="button w-10 h-10"/>
                )}

                <FastForwardIcon className="button"/>

                <ReplyIcon className="button"/>
            </div>

            {/* right side */}
            <div className="flex items-center space-x-3 md:space-x-4 justify-end pr-5 ">
                <VolumeDownIcon className="button" onClick={() => volume > 0 && setVolume(volume - 10)}/>
                    <input className="w-14 md:w-28" type="range" 
                        value={volume} 
                        min={0} max={100}
                        onChange={e => setVolume(Number(e.target.value))}
                    />
                <VolumeUpIcon className="button" onClick={() => volume < 0 && setVolume(volume + 10)}/>
            </div>
        </div>
    )
}