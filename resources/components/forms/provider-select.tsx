import { useState } from 'react'
import { providersList, type Providers, type Provider } from '../../../types/providers'
import { Popover } from '../popover'

interface Props {
  currentProviders: Providers
  onProviderChange: (providers: Providers) => void
  label?: string
  labelClassName?: string
}

export default function ProviderSelect(props: Props) {
  const { currentProviders, onProviderChange, label, labelClassName } = props

  const [providers, setProviders] = useState<Providers>(currentProviders)

  const handleProviderChange = (provider: Provider) => {
    if (providers.includes(provider)) {
      onProviderChange(providers.filter((p) => p !== provider))
      setProviders(providers.filter((p) => p !== provider))
    } else {
      onProviderChange([...providers, provider])
      setProviders([...providers, provider])
    }
  }

  return (
    <Popover
      trigger={
        <label>
          {label && (
            <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>
          )}
          <div className="border-gradient bg-dark h-14 flex p-3 items-center gap-1">
            {providers.map((provider) => (
              <span
                key={provider + 'list'}
                className="bg-white px-2 py-1 text-black font-bold rounded capitalize text-sm"
              >
                {provider}
              </span>
            ))}
          </div>
        </label>
      }
    >
      <div className="flex flex-col gap-1">
        {providersList.map((provider) => (
          <button
            type="button"
            onClick={() => handleProviderChange(provider)}
            key={provider}
            className={`flex items-center gap-4 py-2 px-4 capitalize text-sm font-bold rounded cursor-pointer transition-colors duration-150 ${providers.includes(provider) ? 'bg-secondary-normal text-black' : 'bg-black/10'}`}
            hover="bg-primary-normal"
          >
            {provider}
          </button>
        ))}
      </div>
    </Popover>
  )
}
