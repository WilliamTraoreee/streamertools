import type { FormEvent } from 'react'
import { router } from '@inertiajs/react'

export default function Login() {
  return (
    <a className="bg-blue-500" href="/auth/twitch">
      Connexion avec Twitch
    </a>
  )
}
