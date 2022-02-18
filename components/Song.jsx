import millisToMinsAndSec from "../lib/time";
import useSpotify from "../hooks/useSpotify";

export default function Song({order, track}) {
    const spotifyApi = useSpotify();

    return <div className="grid grid-cols-2 text-gray-400 py-4 px-5 hover:bg-gray-800 hover:rounded-xl cursor-pointer">
        <div className="flex items-center space-x-4 ">
            <p>{order + 1}</p>
            <img src={track.track.album.images[0].url} alt="track-image" className="h-10 w-10"/>
            <div>
                <p className="w-36 lg:w-64 truncate text-white">{track.track.name}</p>
                <p className="w-40 ">{track.track.artists[0].name}</p>
            </div>
        </div>

        <div className="flex items-center justify-between ml-auto md:ml-0">
            <p className="w-40 hidden md:inline">{track.track.album.name}</p>
            <p>{millisToMinsAndSec(track.track.duration_ms)}</p>
        </div>
    </div>
}