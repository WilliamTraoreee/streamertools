import { providersList, type Provider } from '../../../types/providers'
import { Button } from '../button'
import { Popover } from '../popover'

interface Props {
  currentFilter: 'all' | Provider
  onFilterChange: (price: 'all' | Provider) => void
}

export function ProviderFilter(props: Props) {
  const { currentFilter, onFilterChange } = props

  return (
    <Popover
      trigger={
        <button className="border-gradient bg-dark rounded-full font-bold px-3 h-10 inline-flex items-center gap-1 capitalize">
          {currentFilter === 'all' ? 'All providers' : currentFilter}
          <span className="i-ri:arrow-down-s-line block" />
        </button>
      }
    >
      <div className="flex flex-col gap-1">
        <Button
          onClick={() => onFilterChange('all')}
          className="w-full !justify-end capitalize"
          variant={currentFilter === 'all' ? 'primary' : 'transparent'}
        >
          All providers
        </Button>
        {providersList.map((provider) => (
          <Button
            onClick={() => onFilterChange(provider)}
            className="w-full !justify-end capitalize"
            variant={currentFilter === provider ? 'primary' : 'transparent'}
          >
            {provider}
          </Button>
        ))}
      </div>
    </Popover>
  )
}
