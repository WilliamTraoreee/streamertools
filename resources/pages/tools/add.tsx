import React, { type FormEvent } from 'react'
import { useForm } from '@inertiajs/react'

export default function CreateTool() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    description: '',
    iconUrl: '',
    url: '',
    prices: ['free'],
    providers: ['twitch'],
    tags: [],
    screenshots: [],
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    post('/tools')
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" value={data.name} onChange={(e) => setData('name', e.target.value)} />
        <input
          type="text"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
        />
        <input
          type="text"
          value={data.iconUrl}
          onChange={(e) => setData('iconUrl', e.target.value)}
        />
        <input type="text" value={data.url} onChange={(e) => setData('url', e.target.value)} />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  )
}
