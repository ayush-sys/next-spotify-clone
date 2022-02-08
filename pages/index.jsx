import Head from 'next/head';
import Sidebar from '../components/Sidebar';


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>

      <main className="">
        {/* Sidebar */}
        <Sidebar/>

        {/* Center */}
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
