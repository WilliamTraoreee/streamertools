import type { Tool } from '../../types/tool'
import { Button } from '../components/button'
import { Head } from '@inertiajs/react'

interface Props {
  tools: Tool[]
}

export default function Home(props: Props) {
  const { tools } = props

  return (
    <>
      <Head>
        <title>Tools</title>
      </Head>

      <div className="py-40 w-full" lg="w-1/2">
        <h1 className="font-black text-6xl mb-5">
          Discover the best tools to upgrade your stream.
        </h1>
        <h2 className="text-gray mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non lacus at orci commodo
          bibendum a non mauris. Sed pellentesque nisi sit amet erat tempor consectetur.
        </h2>
        <Button>Submit a tool</Button>
      </div>

      <div>
        {tools.map((tool) => (
          <p key={tool.id}>{tool.name}</p>
        ))}
      </div>
    </>
  )
}
