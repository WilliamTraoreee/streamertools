import { Button } from '../../components/button'
import { useState } from 'react'

interface Props {
  currentPrice?: ('free' | 'paid')[]
  onPriceChange: (value: ('free' | 'paid')[]) => void
  label?: string
  labelClassName?: string
}

export default function PriceSelect(props: Props) {
  const { currentPrice, onPriceChange, label, labelClassName } = props

  const [currentPriceState, setCurrentPriceState] = useState<('free' | 'paid')[]>(
    currentPrice || []
  )

  const handlePriceChange = (price: ('free' | 'paid')[]) => {
    setCurrentPriceState(price)
    onPriceChange(price)
  }

  return (
    <label>
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <div className="flex gap-1 p-2 border-gradient bg-dark">
        <Button
          type="button"
          className="flex-1"
          variant={
            currentPriceState.length === 1 && currentPriceState.includes('free')
              ? 'primary'
              : 'dark'
          }
          onClick={() => handlePriceChange(['free'])}
        >
          Free
        </Button>
        <Button
          type="button"
          className="flex-1"
          variant={
            currentPriceState.length === 1 && currentPriceState.includes('paid')
              ? 'primary'
              : 'dark'
          }
          onClick={() => handlePriceChange(['paid'])}
        >
          Paid
        </Button>
        <Button
          type="button"
          className="flex-1"
          variant={currentPriceState.length === 2 ? 'primary' : 'dark'}
          onClick={() => handlePriceChange(['free', 'paid'])}
        >
          Free + Paid
        </Button>
      </div>
    </label>
  )
}
