import Head from 'next/head';
import {Sidebar, Center, Player} from "../components";
import { getSession } from 'next-auth/react';


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

      {/* Player */}
      <div className='sticky bottom-0'>
        <Player/>  
      </div>
    </div>
  )
}


export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props:{
      session,
    }
  };
}

