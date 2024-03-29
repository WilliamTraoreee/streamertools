import { Link } from '@inertiajs/react'
import logo from '../../assets/streamertools.svg'

export function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col text-center gap-10 pt-20 pb-10 w-full">
      <Link href="/" classID="mb-5 block">
        <img src={logo} alt="StreamerTools" loading="lazy" />
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
          GitHub
        </a>
      </p>
      <nav>
        <ul className="flex text-sm gap-5 font-medium underline">
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
        </ul>
      </nav>
    </footer>
  )
}
