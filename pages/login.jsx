import Head from 'next/head';
import {getProviders, signIn} from "next-auth/react";
import {FaSpotify} from "react-icons/fa";


function Login({providers}) {
  return (
  <div className='text-center'>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
      <div className="flex flex-col items-center bg-black min-h-screen w-full justify-center">
        <FaSpotify className='h-52 w-52 mb-5 text-green-500'/>

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button 
              className="bg-green-500 text-white p-5 rounded-full"
              onClick={() => signIn(provider.id, {callbackUrl:'/'})}
              >Login with {provider.name}
            </button>
          </div>
        ))}
      </div>
  </div>);
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return{
    props:{
      providers,
    }
  }
}
