import { useForm } from '@inertiajs/react'
import type { Status } from '../../../types/common'
import type { Plugin } from '../../../types/plugin'
import { useState, type FormEvent } from 'react'
import { Button } from '../button'
import { Select } from '../forms/select'
import { PPUploader } from '../forms/pp-uploader'
import { Input } from '../forms/input'
import ProviderSelect from '../forms/provider-select'
import TagInput from '../forms/tag-input'
import { MultipleImageUploader } from '../forms/multiple-image-uploader'

interface Props {
  plugin: Plugin
}

export function PluginLine(props: Props) {
  const { plugin } = props

  const [sideOpen, setSideOpen] = useState(false)

  const { post, setData, isDirty, data, errors } = useForm({
    ...plugin,
  })

  const handleChangeStatus = (status: Status) => {
    setData('status', status)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    post(`/admin/plugins/${plugin.id}`, {
      onSuccess: () => {
        setSideOpen(false)
      },
    })
  }

  return (
    <>
      <div className="w-full flex justify-between bg-dark py-3 pl-8 pr-3 rounded-lg border-gradient items-center relative mb-1">
        <p className="font-medium">{plugin.name}</p>
        <Button type="button" onClick={() => setSideOpen(true)}>
          Edit
        </Button>
      </div>
      <div
        className={`fixed top-0 transition-all duration-200 w-2/3 bg-black h-screen z-20 p-10 ${sideOpen ? 'right-0' : '-right-1000'}`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Select
            label="Status"
            defaultValue={data.status}
            onChange={(e) => handleChangeStatus(e.target.value as Status)}
            options={[
              { value: 'pending', label: 'Pending' },
              { value: 'approved', label: 'Approved' },
              { value: 'rejected', label: 'Rejected' },
            ]}
          />
          <PPUploader onImageChange={(url) => setData('iconUrl', url)} label="Icon" />
          <Input
            label="plugin name"
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

          <TagInput label="Tags" currentTags={[]} onTagChange={(tags) => setData('tags', tags)} />
          {isDirty && (
            <Button type="submit">
              <span className="i-ri:save-line"></span>
              Save
            </Button>
          )}
        </form>
      </div>
      {sideOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"
          onClick={() => setSideOpen(false)}
        ></div>
      )}
    </>
  )
}
