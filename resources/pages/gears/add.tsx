import { useState, type FormEvent } from 'react'
import { Input } from '../../components/forms/input'
import { LayoutAccount } from '../../components/layout/layout-account'
import { useForm } from '@inertiajs/react'
import CardSearchGear from '../../components/cards/card-search-gear'
import type { AmazonSearchResults } from '../../../types/amazon'
import type { GearCategory } from '../../../types/gear_category'

interface Props {
  categories: GearCategory[]
}

export default function CreateTool(props: Props) {
  const { categories } = props

  const [searchResults, setSearchResults] = useState<AmazonSearchResults>([])

  const { setData, data } = useForm({
    keywords: '',
  })

  const searchProduct = async (e: FormEvent) => {
    e.preventDefault()
    const search = await fetch('/amazon/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ keywords: data.keywords }),
    })

    const results = await search.json()

    setSearchResults(results)
  }

  return (
    <LayoutAccount>
      <h1 className="text-5xl font-black mb-10">Add a new gear</h1>

      <form onSubmit={searchProduct} className="mb-10">
        <Input
          type="text"
          onChange={(e) => setData('keywords', e.target.value)}
          label="Search a product"
          containerClassName="flex-1"
        />
      </form>

      <div className="grid grid-cols-1 gap-5" md="grid-cols-2" lg="grid-cols-3">
        {searchResults.map((result) => (
          <CardSearchGear key={result.link} search={result} categories={categories} />
        ))}
      </div>
    </LayoutAccount>
  )
}
