import {shuffle} from "lodash";
import { useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";
import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtoms";
import Songs from "./Songs";
import {FaUserNinja} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/outline";


const colors = [
    "from-indigo-500",
    "from-blue-500",
    "from-green-500",
    "from-red-500",
    "from-yellow-500",
    "from-purple-500",
    "from-orange-500",
    "from-teal-500",
    "from-pink-500",
    "from-sky-500"
];


export default function Center() {
    const {data:session} = useSession();
    const [color, setColor] = useState(null);
    const playlistId = useRecoilValue(playlistIdState);
    const [playlist, setPlaylist] = useRecoilState(playlistState);
    const spotifyApi = useSpotify();


    // this is to change color
    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [playlistId])


    // this is to fetch playlist
    useEffect(() => {
        spotifyApi.getPlaylist(playlistId).then((data) => {
            setPlaylist(data.body);
        }).catch((err) => console.log(err))
    }, [spotifyApi, playlistId])

    

    return <div className="flex-grow">
        {/* User profile */}
        <header className="absolute top-5 right-8">    
            <div className="flex items-center bg-gray-300 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-r">
                <FaUserNinja className="rounded-full w-8 h-8"/>
                {/* <img src={session?.user.image} alt="spotify-user-avatar"/> */}
                <h2> {session?.user.name} </h2>
                <ChevronDownIcon className="h-5 w-5"/>
            </div>
        </header>

        {/* Main section */}
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}>
            <img className="h-44 w-44 shadow-2xl" src={playlist?.images?.[0]?.url} alt="playlist-image"/>
            <div>
                <p className="font-semibold text-gray-300">PLAYLIST</p>
                <h1 className="text-2xl md:text-3xl xl:text-5xl">{playlist?.name}</h1>
            </div>
        </section>

        <div>
            <Songs/>
        </div>
    </div>;
}

