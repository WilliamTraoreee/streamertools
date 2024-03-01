import type { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary' | 'dark'
  size?: 'normal' | 'large'
  link?: string
  external?: boolean
}

const buttonColorClassName = {
  primary: 'bg-primary-normal hover:bg-primary-light text-white',
  secondary: 'bg-secondary-normal hover:bg-secondary-light text-black',
  dark: 'bg-black text-white',
}

const buttonSizeClassName = {
  normal: 'h-10 px-4',
  large: 'h-20 px-6',
}

export function Button(props: Props) {
  const { color = 'primary', link, external = false, size = 'normal', ...rest } = props

  const className = `rounded-md font-bold transition-colors duration-150 ${buttonColorClassName[color]} ${buttonSizeClassName[size]} ${rest.className}`

  return <button className={className}>{rest.children}</button>
}
