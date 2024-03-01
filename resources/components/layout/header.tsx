import { Link } from '@inertiajs/react'
import { Button } from '../button'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-screen h-20 bg-black/25 backdrop-blur px-10 flex items-center border-b border-white/10 justify-between z-50">
      <Link href="/">
        <img src="/assets/streamertools.svg" alt="StreamerTools" loading="lazy" />
      </Link>
      <div>
        <nav className="flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li>
              <Link
                href="/"
                className="font-bold transition-colors duration-200"
                hover="text-primary-light"
              >
                Tools
              </Link>
            </li>
            <li>
              <Link
                href="/plugins"
                className="font-bold transition-colors duration-200"
                hover="text-primary-light"
              >
                OBS Plugins
              </Link>
            </li>
            <li>
              <Link
                href="/gears"
                className="font-bold transition-colors duration-200"
                hover="text-primary-light"
              >
                Gears
              </Link>
            </li>
          </ul>
          <Button color="secondary" link="/login">
            Login
          </Button>
        </nav>
      </div>
    </header>
  )
}
