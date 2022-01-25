import React from 'react';
import Head from 'next/head';


function Login() {
  return (
  <div className='text-center'>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
    <h1 className='text-6xl'>This is {' '}
        <a className='hover:text-green-600'>
            Login Page
        </a>
    </h1>
  </div>);
}

export default Login;
