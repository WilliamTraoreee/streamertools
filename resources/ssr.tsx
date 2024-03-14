import { createInertiaApp } from '@inertiajs/react'
import ReactDOMServer from 'react-dom/server'
import { Layout } from './components/layout/layout'

const appName = import.meta.env.VITE_APP_NAME || 'StreamerTools'

export default function render(page: any) {

  return createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,

    title: (title) => `${title} | ${appName}`,

    resolve: (name) => {
      const pages = import.meta.glob('./pages/**/*.tsx')
      return pages[`./pages/${name}.tsx`]()
    },
    setup: ({ App, props }) => {
      const user = props.initialPage.props.user

      return (
        <Layout user={user}>
          <App {...props} />
        </Layout>
      )
    },
  })
}
