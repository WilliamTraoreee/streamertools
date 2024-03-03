import { useState } from 'react'
import { Modal } from '../modal'
import { type CropperRef, Cropper } from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css'
import debounce from 'debounce'
import { File as FileComponent } from './file'

interface Props {
  currentImages?: string[]
  onImagesChange: (urls: string[]) => void
  label?: string
  labelClassName?: string
}

export function MultipleImageUploader(props: Props) {
  const { currentImages, onImagesChange, label, labelClassName } = props

  const [currentImagesFile, setCurrentImagesFile] = useState<string[] | undefined>(currentImages)
  const [files, setFiles] = useState<File[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleFileChange = async (files: File[]) => {
    setFiles(files)
  }

  const handleUpload = async () => {
    setLoading(true)

    const uploads = await Promise.all(
      files.map((file) => {
        const formData = new FormData()
        formData.append('file', file)
        return fetch('/upload', {
          method: 'POST',
          body: formData,
          credentials: 'include',
        })
      })
    )

    const data = await Promise.all(uploads.map((res) => res.json()))

    setCurrentImagesFile(data.map((d) => d.fileUrl))

    setLoading(false)
    setOpen(false)
    onImagesChange(data.map((d) => d.fileUrl))
    setFiles(null)
  }

  return (
    <div>
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <div className="flex gap-5 items-center flex-col">
        <Modal
          open={open}
          onOpenChange={(isOpen) => setOpen(isOpen)}
          contentClassName="relative overflow-hidden"
          trigger={
            <div className="w-full flex justify-start">
              <p className="inline-flex bg-secondary-normal font-bold px-3 h-10 items-center rounded cursor-pointer text-black">
                Upload images
              </p>
            </div>
          }
        >
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center">
              <p className="text-white">Uploading...</p>
            </div>
          )}
          {!files && (
            <FileComponent
              text="Drag and drop your image here"
              infos={['Max 4 files', 'Max 3MB each']}
              buttonText="Select a file"
              onDrop={(acceptedFiles, rejectedFiles) => {
                handleFileChange(acceptedFiles)
                console.log(rejectedFiles)
              }}
              maxFiles={4}
              maxSize={3 * 1024 * 1024}
              accept={{
                'image/png': ['.png'],
                'image/jpg': ['.jpg', '.jpeg'],
                'image/svg': ['.svg'],
                'image/gif': ['.gif'],
                'image/webp': ['.webp'],
              }}
            />
          )}
          {files && !loading && (
            <div className="flex justify-center mt-3 flex-col items-center">
              <div className="grid grid-6 grid-cols-1 justify-center">
                {files.map((file, index) => (
                  <img
                    src={URL.createObjectURL(file)}
                    key={index}
                    className="w-full h-auto rounded"
                  />
                ))}
              </div>
              <p
                className="inline-flex bg-secondary-normal font-bold px-3 h-10 items-center rounded text-black cursor-pointer w-fit"
                onClick={handleUpload}
              >
                Upload
              </p>
            </div>
          )}
        </Modal>
        {currentImagesFile && (
          <div className="grid grid-6 grid-cols-1" lg="grid-cols-2">
            {currentImagesFile.map((url, index) => (
              <img src={url} key={index} className="w-full h-auto rounded-xl" />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}