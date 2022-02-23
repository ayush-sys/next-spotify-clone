# Next.js Spotify Clone

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

## Aim of the project

- To learn & develop react apps using NextJS framework.
- To style react components using Tailwind CSS.
- To learn about Next AUth & middleware.
- How to use Spotify API for auth & fetch playlist.
- To learn SSR & SSG.


## Steps 
- Fork this repository
- `git pull` on your local computer or download `.zip` file.
- In your local environment, declare `.env.local` file.
- In that file fill this values : 
``` bash
  NEXTAUTH_URL = http://localhost:3000 or your domain url when deployed
  NEXT_PUBLIC_CLIENT_SECRET = your_super_secret_spotify_client_secret
  NEXT_PUBLIC_CLIENT_ID = your_super_secret_spotify_client_id
  JWT_SECRET= some_super_secret_value
```
- After doing this, try run your Next JS application in development server using `npm run dev` or `yarn dev`.
- For a free developer spotify account visit [spotify developers](https://developer.spotify.com/dashboard/).
- After login using your spotify account.
- Create a new app namely `spotify-clone`.
- Go to settings of that new app & add some parameters in redirect URIs. </br>
`http://localhost:3000/api/auth/callback/spotify` [for your local testing purpose]
`https://next_spotify_clone_website_url.com/api/auth/callback/spotify` [You also have to fill it after deployment so that your app don't crash]


## How to create a new NextJS + Tailwind CSS application
Here is a cheat sheet you can use [Link](https://github.com/ayush-sys/command-cheatsheet).



## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

