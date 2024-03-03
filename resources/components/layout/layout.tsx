import { Footer } from './footer'
import { Header } from './header'

interface Props {
  children: React.ReactNode
  user?: any
}

export function Layout(props: Props) {
  const { children, user } = props

  console.log(user)

  return (
    <>
      <Header user={user} />
      <main className="pt-30 px-10">{children}</main>
      <Footer />
    </>
  )
}
