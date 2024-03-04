import vine from '@vinejs/vine'

export const createToolValidator = vine.compile(
  vine.object({
    iconUrl: vine.string(),
    name: vine.string(),
    description: vine.string(),
    url: vine.string(),
    prices: vine.array(vine.enum(['free', 'paid'])),
    providers: vine
      .array(
        vine.enum(['twitch', 'youtube', 'kick', 'facebook', 'tiktok', 'x', 'instagram', 'linkedin'])
      )
      .minLength(1),
    tags: vine.array(vine.string()).minLength(1),
    screenshots: vine.array(vine.string()).minLength(1),
  })
)

export const updateToolValidator = vine.compile(
  vine.object({
    iconUrl: vine.string(),
    name: vine.string(),
    description: vine.string(),
    url: vine.string(),
    prices: vine.array(vine.enum(['free', 'paid'])),
    providers: vine.array(
      vine.enum(['twitch', 'youtube', 'kick', 'facebook', 'tiktok', 'x', 'instagram', 'linkedin'])
    ),
    tags: vine.array(vine.string()),
    screenshots: vine.array(vine.string()),
  })
)
