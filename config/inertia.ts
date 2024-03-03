import User from '#models/user'
import { defineConfig } from '@adonisjs/inertia'

export default defineConfig({
  /**
   * Path to the Edge view that will be used as the root view for Inertia responses
   */
  rootView: 'root',

  /**
   * Data that should be shared with all rendered pages
   */
  sharedData: {
    errors: (ctx) => ctx.session.flashMessages.get('errors'),
    user: async (ctx) => {
      const user = ctx.session.get('authenticated_user')

      if (!user) {
        return null
      }

      const findUser = await User.findByOrFail('id', user)
      return findUser ? findUser : null
    },
  },

  ssr: {
    enabled: true,
    entrypoint: 'resources/ssr.tsx',
  },
})
