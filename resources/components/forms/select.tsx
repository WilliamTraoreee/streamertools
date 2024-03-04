import { useState, type ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'select'> {
  label?: string
  labelClassName?: string
  options: { value: string; label: string }[]
  errorMessage?: string
}

export function Select(props: Props) {
  const { label, labelClassName, errorMessage, options, ...rest } = props

  const [isFocus, setIsFocus] = useState(false)

  return (
    <label>
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <div className={`bg-dark border-gradient h-14 ${isFocus ? 'border-gradient-active' : ''}`}>
        <select
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={`w-full h-full outline-none px-3 bg-transparent appearance-none  ${rest.className}`}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      {errorMessage && (
        <span className="text-red text-sm mt-1 font-medium block">{errorMessage}</span>
      )}
    </label>
  )
}
