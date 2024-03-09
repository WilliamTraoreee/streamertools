import { Button } from '../../components/button'
import type { Tool } from '../../../types/tool'
import { CardTool } from '../../components/cards/card-tool'
import { LayoutAccount } from '../../components/layout/layout-account'
import { CardPlugin } from '../../components/cards/card-plugin'
import { Head } from '@inertiajs/react'

interface Props {
  plugins: {
    approved: Tool[]
    pending: Tool[]
    rejected: Tool[]
  }
}

export default function Tools(props: Props) {
  const { plugins } = props

  return (
    <LayoutAccount>
      <Head>
        <title>My plugins</title>
      </Head>
      <div className="w-full mb-10">
        <div className="flex justify-between items-center gap-6 mb-10">
          <h1 className="text-4xl font-black" lg="text-6xl">
            My submitted plugins
          </h1>
          <Button variant="secondary" link="/plugins/add">
            Add a new plugin
          </Button>
        </div>
        {plugins.pending.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold text-lg mb-1">Pending</h2>
            <h3 className="mb-5 text-gray">Every plugins need to be verified by an admin</h3>
            <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
              {plugins.pending.map((plugin) => (
                <CardPlugin key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </div>
        )}

        {plugins.approved.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold text-lg mb-1">Approved</h2>
            <h3 className="mb-5 text-gray">
              All the plugins you have submitted and actually display on StreamerTools
            </h3>
            <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
              {plugins.approved.map((plugin) => (
                <CardPlugin key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </div>
        )}

        {plugins.rejected.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold text-lg mb-1">Rejected</h2>
            <h3 className="mb-5 text-gray">This plugins don't meet our requirements</h3>
            <div className="grid grid-cols-1 gap-10" md="grid-cols-2" lg="grid-cols-3">
              {plugins.rejected.map((plugin) => (
                <CardPlugin key={plugin.id} plugin={plugin} />
              ))}
            </div>
          </div>
        )}
      </div>
    </LayoutAccount>
  )
}
