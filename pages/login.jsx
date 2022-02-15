import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import {getProviders, signIn} from 'next-auth/react';
import {FaSpotify} from 'react-icons/fa';


function Login({providers}) {

  const router = useRouter();

  return (
  <div>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
    <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
      <FaSpotify className='w-52 mb-5 h-40 text-green-500'/>

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button 
            className='bg-green-500 hover:bg-green-600 text-white hover:text-gray-100 p-5 rounded-full'
            onClick={() => signIn(provider.id, {callbackUrl:router.push('/')})}
            >
              Login with {provider.name}
            </button>
        </div>
      ))}
    </div>

  </div>);
}

export default Login;


export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props:{
      providers
    }
  }
}
