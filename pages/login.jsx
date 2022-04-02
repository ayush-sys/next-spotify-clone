import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { getProviders, signIn } from 'next-auth/react'
import { FaSpotify, FaLinkedin, FaGithub } from 'react-icons/fa'
import Link from 'next/link'

function Login({ providers }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-black">
        <div className='my-4 lg:my-6 flex flex-col items-center justify-center'>
          <FaSpotify className="mb-5 h-40 w-52 text-green-500" />

          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className="rounded-full bg-green-600 p-5 text-gray-100 hover:bg-gray-200 hover:text-green-600 text-xl"
                onClick={() =>
                  signIn(provider.id, { callbackUrl: router.push('/') })
                }
              >
                Login with {provider.name}
              </button>
            </div>
          ))}
        </div>

        <div className='flex flex-col items-center justify-center'>
          {/* Github link */}
          <Link href="https://github.com/ayush-sys/next-spotify-clone">
          <a>
          <button className="flex flex-row items-center justify-center rounded-full my-2 lg:my-4 bg-gray-700 p-5 text-white hover:bg-gray-200 hover:text-gray-800 text-xl">
            <FaGithub className='mx-2'/>
            View Project
          </button>
          </a>
          </Link>

          {/* linked profile link */}
          <Link href="https://www.linkedin.com/in/ayush-pattanayak-32225b202/">
          <a>
          <button className="flex flex-row items-center justify-center rounded-full my-2 lg:my-4 bg-blue-500 p-5 text-white hover:bg-gray-200 hover:text-blue-500 text-xl">
            <FaLinkedin className='mx-2'/>
            Developer Profile
          </button>
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}
