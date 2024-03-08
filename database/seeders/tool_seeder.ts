import Tool from '#models/tool'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    await Tool.createMany([
      {
        iconUrl: 'https://pbs.twimg.com/profile_images/1662126076317908992/erKe1tYV_400x400.png',
        name: 'Aitum Vertical',
        slug: 'aitum vertical',
        url: 'https://aitum.tv/download/vertical/',
        description:
          'Add a second interface in vertical to your OBS. Permit to stream on mobile plateform in same time. You can link main scenes to vertical scenes.',
        prices: ['free'],
        providers: ['twitch', 'youtube', 'tiktok'],
        tags: ['OBS', 'plugin', 'encoder'],
        screenshots: [
          'https://aitum.tv/_next/static/images/vertical-ae4236a50ffc1b6ba9fabbc41deea754.png',
          'https://beebom.com/wp-content/uploads/2023/08/Vertical-sources-plugin-OBS.jpg',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://pbs.twimg.com/profile_images/1662126076317908992/erKe1tYV_400x400.png',
        name: 'Aitum',
        slug: 'aitum',
        url: 'https://aitum.tv/',
        description:
          'Software to create interactions and scenarios with viewers. Very good UI. Multi-PC, MIDI, OSC, and more.',
        prices: ['paid'],
        providers: ['twitch', 'youtube', 'tiktok'],
        tags: ['interactions', 'scripts', 'midi', 'OSC', 'software'],
        screenshots: [
          'https://img.youtube.com/vi/7Q_sJ-SwJ90/maxresdefault.jpg',
          'https://img.youtube.com/vi/H3kgzXjT6cA/maxresdefault.jpg',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://assets.bigcartel.com/product_images/368906416/Belabox_Icon_smaller_for_twitch_animated.png?auto=format&fit=max&w=2000',
        name: 'Belabox',
        slug: 'belabox',
        url: 'https://belabox.net/',
        description:
          'Free Linux image for Jetson Nano board to transform in encoder. Can stream in RTMP and SRT, support h265, basic DIY version of liveU. Purpose a paid server to ingest SRTLA and get easy integration in OBS.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['DIY', 'IRL', 'OBS'],
        screenshots: [
          'https://i.ibb.co/tmN6bQd/Capture-d-cran-2024-02-12-222444.png',
          'https://i.ibb.co/kMvcYmw/Capture-d-cran-2024-02-12-222607.png',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://yt3.googleusercontent.com/ytc/AIf8zZTPtJR7c4VwPE8MNC2AGs8YQwQwbRiwetHHrAMPVA=s176-c-k-c0x00ffffff-no-rj',
        name: 'CameraFi Live',
        slug: 'camerafi_live',
        url: 'https://www.camerafi.com/camerafi-live/',
        description:
          'Android/iOs app to stream. Support custom overlays (image, video, web widget), RTMP, SRT, USB camera, screen capture, etc.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'tiktok'],
        tags: ['android', 'ios', 'smartphone'],
        screenshots: [
          'https://i.ibb.co/wQ2zP6p/Capture-d-cran-2024-02-12-155020.png',
          'https://1.bp.blogspot.com/-SGdPYSbFUqg/YFBGNm8siZI/AAAAAAAAJVE/Lh5xNdIfC2csmYhM3k2FWBi8ySc61lWvwCLcBGAsYHQ/s820/210315_USB%2B%25EC%25B9%25B4%25EB%25A9%2594%25EB%259D%25BC%2B%25EC%2597%25B0%25EA%25B2%25B0%2B%25EB%25A7%25A4%25EB%2589%25B4%25EC%2596%25BC.jpg',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://static-cdn.jtvnw.net/jtv_user_pictures/f18ee763-81a1-4a9e-9a53-793e5bf195a4-profile_image-300x300.png',
        name: 'CrowdControl',
        slug: 'crowdcontrol',
        url: 'https://crowdcontrol.live/',
        description:
          'Software that permit viewers to interact directly in your game, spawn mob, transform world, and more.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'kick', 'tiktok'],
        tags: ['chat', 'interactions', 'software'],
        screenshots: [
          'https://images.squarespace-cdn.com/content/v1/6111b81345fb3406c893d1c7/c60f8966-1aac-4ae0-9e05-3f6b1d7438df/StreamAnywhere+%281%29.png',
          'https://crowdcontrol.live/wp-content/uploads/2023/05/blog-15-1536x864.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://irlpro.app/static/logo.png',
        name: 'IRLPro',
        slug: 'irlpro',
        url: 'https://irlpro.app/',
        description:
          'Legal fork of Larix Broadcaster. App to stream/record with Android. Support H265, SRT, screen lock, web widgets, and more.',
        prices: ['free'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['android', 'music', 'spotify', 'labels', 'web'],
        screenshots: [
          'https://i.ibb.co/yd436Jn/Capture-d-cran-2024-02-12-161528.png',
          'https://play-lh.googleusercontent.com/LhGZh6kNI2_qsdyGZg8gwF8Ev72sslwRTcu3NrV8iKkWm_5V3-VyreBrx2eYxfbLpw=w526-h296-rw',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://cdn.irltoolkit.com/image/navbar_logo.png',
        name: 'IRLToolKit',
        slug: 'irltoolkit',
        url: 'https://irltoolkit.com/',
        description:
          'OBS instance hosted in datacenter with webApp interface to configure and easy connection for IRL streaming. Ensure to not cut the stream if you lost mobile network during stream.',
        prices: ['paid'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['OBS', 'web'],
        screenshots: [
          'https://i.ibb.co/K7YVZVc/Capture-d-cran-2024-02-12-160553.png',
          'https://i.ibb.co/09r9VF3/Capture-d-cran-2024-02-12-160613.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://softvelum.com/img/larix_broadcaster_logo.png',
        name: 'Larix Broadcaster',
        slug: 'larix_broadcaster',
        url: 'https://softvelum.com/larix/',
        description:
          'Android/iOS freemium app to record/stream with smartphone. Support H265, SRT, NDI, double-cam on iOS, WebRTC, talkback and more.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['OBS', 'web'],
        screenshots: [
          'https://i.ibb.co/dgW6WK5/Capture-d-cran-2024-02-12-162909.png',
          'https://tiki6.tikilive.com/manual/wp-content/uploads/2018/10/Larix-Broadcaster-1.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://www.own3d.tv/images/press/OWN3D-LOGO-SIGN-01.png',
        name: 'Own3d',
        slug: 'own3d',
        url: 'https://www.own3d.tv',
        description:
          'Plateform to purchase overlays and graphic assets for streaming. Overlays, emotes, alerts, etc',
        prices: ['paid'],
        providers: ['twitch', 'youtube', 'kick'],
        tags: ['overlays', 'assets', 'emotes', 'alerts'],
        screenshots: ['https://i.ibb.co/84mSBSx/Capture-d-cran-2024-02-12-150607.png'],
        status: 'approved',
      },
      {
        iconUrl:
          'https://play-lh.googleusercontent.com/gmQ8pPKpcyjvXlmdW7hXaQACXXR0fmItzc7vQcI7tQWmdxR56geO-6i9K0iizp6T9lU=w240-h480-rw',
        name: 'Prism Live',
        slug: 'prism_live',
        url: 'https://prismlive.com/',
        description: 'Android/iOS app to stream over RTMP with plug-n-play overlays and tools.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'kick'],
        tags: ['android', 'ios', 'smartphone', 'IRL'],
        screenshots: [
          'https://i.ibb.co/PzWQGQy/Capture-d-cran-2024-02-13-083309.png',
          'https://i.ibb.co/MSzszz6/Capture-d-cran-2024-02-13-083135.png',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://yt3.googleusercontent.com/BMuyzby5a009YhEM56FAFfEj0JC56G6cC40mTMTl_Q4F7339zubzRHGdpujXp5QETp6wCftHUg=s900-c-k-c0x00ffffff-no-rj',
        name: 'Restream',
        slug: 'restream',
        url: 'https://restream.io/',
        description:
          'RTMP relay to every streaming provider. Easy tool to simulcast, with agragete chat widget and tools.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['web'],
        screenshots: [
          'https://restream.io/integrations/content/images/2021/09/schedule-youtube-live-stream-wth-restream-events-add-channel.jpeg',
          'https://www.streamscheme.com/wp-content/uploads/2020/04/restream-channels.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://sammi.solutions/main_assets/img/logo.png',
        name: 'SAMMI',
        slug: 'sammi',
        url: 'https://sammi.solutions/',
        description:
          'Software to setup interactions and automations scripts over lot of services from Twitch and YT, to Pulsoid, MixItUp, VoiceMod and many more. Have community extensions.',
        prices: ['free'],
        providers: ['twitch', 'youtube'],
        tags: ['interactions', 'scripts', 'automation', 'software'],
        screenshots: [
          'https://sammi.solutions/main_assets/img/hero-img.png',
          'https://i.ibb.co/GFd4QB7/Capture-d-cran-2024-02-12-145516.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://www.shadertastic.com/logo192.png',
        name: 'Shadertastic',
        slug: 'shadertastic',
        url: 'https://www.shadertastic.com/',
        description:
          'OBS plugin to integrat shaders with simple and easy to use parameters. Add FX to your stream with filters, and style with new transitions.',
        prices: ['free'],
        providers: [],
        tags: ['OBS', 'plugin', 'shader'],
        screenshots: [
          'https://i.ibb.co/nz74bgf/Capture-d-cran-2024-02-13-093134.png',
          'https://i.ibb.co/YXjSqyq/Capture-d-cran-2024-02-13-093216.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://slime2.stream/favicon.ico',
        name: 'Slime2',
        slug: 'slime2',
        url: 'https://slime2.stream/',
        description:
          'Twitch API relay to localhost chat, alerts, and lot of more widgets. Good documentation and a community module forum.',
        prices: ['free'],
        providers: ['twitch'],
        tags: ['chat', 'widget', 'DIY', 'alerts', 'web'],
        screenshots: [
          'https://i.ibb.co/cJq8H23/Capture-d-cran-2024-02-13-085546.png',
          'https://i.ibb.co/Y39F5d3/Capture-d-cran-2024-02-13-085149.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://sparkle.bot/_next/image?url=%2Fassets%2Fsparkle-icon.png&w=48&q=100',
        name: 'Sparkle',
        slug: 'sparkle',
        url: 'https://sparkle.bot',
        description:
          'WebApp to fastely host your twitch bots and games in JS with an AI to help coding. Fast setup, very good UI/UX, global variables, database, all twitch API endpoints.',
        prices: ['free'],
        providers: ['twitch'],
        tags: ['coding', 'dev', 'api'],
        screenshots: [
          'https://i.ibb.co/1zMLcXY/Capture-d-cran-2024-02-12-151129.png',
          'https://i.ibb.co/7gB3Y7R/Capture-d-cran-2024-02-12-152612.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://avatars.githubusercontent.com/u/109690726?s=200&v=4',
        name: 'Streali',
        slug: 'streali',
        url: 'https://streali.com',
        description:
          'Streali is a streaming marketplace where you can find chat theme, music player or alert and install it in a minute',
        prices: ['free', 'paid'],
        providers: ['twitch'],
        tags: ['chat', 'music', 'spotify', 'labels', 'web'],
        screenshots: [
          'https://i.ibb.co/qjY1N51/Capture-d-e-cran-2024-02-11-a-18-24-03.png',
          'https://i.ibb.co/Bw2gKb1/Capture-d-e-cran-2024-02-11-a-18-24-39.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://wiki.streamer.bot/logos/streamerbot.png',
        name: 'streamer.bot',
        slug: 'streamer-bot',
        url: 'https://streamer.bot/',
        description:
          'Software to setup interactions and automations scripts over lot of services from Twitch and YT, to Lumia, elgato, VoiceMod and many more.',
        prices: ['free'],
        providers: ['twitch', 'youtube'],
        tags: ['automation', 'interactions', 'scripts', 'software'],
        screenshots: [
          'https://i.ibb.co/48Tz115/Capture-d-cran-2024-02-12-133455.png',
          'https://i.ibb.co/CnHbF4G/Capture-d-cran-2024-02-12-133551.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://streamup.tips/images/logo.png',
        name: 'StreamUP',
        slug: 'streamup',
        url: 'https://streamup.tips',
        description:
          'Multiple widgets and games to interact with viewers. Mainly streamer.bot scenarios to import. And the famous "Pokemon and Friends" community game.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube'],
        tags: ['pokemon', 'OBS', 'widget', 'interactions', 'web'],
        screenshots: [
          'https://i.ibb.co/30V0XzT/Capture-d-cran-2024-02-13-100254.png',
          'https://i.ibb.co/WBNKc1W/Capture-d-cran-2024-02-13-100013.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://twelve47.com/headshot.png',
        name: 'Twelve47',
        slug: 'twelve47',
        url: 'https://twelve47.com',
        description:
          'Twelve47 create some widgets/games links to twitch. Emote combo, Chat cloud, chance wheel, hype train and more.',
        prices: ['free', 'paid'],
        providers: ['twitch'],
        tags: ['interactions', 'game', 'widget', 'web'],
        screenshots: [
          'https://i.ibb.co/XtT18xK/Capture-d-cran-2024-02-13-084207.png',
          'https://i.ibb.co/ZMtT3Yw/Capture-d-cran-2024-02-13-084308.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://twitchat.fr/logo.png',
        name: 'Twitchat',
        slug: 'twitchat',
        url: 'https://twitchat.fr',
        description:
          'Take all capabilities of twitch features and chat, put it in only one webpage with best interface, add lot of viewers interactions, you got twitchat.',
        prices: ['free'],
        providers: ['twitch', 'youtube'],
        tags: ['chat', 'spotify', 'interactions', 'web', 'automation', 'scripts'],
        screenshots: [
          'https://wp.thoanny.fr/wp-content/uploads/screenshot_1646.png',
          'https://i.ibb.co/zPQ4Ktw/Capture-d-cran-2024-02-12-154354.png',
        ],
        status: 'approved',
      },
      {
        iconUrl: 'https://guides.vdo.ninja/assets/images/logo.png',
        name: 'VDO Ninja',
        slug: 'vdo_ninja',
        url: 'https://vdo.ninja/',
        description:
          'Web call system up to 1 host and 4 guests. Permit to create individual sources in OBS, useful for podcast setup.',
        prices: ['free'],
        providers: [],
        tags: ['podcast', 'OBS', 'web'],
        screenshots: [
          'https://i.ibb.co/NyJGcGB/Capture-d-cran-2024-02-13-092356.png',
          'https://guides.vdo.ninja/assets/screenshots/room-copy-link.png',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://img.utdstc.com/icon/207/2d4/2072d42f8ecf51bd382314225f5680bbf6989a7202252ad24ec6dd789d84a75b:200',
        name: 'VTube Studio',
        slug: 'vtube_studio',
        url: 'https://denchisoft.com/',
        description:
          'Software (Adroid/iOS/PC) to easy animate a 2D avatar. Can stream standalone or be import as virtual cam in OBS.',
        prices: ['free', 'paid'],
        providers: ['twitch', 'youtube', 'linkedin', 'x', 'kick', 'tiktok'],
        tags: ['vtuber', 'software'],
        screenshots: [
          'https://i.ibb.co/2WgffQG/Capture-d-cran-2024-02-13-094307.png',
          'https://denchisoft.com/wp-content/uploads/2021/02/ss_905701d8aa22b130f36e92fd39a5b8ebec0266d0.1920x1080.jpg',
        ],
        status: 'approved',
      },
      {
        iconUrl:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThyZT9xNmAPxosRy2kra9Ji9h_euA7KzAnx2NXE7xonQ&s',
        name: 'WizeBot',
        slug: 'wizebot',
        url: 'https://wizebot.tv/',
        description:
          'Expert in moderation tools. Share ban withe your friends, AI support, games, commands, interactions, and more.',
        prices: ['free', 'paid'],
        providers: ['twitch'],
        tags: ['chat', 'moderation', 'interactions', 'web'],
        screenshots: [
          'https://i.ibb.co/qgN0KJX/Capture-d-cran-2024-02-13-090659.png',
          'https://i.ibb.co/DYfYQN6/Capture-d-cran-2024-02-13-090835.png',
        ],
        status: 'approved',
      },
    ])
  }
}
