import { Modal } from '../../components/modal'
import { Button } from '../../components/button'
import { LayoutAccount } from '../../components/layout/layout-account'
import { Input } from '../../components/forms/input'
import { useForm } from '@inertiajs/react'
import { useState, type FormEvent } from 'react'
import type { Gear } from '../../../types/gear'
import type { GearCategory } from '../../../types/gear_category'
import { CategoryLine } from '../../components/table/category-line'
import { GearLine } from '../../components/table/gear-line'

interface Props {
  gears: Gear[]
  categories: GearCategory[]
}

export default function Gears(props: Props) {
  const { gears, categories } = props

  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<'categories' | 'gears'>('categories')

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
      <div className="flex items-center justify-between mb-10">
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

      <div className="flex gap-2 mb-10">
        <Button
          onClick={() => setTab('categories')}
          variant={tab === 'categories' ? 'secondary' : 'dark'}
        >
          Categories
        </Button>
        <Button onClick={() => setTab('gears')} variant={tab === 'gears' ? 'secondary' : 'dark'}>
          Gears
        </Button>
      </div>

      {tab === 'categories' && (
        <div>
          {categories.length > 0 && (
            <div className="mb-10">
              {categories.map((category) => (
                <CategoryLine key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      )}

      {tab === 'gears' && (
        <div>
          {gears.length > 0 && (
            <div className="mb-10">
              {gears.map((gear) => (
                <GearLine key={gear.id} gear={gear} categories={categories} />
              ))}
            </div>
          )}
        </div>
      )}
    </LayoutAccount>
  )
}
