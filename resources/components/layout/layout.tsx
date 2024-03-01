import { Footer } from './footer'
import { Header } from './header'

interface Props {
  children: React.ReactNode
}

export function Layout(props: Props) {
  const { children } = props

  return (
    <>
      <Header />
      <main className="pt-30 px-10">{children}</main>
      <Footer />
    </>
  )
}
