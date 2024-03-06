import { useState, type ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'input'> {
  label?: string
  labelClassName?: string
  errorMessage?: string
  containerClassName?: string
}

export function Input(props: Props) {
  const { label, labelClassName = '', containerClassName = '', errorMessage, ...rest } = props

  const [isFocus, setIsFocus] = useState(false)

  return (
    <label className={containerClassName}>
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <div className={`bg-dark border-gradient h-14 ${isFocus ? 'border-gradient-active' : ''}`}>
        <input
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          className={`w-full h-full outline-none px-3 bg-transparent ${rest.className}`}
          {...rest}
        />
      </div>
      {errorMessage && (
        <span className="text-red text-sm mt-1 font-medium block">{errorMessage}</span>
      )}
    </label>
  )
}
