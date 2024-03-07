import { Button } from '../../components/button'
import type { AmazonSearchResult } from '../../../types/amazon'
import type { GearCategory } from '../../../types/gear_category'
import { Modal } from '../../components/modal'
import { Select } from '../../components/forms/select'
import { useForm } from '@inertiajs/react'
import { useState, type FormEvent } from 'react'

interface Props {
  search: AmazonSearchResult
  categories: GearCategory[]
}

export default function CardSearchGear(props: Props) {
  const { search, categories } = props

  const [open, setOpen] = useState(false)

  const { setData, post, data } = useForm({
    gear_category: categories[0].slug,
    description: 'ok',
    name: search.title,
    price: search.price,
    image: search.image,
    link: search.link,
  })

  const addProduct = async (e: FormEvent) => {
    e.preventDefault()
    post('/gears', {
      onSuccess: () => setOpen(false),
    })
  }

  return (
    <div className="p-4 bg-dark border-gradient">
      <div className="w-full aspect-square rounded bg-white p-5 mb-3">
        <img src={search.image} className="w-full object-contain aspect-square" />
      </div>
      <h3 className="font-medium truncate">{search.title}</h3>
      <h4 className="text-green mb-3">{search.price}</h4>
      <div className="w-full flex gap-2">
        <Button variant="dark" link={search.link} external className="flex-1">
          See the product
        </Button>
        <Modal
          trigger={<Button className="flex-1">Add the product</Button>}
          open={open}
          onOpenChange={setOpen}
        >
          <form onSubmit={addProduct}>
            <Select
              label="Category"
              options={categories.map((cat) => ({
                label: cat.name,
                value: cat.slug,
              }))}
              value={data.gear_category}
              onChange={(e) => setData('gear_category', e.target.value)}
            />
            <Button type="submit" className="mt-5">
              Add the product
            </Button>
          </form>
        </Modal>
      </div>
    </div>
  )
}
