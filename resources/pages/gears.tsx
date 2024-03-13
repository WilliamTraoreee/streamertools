import { Head, Link } from '@inertiajs/react'
import type { GearByCategory } from '../../types/gear'
import type { GearCategory } from '../../types/gear_category'
import CardGear from '../components/cards/card-gear'

interface Props {
  gears: GearByCategory
  categories: GearCategory[]
}

const order = [
  'usb-microphones',
  'xlr-microphones',
  'microphone-stands',
  'audio-interfaces',
  'headphones',
  'cameras',
  'webcams',
  'capture-cards',
  'camera-stands',
  'lights',
]

export default function All(props: Props) {
  const { gears, categories } = props

  return (
    <>
      <Head>
        <title>Gears</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Upgrade your stream with our curated selection of top products"
        />
        <link rel="canonical" href="https://streamertools.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gears | Streamertools" />
        <meta
          property="og:description"
          content="Upgrade your stream with our curated selection of top products"
        />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content="Gears | Streamertools" />
        <meta
          property="og:image"
          content="https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>

      <div className="pb-10 w-full" lg="w-1/2 py-20">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Upgrade your stream with our curated selection of top products
        </h1>
        <h2 className="text-gray mb-10">
          We've gathered a mix of products at different price ranges, so there's something for every
          budget. These are tried-and-true picks endorsed by streaming communities to help you get
          started or level up your streaming experience.
        </h2>
      </div>

      <div className="flex w-full justify-center mb-5 gap-10 flex-col" md="flex-row">
        <div
          className="flex bg-dark border-gradient-no-hover py-4 px-6 gap-4 w-full flex-col self-start text-center"
          md="w-60 text-right"
        >
          {categories
            .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
            .map((category) => (
              <Link
                key={`link${category.id}`}
                href={`/gears/category/${category.slug}`}
                className="uppercase font-bold text-sm"
                hover="text-secondary-normal"
              >
                {category.name}
              </Link>
            ))}
        </div>

        <div className="flex-1">
          {categories
            .sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug))
            .map((category) => (
              <div key={category.id} className="mb-20">
                <h3 className="text-5xl font-bold mb-1">{category.title}</h3>
                <h4 className="text-gray mb-10">{category.description}</h4>
                <div
                  className="grid grid-cols-1 gap-10 mb-5 2xl:grid-cols-6"
                  sm="grid-cols-2"
                  lg="grid-cols-3"
                  xl="grid-cols-5"
                >
                  {gears[category.slug].map((gear) => (
                    <CardGear key={gear.id} gear={gear} />
                  ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}
