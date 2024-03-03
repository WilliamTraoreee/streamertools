import { Link, useForm } from '@inertiajs/react'
import { Button } from '../button'
import { Popover } from '../popover'

interface Props {
  user: any
}

export function Header(props: Props) {
  const { user } = props

  const { post } = useForm()

  return (
    <header className="fixed top-0 left-0 w-screen h-20 bg-black/25 backdrop-blur px-10 flex items-center border-b border-white/10 justify-between z-0">
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
          {!user && (
            <Button variant="secondary" link="/login">
              Login
            </Button>
          )}
          {user && (
            <Popover
              trigger={
                <img
                  src={user.providerData.avatar_url}
                  alt={user.providerData.username}
                  className="w-8 h-8 rounded cursor-pointer"
                />
              }
            >
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  post('/logout', {
                    onSuccess: () => window.location.reload(),
                  })
                }}
              >
                <button type="submit">Logout</button>
              </form>
            </Popover>
          )}
        </nav>
      </div>
    </header>
  )
}
