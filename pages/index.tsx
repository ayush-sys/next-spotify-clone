import Head from 'next/head';


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Spotify Clone</title>
        <link rel="icon" href="/icons8-spotify.svg" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-green-600">
            Spotify Clone
          </a>
        </h1>

        <h5 className='text-4xl py-2'
        >Developed with {' '}
          <a 
          className="hover:text-blue-600" href="https://nextjs.org/">
            Next JS
          </a> & styled using {' '}
          <a className="hover:text-blue-600" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>
          .</h5>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center text-gray-600 hover:text-gray-800"
          href="https://github.com/ayush-sys"
        >
          Developed by{' '} Ayush Pattanayak
        </a>
      </footer>
    </div>
  )
}
