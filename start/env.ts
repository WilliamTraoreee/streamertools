/*
|--------------------------------------------------------------------------
| Environment variables service
|--------------------------------------------------------------------------
|
| The `Env.create` method creates an instance of the Env service. The
| service validates the environment variables and also cast values
| to JavaScript data types.
|
*/

import { Env } from '@adonisjs/core/env'

export default await Env.create(new URL('../', import.meta.url), {
  NODE_ENV: Env.schema.enum(['development', 'production', 'test'] as const),
  PORT: Env.schema.number(),
  APP_KEY: Env.schema.string(),
  HOST: Env.schema.string({ format: 'host' }),
  LOG_LEVEL: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for configuring session package
  |----------------------------------------------------------
  */
  SESSION_DRIVER: Env.schema.enum(['cookie', 'memory'] as const),

  /*
  |----------------------------------------------------------
  | Variables for configuring database connection
  |----------------------------------------------------------
  */
  DB_HOST: Env.schema.string({ format: 'host' }),
  DB_PORT: Env.schema.number(),
  DB_USER: Env.schema.string(),
  DB_PASSWORD: Env.schema.string.optional(),
  DB_DATABASE: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for @rlanz/ally-twitch
  |----------------------------------------------------------
  */
  TWITCH_CLIENT_ID: Env.schema.string(),
  TWITCH_CLIENT_SECRET: Env.schema.string(),
  TWITCH_CALLBACK_URL: Env.schema.string(),

  /*
  |----------------------------------------------------------
  | Variables for AWS S3
  |----------------------------------------------------------
  */
  S3_ACCESS_KEY: Env.schema.string(),
  S3_SECRET_KEY: Env.schema.string(),
  S3_ENDPOINT: Env.schema.string(),
  S3_BUCKET_NAME: Env.schema.string(),
  S3_REGION: Env.schema.string(),
})
