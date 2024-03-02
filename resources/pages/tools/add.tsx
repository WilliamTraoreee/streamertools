import type { FormEvent } from 'react'
import { useForm } from '@inertiajs/react'
import { Input } from '../../components/forms/input'
import { Button } from '../../components/button'
import TagInput from '../../components/forms/tag-input'

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
    <div lg="mt-10">
      <h1 className="text-5xl font-black text-center mb-3">Add a new tool</h1>
      <h2 className="font-medium text-gray text-center">After submitting, blagbere geiughue</h2>
      <form
        onSubmit={submit}
        className="w-full px-6 mx-auto flex flex-col gap-4"
        lg="w-[800px] mt-10"
      >
        <Input
          label="Tool name"
          type="text"
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          errorMessage={errors.name}
        />
        <Input
          label="Description"
          type="text"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
        />
        <Input
          label="Icon URL"
          type="text"
          value={data.iconUrl}
          onChange={(e) => setData('iconUrl', e.target.value)}
        />
        <Input
          label="URL"
          type="text"
          value={data.url}
          onChange={(e) => setData('url', e.target.value)}
        />
        <TagInput label="Tags" currentTags={[]} onTagChange={(tags) => setData('tags', tags)} />
        <div className="w-full flex justify-end mt-10">
          <Button type="submit">Ajouter</Button>
        </div>
      </form>
    </div>
  )
}
