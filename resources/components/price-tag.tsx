interface Props {
  prices: ('free' | 'paid')[]
}

export default function PriceTag(props: Props) {
  const { prices } = props

  return (
    <>
      {prices.includes('free') && prices.length === 1 && (
        <span className="inline-flex h-8 items-center px-3 text-sm font-bold bg-green-200 text-green-700 rounded">
          Free
        </span>
      )}

      {prices.includes('paid') && prices.length === 1 && (
        <span className="inline-flex h-8 items-center px-3 text-sm font-bold bg-red-200 text-red-700 rounded">
          Paid
        </span>
      )}

      {prices.length === 2 && (
        <span className="inline-flex h-8 items-center px-3 text-sm font-bold bg-orange-200 text-orange-700 rounded">
          Free + Paid
        </span>
      )}
    </>
  )
}
