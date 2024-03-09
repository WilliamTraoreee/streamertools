import { PluginLine } from '../../components/table/plugin-line'
import type { Plugin } from '../../../types/plugin'
import { LayoutAccount } from '../../components/layout/layout-account'
import { Head } from '@inertiajs/react'

interface Props {
  plugins: {
    approved: Plugin[]
    pending: Plugin[]
    rejected: Plugin[]
  }
}

export default function Adminplugins(props: Props) {
  const { plugins } = props

  return (
    <LayoutAccount>
      <Head>
        <title>All plugins</title>
      </Head>
      <h1 className="text-4xl font-black mb-10" lg="text-6xl">
        All plugins
      </h1>

      <div className="w-full">
        {plugins.pending.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold mb-3">Pending</h2>
            {plugins.pending.map((plugin) => (
              <PluginLine key={plugin.id} plugin={plugin} />
            ))}
          </div>
        )}

        {plugins.approved.length > 0 && (
          <div className="mb-10">
            <h2 className="font-bold mb-3">Approved</h2>
            {plugins.approved.map((plugin) => (
              <PluginLine key={plugin.id} plugin={plugin} />
            ))}
          </div>
        )}

        {plugins.rejected.length > 0 && (
          <>
            <h2 className="font-bold mb-3">Rejected</h2>
            {plugins.rejected.map((plugin) => (
              <PluginLine key={plugin.id} plugin={plugin} />
            ))}
          </>
        )}
      </div>
    </LayoutAccount>
  )
}
