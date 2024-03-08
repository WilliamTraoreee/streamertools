import Plugin from '#models/plugin'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Plugin.createMany([
      {
        iconUrl: 'https://avatars.githubusercontent.com/u/780600?s=96&v=4',
        name: 'Face Tracker',
        slug: 'face-tracker',
        url: 'https://github.com/norihiro/obs-face-tracker',
        description: 'OBS plugin using CPU to track your face. Good to use in zoom or crop camera.',
        tags: ['OBS', 'plugin'],
        status: 'approved',
      },
      {
        iconUrl: 'https://www.shadertastic.com/logo192.png',
        name: 'Shadertastic',
        slug: 'shadertastic',
        url: 'https://www.shadertastic.com/',
        description:
          'OBS plugin to integrat shaders with simple and easy to use parameters. Add FX to your stream with filters, and style with new transitions.',
        tags: ['OBS', 'plugin', 'shader'],
        status: 'approved',
      },
    ])
  }
}
