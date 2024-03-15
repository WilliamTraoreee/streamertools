import CardGear from '../../components/cards/card-gear'
import type { Gear } from '../../../types/gear'
import type { GearCategory } from '../../../types/gear_category'
import { Head } from '@inertiajs/react'

interface Props {
  category: GearCategory
  gears: Gear[]
}

export default function CategoryGear(props: Props) {
  const { category, gears } = props

  return (
    <>
      <Head>
        <title>{category.name}</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon"></link>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta name="description" content="Le blog qui décomplexe les introverti.e.s." />
        <link rel="canonical" href={`https://streamertools.app/tools/${category.slug}`} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${category.name} | StreamerTools`} />
        <meta property="og:description" content="All the tools you need to step up your stream" />
        <meta property="og:url" content="https://streamertools.app/" />
        <meta property="og:site_name" content={`${category.name} | StreamerTools`} />
        <meta
          property="og:image"
          content={'https://streamertools.s3.eu-central-1.amazonaws.com/og.jpg'}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@willtraore" />
      </Head>
      <div>
        <h1 className="font-black text-4xl mb-5 text-center mb-10" lg="text-6xl mb-15">
          {category.name}
        </h1>
        <div
          className="grid grid-cols-1 gap-10 mb-5 2xl:grid-cols-6"
          sm="grid-cols-2"
          lg="grid-cols-3"
          xl="grid-cols-5"
        >
          {gears.map((gear) => (
            <CardGear key={gear.id} gear={gear} />
          ))}
        </div>
      </div>
    </>
  )
}
