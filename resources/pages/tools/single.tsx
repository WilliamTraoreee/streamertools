import { Button } from '../../components/button'
import type { Tool } from '../../../types/tool'

interface Props {
  tool: Tool
}

export default function Single(props: Props) {
  const { tool } = props

  if (tool.status === 'pending') {
    return (
      <div className="flex justify-center items-center" lg="h-[70vh]">
        <p>This tool is in pending and need to be approved by an admin</p>
      </div>
    )
  }

  if (tool.status === 'rejected') {
    return (
      <div className="flex justify-center items-center" lg="h-[70vh]">
        <p>This tool is rejected</p>
      </div>
    )
  }

  return (
    <div className="w-full px-6 mx-auto" lg="w-[800px] mt-10">
      <div className="flex justify-between mb-10 flex-col gap-5" md="flex-row items-center">
        <div className="gap-6 flex items-center">
          <img
            src={tool.iconUrl}
            alt={tool.name}
            loading="lazy"
            className="w-20 h-20  rounded-xl"
            md="w-30 h-30 rounded-2xl"
          />
          <div>
            <h1 className="font-medium text-3xl">{tool.name}</h1>
            <a className="underline text-gray block" href={tool.url}>
              {tool.displayUrl}
            </a>
          </div>
        </div>
        <Button variant="dark" size="large">
          Visit
        </Button>
      </div>

      <h2 className="font-medium text-xl mb-10">{tool.description}</h2>

      <div className="flex gap-2 mb-10">
        {tool.tags.map((tag) => (
          <span key={tag} className="px-4 py-1 bg-gray-200 text-gray-800 rounded-full font-bold">
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10" lg="grid-cols-2">
        {tool.screenshots.map((screenshot) => (
          <img
            key={screenshot}
            src={screenshot}
            alt={tool.name}
            loading="lazy"
            className="w-full h-auto rounded-xl"
          />
        ))}
      </div>
    </div>
  )
}
