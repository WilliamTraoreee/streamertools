import './css/app.css'
import '@unocss/reset/tailwind.css'
import 'virtual:uno.css'

import { createRoot } from 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react'
import { Layout } from './components/layout/layout'

const appName = import.meta.env.VITE_APP_NAME || 'StreamerTools'

createInertiaApp({
  progress: { color: '#5468FF' },

  title: (title) => `${title} | ${appName}`,

  resolve: (name) => {
    const pages = import.meta.glob('./pages/**/*.tsx', { eager: true })
    return pages[`./pages/${name}.tsx`]
  },

  setup({ el, App, props }) {
    const user = props.initialPage.props.user

    const root = createRoot(el)
    root.render(
      <Layout user={user}>
        <App {...props} />
      </Layout>
    )
  },
})
