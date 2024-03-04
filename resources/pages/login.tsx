import { Link } from '@inertiajs/react'
import { Button } from '../components/button'

export default function Login() {
  return (
    <div
      className="h-[70vh] w-full flex items-center justify-center flex flex-col mx-auto text-center"
      lg="w-[800px]"
    >
      <h1 className="text-4xl font-black mb-5" lg="text-7xl">
        Join us and upgrade your stream
      </h1>
      <h2 className="text-gray mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
      <Button link="/auth/twitch" external sameWindow className="mb-10">
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
  )
}
