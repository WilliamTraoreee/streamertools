import env from '#start/env'
import { defineConfig } from '@adonisjs/ally'
import { twitch } from '@rlanz/ally-twitch'

const allyConfig = defineConfig({
  twitch: twitch({
    clientId: env.get('TWITCH_CLIENT_ID'),
    clientSecret: env.get('TWITCH_CLIENT_SECRET'),
    callbackUrl: env.get('TWITCH_CALLBACK_URL'),
    scopes: ['user:read:email'],
  }),
})

export default allyConfig

declare module '@adonisjs/ally/types' {
  interface SocialProviders extends InferSocialProviders<typeof allyConfig> {}
}
