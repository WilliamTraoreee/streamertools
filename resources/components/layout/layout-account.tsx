import { usePage } from '@inertiajs/react'
import { Button } from '../../components/button'

interface Props {
  children: React.ReactNode
}

export function LayoutAccount(props: Props) {
  const { children } = props

  const { user } = usePage<any>().props

  return (
    <div className="flex gap-10 flex-col" lg="pt-0 flex-row">
      <aside className="w-full" lg="w-80">
        <div className="flex items-center gap-3 pb-3 border-b border-white/10 mb-3">
          <img
            src={user.providerData.avatar_url}
            alt={user.providerData.username}
            className="w-10 h-10 rounded-lg"
          />
          <p className="font-medium">{user.providerData.username}</p>
        </div>
        <div>
          <Button
            variant="transparent"
            link="/account/tools"
            className="w-full !justify-start text-start"
          >
            My tools
          </Button>
        </div>
        {user.role === 'admin' && (
          <div>
            <Button variant="transparent" link="/admin/tools" className="w-full !justify-start">
              Admin tools
            </Button>
            <Button variant="transparent" link="/admin/gears/add" className="w-full !justify-start">
              Admin add gears
            </Button>
          </div>
        )}
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  )
}
