import { Button } from '../../components/button'
import { Popover } from '../../components/popover'

interface Props {
  currentFilter: 'free' | 'paid' | 'all'
  onFilterChange: (price: 'free' | 'paid' | 'all') => void
}

export function PriceFilter(props: Props) {
  const { currentFilter, onFilterChange } = props

  return (
    <Popover
      trigger={
        <button className="border-gradient bg-dark rounded-full font-bold px-3 h-10 inline-flex items-center gap-1">
          {currentFilter === 'all' && 'Free and paid'}
          {currentFilter === 'free' && 'Free'}
          {currentFilter === 'paid' && 'Paid'}
          <span className="i-ri:arrow-down-s-line block" />
        </button>
      }
    >
      <div className="flex flex-col gap-1">
        <Button
          onClick={() => onFilterChange('all')}
          className="w-full !justify-end"
          variant={currentFilter === 'all' ? 'primary' : 'transparent'}
        >
          Free and paid
        </Button>
        <Button
          onClick={() => onFilterChange('free')}
          className="w-full !justify-end"
          variant={currentFilter === 'free' ? 'primary' : 'transparent'}
        >
          Free
        </Button>
        <Button
          onClick={() => onFilterChange('paid')}
          className="w-full !justify-end"
          variant={currentFilter === 'paid' ? 'primary' : 'transparent'}
        >
          Paid
        </Button>
      </div>
    </Popover>
  )
}
