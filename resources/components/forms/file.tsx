import { useDropzone, type FileRejection } from 'react-dropzone-esm'
import { Button } from '../button'

interface FileProps {
  maxFiles: number
  accept: {
    [key: string]: string[]
  }
  maxSize: number
  onDrop: (acceptedFiles: File[], fileRejections: FileRejection[], event: unknown) => void
  text: string
  buttonText: string
  infos?: string[]
  label?: string
  containerClassName?: string
  className?: string
  labelClassName?: string
}

export function File(props: FileProps) {
  const {
    maxFiles,
    accept,
    maxSize,
    onDrop,
    text,
    infos,
    buttonText,
    containerClassName = '',
    className = '',
    label,
    labelClassName = '',
  } = props

  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: maxFiles,
    accept: accept,
    maxSize: maxSize,
    onDrop(acceptedFiles, fileRejections, event) {
      onDrop(acceptedFiles, fileRejections, event)
    },
  })

  return (
    <div className={containerClassName}>
      {label && <span className={`mb-2 block w-full text-sm ${labelClassName}`}>{label}</span>}
      <div
        {...getRootProps()}
        className={`w-full h-[250px] border-2 border-dashed border-zinc-800 rounded-lg flex flex-col justify-center items-center hover:border-primary-500 transition-colors duration-200 cursor-pointer relative ${className}`}
      >
        <input {...getInputProps()} />
        <span className="mb-3">{text}</span>
        <Button>{buttonText}</Button>
        <div className="flex gap-2 absolute bottom-5">
          {infos &&
            infos.map((info, index) => (
              <span
                className="inline-flex bg-zinc-800 text-xs uppercase px-2 py-1 rounded-sm"
                key={index}
              >
                {info}
              </span>
            ))}
        </div>
      </div>
    </div>
  )
}
