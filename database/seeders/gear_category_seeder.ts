import GearCategory from '#models/gear_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await GearCategory.createMany([
      {
        name: 'USB Microphones',
        slug: 'usb-microphones',
        title: 'USB Microphones',
        description:
          'Discover the best USB microphone on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'XLR Microphones',
        slug: 'xlr-microphones',
        title: 'XLR Microphonesw',
        description:
          'Discover the best XLR microphone on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Audio Interfaces',
        slug: 'audio-interfaces',
        title: 'Audio Interfaces',
        description:
          'Discover the best audio interface on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Headphoness',
        slug: 'headphones',
        title: 'Headphones',
        description:
          'Discover the best headphones on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Webcams',
        slug: 'webcams',
        title: 'Webcams',
        description:
          'Discover the best webcam on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Cameras',
        slug: 'cameras',
        title: 'Cameras',
        description:
          'Discover the best camera on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Camera stands',
        slug: 'camera-stands',
        title: 'Camera stands',
        description:
          'Discover the best camera stand on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Cature cards',
        slug: 'capture-cards',
        title: 'Capture cards',
        description:
          'Discover the best capture card on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Lights',
        slug: 'lights',
        title: 'Lights',
        description:
          'Discover the best light on the market to step up your streaming and podcasting game.',
      },
    ])
  }
}
