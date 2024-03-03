import app from '@adonisjs/core/services/app'
import UploadService from '#services/upload_service'
import { inject } from '@adonisjs/core'
import type { HttpContext } from '@adonisjs/core/http'
import { cuid } from '@adonisjs/core/helpers'
import { unlink } from 'node:fs'

@inject()
export default class UploadsController {
  constructor(private upload: UploadService) {}

  public async send({ request, response }: HttpContext) {
    const file = request.file('file', {
      size: '3mb',
      extnames: ['jpg', 'png', 'jpeg', 'webp', 'gif'],
    })

    if (!file) {
      return response.status(400).json({ error: 'No file provided' })
    }

    await file?.move(app.makePath('uploads'), {
      name: `${cuid()}.${file.extname}`,
    })

    const send = await this.upload.uploadFile(file)

    if (send && file.filePath) {
      unlink(file.filePath, () => {})
    }

    return response.json({ fileUrl: send?.url })
  }
}
