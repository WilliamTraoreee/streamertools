import type { FormEvent } from 'react'
import { useForm } from '@inertiajs/react'
import { Input } from '../../components/forms/input'
import { Button } from '../../components/button'
import TagInput from '../../components/forms/tag-input'
import { PPUploader } from '../../components/forms/pp-uploader'

export default function CreatePlugin() {
  const { data, setData, post, errors } = useForm({
    name: '',
    description: '',
    iconUrl: '',
    url: '',
    tags: [],
  })

  function submit(e: FormEvent) {
    e.preventDefault()
    post('/plugins')
  }

  return (
    <div lg="mt-10">
      <h1 className="text-5xl font-black text-center mb-3">Add a new plugin</h1>
      <h2 className="font-medium text-gray text-center">After submitting, blagbere geiughue</h2>

      <form
        onSubmit={submit}
        className="w-full px-6 mx-auto flex flex-col gap-4"
        lg="w-[800px] mt-10"
      >
        {Object.keys(errors).length > 0 && (
          <div className="bg-red-100 text-red-600 p-4 rounded-lg mt-4">
            {Object.entries(errors).map(([key, value]) => (
              <p key={key} className="text-base font-medium">
                {value}
              </p>
            ))}
          </div>
        )}
        <PPUploader onImageChange={(url) => setData('iconUrl', url)} label="Icon" />
        <Input
          label="Tool name"
          type="text"
          required
          value={data.name}
          onChange={(e) => setData('name', e.target.value)}
          errorMessage={errors.name}
        />
        <Input
          label="Description"
          required
          type="text"
          value={data.description}
          onChange={(e) => setData('description', e.target.value)}
        />
        <Input
          label="URL"
          type="url"
          required
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
