import { Link } from '@inertiajs/react'
import type { ComponentPropsWithoutRef } from 'react'

interface Props extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'dark'
  size?: 'normal' | 'large'
  link?: string
  external?: boolean
}

const buttonColorClassName = {
  primary: 'bg-primary-normal hover:bg-primary-light text-white',
  secondary: 'bg-secondary-normal hover:bg-secondary-light text-black',
  dark: 'bg-black text-white border border-gray-800 hover:bg-gray-900',
}

const buttonSizeClassName = {
  normal: 'h-10 px-4',
  large: 'h-16 px-8',
}

export function Button(props: Props) {
  const { variant = 'primary', link, external = false, size = 'normal', ...rest } = props

  const className = `rounded-md font-bold transition-colors duration-150 inline-flex items-center justify-center text-center ${buttonColorClassName[variant]} ${buttonSizeClassName[size]} ${rest.className}`

  if (link && !external) {
    return (
      <Link href={link} className={className}>
        {rest.children}
      </Link>
    )
  }

  if (link && external) {
    return (
      <a href={link} className={className} target="_blank" rel="noreferrer noopener">
        {rest.children}
      </a>
    )
  }

  return <button className={className}>{rest.children}</button>
}
