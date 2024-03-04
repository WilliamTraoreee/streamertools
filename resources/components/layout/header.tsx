import { Link, useForm } from '@inertiajs/react'
import { Button } from '../button'
import { Popover } from '../popover'
import { useState } from 'react'

interface Props {
  user: any
}

export function Header(props: Props) {
  const { user } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { post } = useForm()

  return (
    <header
      className="fixed top-0 left-0 w-screen h-20 bg-black/25 backdrop-blur px-5 flex items-center border-b border-white/10 justify-between z-10"
      lg="px-10"
    >
      <Link href="/">
        <img src="/assets/streamertools.svg" alt="StreamerTools" loading="lazy" />
      </Link>
      <div className="flex items-center gap-5" lg="gap-10">
        <nav
          className={`flex gap-10 fixed top-20 bg-dark h-[calc(100dvh_-_5rem)] w-100 p-10 transition-all duration-200 ${isMenuOpen ? 'right-0' : '-right-100'}`}
          lg="static bg-transparent h-20 w-auto p-0"
        >
          <ul className="flex items-end gap-10 flex-col w-full" lg="flex-row items-center h-full">
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
        </nav>

        <button
          className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center text-white"
          lg="hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="i-ri:menu-3-fill" />
        </button>

        {!user && (
          <Button variant="secondary" link="/login">
            <span className="i-ri:user-3-line" />
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
            <Button
              link="/account/tools"
              variant="transparent"
              className="w-full !justify-end text-right"
            >
              My account
            </Button>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                post('/logout', {
                  onSuccess: () => window.location.reload(),
                })
              }}
            >
              <Button
                type="submit"
                variant="transparent"
                className="w-full !justify-end text-right"
              >
                Logout
              </Button>
            </form>
          </Popover>
        )}
      </div>
      {isMenuOpen && (
        <button
          className="w-screen h-screen top-0 left-0 fixed bg-transparent -z-1"
          onClick={() => setIsMenuOpen(false)}
        ></button>
      )}
    </header>
  )
}
