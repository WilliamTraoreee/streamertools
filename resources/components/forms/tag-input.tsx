import { useState } from 'react'
import { WithContext as ReactTags } from 'react-tag-input'

interface Props {
  currentTags: string[]
  onTagChange: (tags: string[]) => void
  label?: string
  labelClassName?: string
}

const KeyCodes = {
  comma: 188,
  enter: 13,
}

const delimiters = [KeyCodes.comma, KeyCodes.enter]

export default function TagInput(props: Props) {
  const { currentTags, onTagChange, label, labelClassName } = props

  const [tags, setTags] = useState(currentTags.map((t) => ({ id: t, text: t })))
  const [isFocus, setIsFocus] = useState(false)

  const handleDelete = (i) => {
    onTagChange(tags.filter((tag, index) => index !== i).map((tag) => tag.text))
    setTags(tags.filter((tag, index) => index !== i))
  }

  const handleAddition = (tag) => {
    onTagChange([...tags, tag].map((tag) => tag.text))
    setTags([...tags, tag])
  }

  const handleDrag = (tag, currPos, newPos) => {
    const newTags = tags.slice()

    newTags.splice(currPos, 1)
    newTags.splice(newPos, 0, tag)

    onTagChange(newTags.map((tag) => tag.text))

    setTags(newTags)
  }

  return (
    <label className="">
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <ReactTags
        tags={tags}
        delimiters={delimiters}
        handleDelete={handleDelete}
        handleAddition={handleAddition}
        handleDrag={handleDrag}
        inputFieldPosition="bottom"
        autofocus={false}
        placeholder=""
        handleInputFocus={() => setIsFocus(true)}
        handleInputBlur={() => setIsFocus(false)}
        classNames={{
          tagInput: `border-gradient bg-dark h-14 ${isFocus ? 'border-gradient-active' : ''}`,
          tagInputField: 'bg-transparent w-full h-full outline-none text-white px-3',
          tag: 'bg-white px-3 py-1 text-black rounded-full font-bold inline-flex gap-2',
          selected: `flex flex-wrap gap-2 ${tags.length !== 0 ? 'mb-3' : ''}`,
        }}
      />
    </label>
  )
}
