import { useForm } from '@inertiajs/react'
import { useState, type FormEvent } from 'react'
import { Button } from '../button'
import type { GearCategory } from '../../../types/gear_category'
import type { Gear } from '../../../types/gear'
import { Select } from '../../components/forms/select'
import { Modal } from '../../components/modal'

interface Props {
  gear: Gear
  categories: GearCategory[]
}

export function GearLine(props: Props) {
  const { gear, categories } = props

  const [sideOpen, setSideOpen] = useState(false)

  const { submit, setData, isDirty, data } = useForm({
    ...gear,
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    submit('put', `/admin/gear/${gear.id}`, {
      onSuccess: () => {
        setSideOpen(false)
      },
    })
  }

  const handleDelete = (e: FormEvent) => {
    e.preventDefault()
    submit('delete', `/admin/gear/${gear.id}`, {
      onSuccess: () => {
        setSideOpen(false)
      },
    })
  }

  return (
    <>
      <div className="w-full flex justify-between bg-dark py-3 pl-8 pr-3 rounded-lg border-gradient items-center relative mb-1">
        <p className="font-medium">{gear.name}</p>
        <div className="flex gap-1">
          <Button type="button" onClick={() => setSideOpen(true)}>
            Edit
          </Button>
          <Modal trigger={<Button variant="dark">Delete</Button>} title="Are you sure to delete?">
            <form onSubmit={handleDelete}>
              <Button type="submit" variant="dark">
                Delete
              </Button>
            </form>
          </Modal>
        </div>
      </div>
      <div
        className={`fixed top-0 transition-all duration-200 w-2/3 bg-black h-screen z-20 p-10 ${sideOpen ? 'right-0' : '-right-1000'}`}
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <Select
            label="Category"
            options={categories.map((cat) => ({
              label: cat.name,
              value: cat.slug,
            }))}
            value={data.gearCategory}
            onChange={(e) => setData('gearCategory', e.target.value)}
          />
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
