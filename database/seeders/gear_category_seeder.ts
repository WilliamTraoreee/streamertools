import GearCategory from '#models/gear_category'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await GearCategory.createMany([
      {
        name: 'USB Microphones',
        slug: 'usb-microphones',
        title: 'USB Microphones: The Must-Haves!',
        description:
          "The microphone is the backbone of your stream! To ensure your streams sound great with audio quality your viewers will appreciate, check out these easy-to-use and set up USB microphones. They're versatile and a must-have.",
      },
      {
        name: 'XLR Microphones',
        slug: 'xlr-microphones',
        title: 'XLR Microphones: for more precision',
        description:
          'For those seeking top-notch audio quality with precision and clarity, look no further than this curated selection of XLR microphones!',
      },
      {
        name: 'Audio Interfaces',
        slug: 'audio-interfaces',
        title: 'Audio Interfaces to connect your microphone and instruments',
        description:
          "Audio interfaces allow you to connect external audio equipment to a computer for recording or streaming content. Whether you're a traditional streamer, musician, or podcaster, it's an essential tool.",
      },
      {
        name: 'Headphones',
        slug: 'headphones',
        title: 'Headphones: For a cozy listening experience.',
        description:
          'Designed to please your ears and ensure comfort for your head, our selection of headphones caters to all budgets and needs, featuring the favorites of streamers everywhere.',
      },
      {
        name: 'Webcams',
        slug: 'webcams',
        title: 'Webcams: An alternative to the camera',
        description:
          'Come here for quality webcams at affordable prices that will satisfy you with good value for money.',
      },
      {
        name: 'Cameras',
        slug: 'cameras',
        title: 'Cameras: For the best video quality',
        description: 'Check out the best cameras out there to level up your streaming experience.',
      },
      {
        name: 'Camera stands',
        slug: 'camera-stands',
        title: 'Camera stands: for stability',
        description:
          'Your camera stand is a highly useful accessory that allows you to maintain, stabilize, and reposition your camera however you like.',
      },
      {
        name: 'Capture cards',
        slug: 'capture-cards',
        title: 'Capture cards',
        description:
          'Discover the best capture card on the market to step up your streaming and podcasting game.',
      },
      {
        name: 'Lights',
        slug: 'lights',
        title: 'Lights: the cherry on top of your stream',
        description:
          "Lighting is the finishing touch for a stream, making the content more engaging and enjoyable for viewers. Don't underestimate its importance! Explore the best lighting options here to elevate your stream.",
      },
      {
        name: 'Microphone stands',
        slug: 'microphone-stands',
        title: 'Microphone stands: for optimal positioning and comfort',
        description:
          'Whatever your needs, a microphone stand will allow you to adjust, position, and place your microphone as desired at a suitable distance from a sound source.',
      },
    ])
  }
}
