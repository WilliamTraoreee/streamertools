import { Button } from '../components/button'
import { Head } from '@inertiajs/react'
import type { Plugin } from '../../types/plugin'
import CardGear from '../components/cards/card-gear'
import type { Gear } from '../../types/gear'
import { CardPlugin } from '../components/cards/card-plugin'

interface Props {
  plugins: Plugin[]
  randomGears: Gear[]
}

export default function Plugins(props: Props) {
  const { plugins, randomGears } = props

  return (
    <>
      <Head>
        <title>OBS Plugins</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
        <link rel="canonical" href="https://streamertools.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="OBS Plugins | Streamertools" />
        <meta property="og:description" content="All the tools you need to step up your stream" />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content="OBS Plugins | Streamertools" />
        <meta
          property="og:image"
          content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>

      <div className="pb-10 w-full" lg="w-1/2 py-40">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Discover the best OBS plugins to upgrade your stream.
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus at orci commodo
          bibendum a non mauris. Sed pellentesque nisi sit amet erat tempor consectetur.
        </h2>
        <Button link="/plugins/add">
          <span className="i-ri:add-line"></span>
          Submit a plugin{' '}
        </Button>
      </div>

      <div
        className="grid grid-cols-1 gap-10 mb-10"
        sm="grid-cols-2"
        lg="grid-cols-3"
        xl="grid-cols-4"
      >
        {plugins.slice(0, 4).map((plugin) => (
          <CardPlugin key={plugin.id} plugin={plugin} />
        ))}
      </div>

      <div className="p-10 bg-black rounded-xl mb-10">
        <h3 className="font-black text-2xl mb-5 text-center">Our recommanded streaming products</h3>
        <div
          className="grid grid-cols-1 gap-10 mb-5"
          sm="grid-cols-2"
          lg="grid-cols-3"
          xl="grid-cols-5"
        >
          {randomGears.map((gear) => (
            <CardGear key={gear.id} gear={gear} />
          ))}
        </div>
        <div className="w-full justify-center flex">
          <Button link="/gears" className="mx-auto">
            See all products
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10" sm="grid-cols-2" lg="grid-cols-3" xl="grid-cols-4">
        {plugins.length >= 5 &&
          plugins.slice(5, 9999).map((plugin) => <CardPlugin key={plugin.id} plugin={plugin} />)}
      </div>
    </>
  )
}
