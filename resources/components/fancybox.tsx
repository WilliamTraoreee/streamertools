import * as Dialog from '@radix-ui/react-dialog'
import { motion } from 'framer-motion'

interface Props {
  image: string
}

const modalAnimation = {
  initial: {
    y: 30,
    x: 0,
    translateX: '-50%',
    translateY: '-50%',
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 60,
    },
  },
  out: {
    x: 0,
    y: 10,
    opacity: 0,
    transition: {
      duration: 0.3,
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
}

export function FancyBox(props: Props) {
  const { image } = props

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <img src={image} alt="image" className="rounded-lg" />
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="w-screen h-screen bg-black/60 fixed top-0 left-0 backdrop-blur z-[990]" />
        <Dialog.Content
          onOpenAutoFocus={(e) => e.preventDefault()}
          className="fixed top-1/2 left-1/2  w-fit z-[999]"
        >
          <motion.div variants={modalAnimation} initial="initial" animate="in" exit="out">
            <img src={image} alt="image" />
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
