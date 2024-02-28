import { useState } from 'react'

export default function TestPage() {
  const [state, setState] = useState(0)

  return (
    <div>
      <button className="bg-blue-500" onClick={() => setState(state + 1)}>
        {state}
      </button>
    </div>
  )
}
