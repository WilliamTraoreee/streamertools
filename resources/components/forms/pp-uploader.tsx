import { useState } from 'react'
import { Modal } from '../modal'
import { type CropperRef, Cropper } from 'react-advanced-cropper'
import 'react-advanced-cropper/dist/style.css'
import debounce from 'debounce'
import { File as FileComponent } from './file'

interface Props {
  currentImage?: string
  onImageChange: (url: string) => void
  label?: string
  labelClassName?: string
}

export function PPUploader(props: Props) {
  const { currentImage, onImageChange, label, labelClassName } = props

  const [currentImageFile, setCurrentImageFile] = useState<string | undefined>(currentImage)
  const [file, setFile] = useState<string | null>(null)
  const [croppedImg, setCroppedImg] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)

  const handleFileChange = async (file: File) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setFile(reader.result as string)
    }
  }

  const handleUpload = async () => {
    setLoading(true)
    const arr = croppedImg.split(',')
    const mime = arr[0].match(/:(.*?);/)![1]
    const bstr = atob(arr[1])
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    const final = new File([u8arr], 'image', { type: mime })

    const formData = new FormData()
    formData.append('file', final)
    const res = await fetch('/upload', {
      method: 'POST',
      body: formData,
      credentials: 'include',
    })

    const data = await res.json()
    setCurrentImageFile(data.fileUrl)
    setLoading(false)
    setOpen(false)
    onImageChange(data.fileUrl)
  }

  const onChange = (cropper: CropperRef) => {
    debounce(() => {
      setCroppedImg(cropper.getCanvas()?.toDataURL())
    }, 1000)()
  }

  return (
    <div>
      {label && <span className={`block text-sm font-medium mb-2 ${labelClassName}`}>{label}</span>}
      <div className="flex gap-5 items-center">
        {currentImageFile && (
          <img src={currentImageFile} className="w-30 h-30 rounded-xl" loading="lazy" />
        )}
        <Modal
          open={open}
          onOpenChange={(isOpen) => setOpen(isOpen)}
          contentClassName="relative overflow-hidden"
          trigger={
            <p className="inline-flex bg-secondary-normal font-bold px-3 h-10 items-center rounded cursor-pointer text-black">
              Upload an image
            </p>
          }
        >
          {loading && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/90 flex items-center justify-center">
              <p className="text-white">Uploading...</p>
            </div>
          )}
          {!file && (
            <FileComponent
              text="Drag and drop your image here"
              buttonText="Select a file"
              onDrop={(acceptedFiles) => handleFileChange(acceptedFiles[0])}
              maxFiles={1}
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
          <Cropper src={file} onChange={onChange} aspectRatio={{ maximum: 1, minimum: 1 }} />
          {croppedImg && !loading && (
            <div className="flex justify-center mt-3">
              <p
                className="inline-flex bg-secondary-normal font-bold px-3 h-10 items-center rounded text-black cursor-pointer text-black"
                onClick={handleUpload}
              >
                Upload
              </p>
            </div>
          )}
        </Modal>
      </div>
    </div>
  )
}
