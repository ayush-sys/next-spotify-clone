import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Center from '../components/Center';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>

      <main className="flex">
        {/* Sidebar */}
        <Sidebar/>

        {/* Center */}
        <Center/>
      </main>

      <div>
        {/* Player */}
      </div>
    </div>
  )
}
