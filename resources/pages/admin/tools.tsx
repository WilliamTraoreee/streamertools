import { ToolLine } from '../../components/table/tool-line'
import type { Tool } from '../../../types/tool'
import { LayoutAccount } from '../../components/layout/layout-account'
import { Head } from '@inertiajs/react'

interface Props {
  tools: {
    approved: Tool[]
    pending: Tool[]
    rejected: Tool[]
  }
}

export default function AdminTools(props: Props) {
  const { tools } = props

  return (
    <LayoutAccount>
      <Head>
        <title>All tools</title>
      </Head>
      <h1 className="text-4xl font-black mb-10" lg="text-6xl">
        All tools
      </h1>

      <div className="w-full">
        {tools.pending.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold mb-3">Pending</h2>
            {tools.pending.map((tool) => (
              <ToolLine key={tool.id} tool={tool} />
            ))}
          </div>
        )}

        {tools.approved.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold mb-3">Approved</h2>
            {tools.approved.map((tool) => (
              <ToolLine key={tool.id} tool={tool} />
            ))}
          </div>
        )}

        {tools.rejected.length > 0 && (
          <>
            <h2 className="font-bold mb-3">Rejected</h2>
            {tools.rejected.map((tool) => (
              <ToolLine key={tool.id} tool={tool} />
            ))}
          </>
        )}
      </div>
    </LayoutAccount>
  )
}
