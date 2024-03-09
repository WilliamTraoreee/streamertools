import { Head, Link } from '@inertiajs/react'
import type { GearByCategory } from '../../../types/gear'
import type { GearCategory } from '../../../types/gear_category'
import CardGear from '../../components/cards/card-gear'

interface Props {
  gears: GearByCategory
  categories: GearCategory[]
}

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
        <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
        <link rel="canonical" href="https://streamertools.app/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gears | Streamertools" />
        <meta property="og:description" content="All the tools you need to step up your stream" />
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

      <div className="pb-10 w-full" lg="w-1/2 py-40">
        <h1 className="font-black text-4xl mb-5" lg="text-6xl">
          Discover the best products to upgrade your stream.
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus at orci commodo
          bibendum a non mauris. Sed pellentesque nisi sit amet erat tempor consectetur.
        </h2>
      </div>

      <div className="flex w-full justify-center mb-5">
        <div className="flex bg-dark border-gradient-no-hover py-4 px-6 gap-4">
          {categories.map((category) => (
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
      </div>

      {categories.map((category) => (
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
    </>
  )
}
