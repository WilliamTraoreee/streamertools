import { Head, Link } from '@inertiajs/react'
import { Button } from '../components/button'

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
        <link rel="canonical" href="https://streamertools.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Login | Streamertools" />
        <meta property="og:description" content="All the tools you need to step up your stream" />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content="Login | Streamertools" />
        <meta
          property="og:image"
          content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>

      <div
        className="h-[70vh] w-full flex items-center justify-center flex flex-col mx-auto text-center"
        lg="w-[800px]"
      >
        <h1 className="text-4xl font-black mb-5" lg="text-7xl">
          Join us and upgrade your stream
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h2>
        <Button link="/auth/twitch" external sameWindow className="mb-10" variant="twitch">
          <span className="i-ri:twitch-fill"></span>
          Connect with Twitch
        </Button>
        <p>
          By login in, you accept our{' '}
          <Link href="/privacy" className="underline">
            privacy policy
          </Link>{' '}
          and our{' '}
          <Link href="/terms" className="underline">
            terms of use
          </Link>
          .
        </p>
      </div>
    </>
  )
}
