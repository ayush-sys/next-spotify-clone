import { useState } from "react";
import { useSession } from "next-auth/react";
import useSongInfo from "../hooks/useSongInfo";
import useSpotify from "../hooks/useSpotify";
import { useRecoilState } from "recoil";
import { isPlayingState, currentTrackIdState } from "../atoms/songAtoms";


export default function Player() {
    const spotifyApi = useSpotify();
    const songInfo = useSongInfo();
    const {data:Session, status} = useSession();
    const [currentTrackId, setcurrentTrackId] = useRecoilState(currentTrackIdState);
    const [isPlaying, setIsPlaying] = useRecoilState(isPlayingState);
    const [voulme, setVolume] = useState(50);
    

    return (
        <div>
            {/* left */}
            <div>
                <img className="hidden md:inline h-10 w-10" src={songInfo?.album.images?.[0].url} alt="" />
            </div>
        </div>
    )
}