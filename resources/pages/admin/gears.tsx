import { Modal } from '../../components/modal'
import { Button } from '../../components/button'
import { LayoutAccount } from '../../components/layout/layout-account'
import { Input } from '../../components/forms/input'
import { useForm, usePage } from '@inertiajs/react'
import { useState, type FormEvent } from 'react'

export default function Gears() {
  const [open, setOpen] = useState(false)

  const { post, setData } = useForm({
    name: '',
    slug: '',
    title: '',
    description: '',
  })

  const submit = (e: FormEvent) => {
    e.preventDefault()
    post('/gear-category', {
      onSuccess: () => {
        setOpen(false)
      },
    })
  }

  return (
    <LayoutAccount>
      <div className="flex items-center justify-between">
        <h1 className="text-4xl font-black mb-10" lg="text-6xl">
          Gears
        </h1>
        <div className="flex gap-2">
          <Button link="/admin/gears/add" variant="secondary">
            Add gear
          </Button>
          <Modal trigger={<Button>Create category</Button>} open={open} onOpenChange={setOpen}>
            <form onSubmit={submit}>
              <Input
                label="Name"
                onChange={(e) => setData('name', e.target.value)}
                containerClassName="mb-3"
              />
              <Input
                label="Slug"
                onChange={(e) => setData('slug', e.target.value)}
                containerClassName="mb-3"
              />
              <Input
                label="Title"
                onChange={(e) => setData('title', e.target.value)}
                containerClassName="mb-3"
              />
              <Input
                label="Description"
                onChange={(e) => setData('description', e.target.value)}
                containerClassName="mb-3"
              />
              <div className="flex justify-end">
                <Button type="submit">Create</Button>
              </div>
            </form>
          </Modal>
        </div>
      </div>
    </LayoutAccount>
  )
}
