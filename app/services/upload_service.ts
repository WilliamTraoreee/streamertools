import env from '#start/env'
import { PutObjectCommand } from '@aws-sdk/client-s3'
import client from './s3_service.js'
import { MultipartFile } from '@adonisjs/core/bodyparser'
import { cuid } from '@adonisjs/core/helpers'
import { readFileSync } from 'node:fs'

export default class UploadService {
  async uploadFile(file: MultipartFile) {
    if (!file.filePath) return

    const f = readFileSync(file.filePath)

    const fileName = `${cuid()}.${file.extname}`

    await client.send(
      new PutObjectCommand({
        Bucket: env.get('S3_BUCKET_NAME'),
        Key: fileName,
        Body: f,
      })
    )

    const url = `https://${env.get('S3_BUCKET_NAME')}.s3.${env.get('S3_REGION')}.amazonaws.com/${fileName}`

    return { url }
  }
}
