import { Link } from '@inertiajs/react'

export function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col text-center gap-10 pt-20">
      <Link href="/" classID="mb-5 block">
        <img src="/assets/streamertools.svg" alt="StreamerTools" loading="lazy" />
      </Link>
      <p className="text-sm font-medium">
        Created by{' '}
        <a
          href="https://twitter.com/willtraore"
          target="_blank"
          rel="noreferrer nooopener"
          className="underline"
          hover="text-secondary-normal"
        >
          @willtraore
        </a>
        <br />
        This project is open-source and available on{' '}
        <a
          href="https://github.com/WilliamTraoreee/streamertools"
          target="_blank"
          rel="noreferrer nooopener"
          className="underline"
          hover="text-secondary-normal"
        >
          Github
        </a>
      </p>
    </footer>
  )
}
