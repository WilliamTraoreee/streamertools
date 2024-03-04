import { Button } from '../../components/button'
import type { Tool } from '../../../types/tool'
import { CardTool } from '../../components/cards/card-tool'

interface Props {
  tools: {
    approved: Tool[]
    pending: Tool[]
    rejected: Tool[]
  }
}

export default function Tools(props: Props) {
  const { tools } = props

  console.log(tools)

  return (
    <div className="container mx-auto px-6 mb-10" lg="pt-20">
      <div className="flex justify-between items-center gap-6 mb-10">
        <h1 className="text-4xl font-black" lg="text-6xl">
          My submitted tools
        </h1>
        <Button variant="secondary" link="/tools/add">
          Add a new tool
        </Button>
      </div>
      {tools.pending.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-1">Pending</h2>
          <h3 className="mb-5 text-gray">Every tools need to be verified by an admin</h3>
          <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
            {tools.pending.map((tool) => (
              <CardTool key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      )}

      {tools.approved.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-1">Approved</h2>
          <h3 className="mb-5 text-gray">
            All the tools you have submitted and actually display on StreamerTools
          </h3>
          <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
            {tools.approved.map((tool) => (
              <CardTool key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      )}

      {tools.rejected.length > 0 && (
        <div className="mb-10">
          <h2 className="font-bold text-lg mb-1">Rejected</h2>
          <h3 className="mb-5 text-gray">This tools don't meet our requirements</h3>
          <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
            {tools.rejected.map((tool) => (
              <CardTool key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
