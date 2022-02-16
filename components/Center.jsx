import { useSession } from "next-auth/react";
import {FaUserNinja} from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import {shuffle} from "lodash";
import { useRecoilState, useRecoilValue } from "recoil";
import { playlistIdState, playlistState } from "../atoms/playlistAtoms";


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

    useEffect(() => {
        setColor(shuffle(colors).pop());
    }, [playlistId])


    return <div className="flex-grow">
        {/* User profile */}
        <header className="absolute top-5 right-8">    
            <div className="flex items-center bg-gray-200 space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-r">
                <FaUserNinja className="rounded-full w-8 h-8"/>
                {/* <img src={session?.user.image} alt="spotify-user-avatar"/> */}
                <h2> {session?.user.name} </h2>
                <ChevronDownIcon className="h-5 w-5"/>
            </div>
        </header>

        {/* Main section */}
        <section className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white padding-8`}>
            <h1>Hellloooo!!!</h1>
        </section>
    </div>;
}

