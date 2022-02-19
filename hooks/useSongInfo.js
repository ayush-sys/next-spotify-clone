import useSpotify from "../hooks/useSpotify"
import { useRecoilState } from "recoil";
import { currentTrackIdState } from "../atoms/songAtoms";
import { useEffect, useState } from "react";



export default function useSongInfo() {
    const spotifyApi = useSpotify();
    const [currentTrackId, setcurrentTrackId] = useRecoilState(currentTrackIdState);
    const [songInfo, setSongInfo] = useState(null);

    useEffect(() => {
        const fetchSongInfo = async () => {
            if(currentTrackId){
                const trackInfo = await fetch(
                    `https://api.spotify.com/v1/tracks/${currentTrackId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${spotifyApi.getAccessToken()}`
                        }
                    }
                ).then(res => res.json());

                setSongInfo(trackInfo);
            }
        }

        fetchSongInfo();
    }, [currentTrackId, spotifyApi])

    return songInfo;
}
