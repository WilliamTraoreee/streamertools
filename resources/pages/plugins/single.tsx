import { Button } from '../../components/button'
import type { Plugin } from '../../../types/plugin'
import { CardPlugin } from '../../components/cards/card-plugin'
import type { Gear } from '../../../types/gear'
import CardGear from '../../components/cards/card-gear'
import { FancyBox } from '../../components/fancybox'
import { Head } from '@inertiajs/react'

interface Props {
  plugin: Plugin
  randomPlugins: Plugin[]
  randomGears: Gear[]
}

export default function Single(props: Props) {
  const { plugin, randomPlugins, randomGears } = props

  if (plugin.status === 'pending') {
    return (
      <>
        <Head>
          <title>Pending plugin</title>
          <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
          <meta
            name="robots"
            content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
          <link rel="canonical" href="https://streamertools.app/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Pending plugin | Streamertools" />
          <meta property="og:description" content="All the tools you need to step up your stream" />
          <meta property="og:url" content="https://streamertools.app/" />
          <meta property="og:site_name" content="Pending plugin | Streamertools" />
          <meta
            property="og:image"
            content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@willtraore" />
        </Head>
        <div className="flex justify-center items-center" lg="h-[70vh]">
          <p>This plugin is in pending and need to be approved by an admin</p>
        </div>
      </>
    )
  }

  if (plugin.status === 'rejected') {
    return (
      <>
        <Head>
          <title>Rejected plugin</title>
          <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
          <meta
            name="robots"
            content="noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />
          <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
          <link rel="canonical" href="https://streamertools.app/" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Rejected plugin | Streamertools" />
          <meta property="og:description" content="All the tools you need to step up your stream" />
          <meta property="og:url" content="https://streamertools.app/" />
          <meta property="og:site_name" content="Rejected plugin | Streamertools" />
          <meta
            property="og:image"
            content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@willtraore" />
        </Head>
        <div className="flex justify-center items-center" lg="h-[70vh]">
          <p>This plugin is rejected</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>{plugin.name}</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content={plugin.description} />
        <link rel="canonical" href={`https://streamertools.app/tools/${plugin.slug}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${plugin.name} | StreamerTools`} />
        <meta property="og:description" content={plugin.description} />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content={`${plugin.name} | StreamerTools`} />
        <meta
          property="og:image"
          content={'https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg'}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>
      <div className="w-full px-6 mx-auto" lg="w-[800px] mt-10">
        <div className="flex justify-between mb-10 flex-col gap-5" md="flex-row items-center">
          <div className="gap-6 flex items-center">
            <img
              src={plugin.iconUrl}
              alt={plugin.name}
              loading="lazy"
              className="w-20 h-20  rounded-xl"
              md="w-30 h-30 rounded-2xl"
            />
            <div>
              <h1 className="font-medium text-3xl">{plugin.name}</h1>
              <a className="underline text-gray block" href={plugin.url}>
                {plugin.displayUrl}
              </a>
            </div>
          </div>
          <Button variant="dark" size="large">
            Visit
          </Button>
        </div>

        <h2 className="font-medium text-xl mb-10">{plugin.description}</h2>

        <div className="flex gap-2 mb-10">
          {plugin.tags.map((tag) => (
            <span key={tag} className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full font-bold">
              {tag}
            </span>
          ))}
        </div>

        <div className="p-10 bg-black rounded-xl mb-10">
          <h3 className="font-black text-2xl mb-5 text-center">
            Our recommanded streaming products
          </h3>
          <div className="grid grid-cols-1 gap-5 mb-5" md="grid-cols-2">
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

        <h2 className="font-bold text-xl text-center  mb-5">You may also like</h2>

        <div className="grid grid-cols-1 gap-5" md="grid-cols-2">
          {randomPlugins.map((plugin) => (
            <CardPlugin plugin={plugin} key={plugin.id} />
          ))}
        </div>
      </div>
    </>
  )
}
