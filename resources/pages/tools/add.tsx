import type { FormEvent } from 'react'
import { useForm } from '@inertiajs/react'
import { Input } from '../../components/forms/input'
import { Button } from '../../components/button'
import TagInput from '../../components/forms/tag-input'
import ProviderSelect from '../../components/forms/provider-select'
import { PPUploader } from '../../components/forms/pp-uploader'
import { MultipleImageUploader } from '../../components/forms/multiple-image-uploader'

export default function CreateTool() {
  const { data, setData, post, errors } = useForm({
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
        <PPUploader onImageChange={(url) => setData('iconUrl', url)} label="Icon" />
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
          label="URL"
          type="text"
          value={data.url}
          onChange={(e) => setData('url', e.target.value)}
        />

        <ProviderSelect
          label="Available on"
          currentProviders={[]}
          onProviderChange={(providers) => setData('providers', providers)}
        />

        <TagInput label="Tags" currentTags={[]} onTagChange={(tags) => setData('tags', tags)} />
        <MultipleImageUploader
          onImagesChange={(urls) => setData('screenshots', urls)}
          label="Screenshots"
        />
        <div className="w-full flex justify-end mt-10">
          <Button type="submit">Ajouter</Button>
        </div>
      </form>
    </div>
  )
}
