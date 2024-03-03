import { S3 } from '@aws-sdk/client-s3'
import env from '#start/env'

const client = new S3({
  region: env.get('S3_REGION'),
  endpoint: env.get('S3_ENDPOINT'),
  credentials: {
    accessKeyId: env.get('S3_ACCESS_KEY'),
    secretAccessKey: env.get('S3_SECRET_KEY'),
  },
})

export default client
