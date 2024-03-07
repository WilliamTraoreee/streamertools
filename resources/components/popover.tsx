import * as PopoverPrimitive from '@radix-ui/react-popover'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  trigger: React.ReactNode
  side?: 'top' | 'right' | 'bottom' | 'left'
  align?: 'start' | 'center' | 'end'
}

const popoverAnimation = {
  initial: {
    y: 10,
    x: 0,
    opacity: 0,
  },
  in: {
    x: 0,
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut',
      type: 'spring',
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

export function Popover(props: Props) {
  const { children, trigger, side = 'bottom', align = 'start' } = props

  return (
    <AnimatePresence>
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side={side}
            align={align}
            sideOffset={8}
            collisionPadding={12}
            className="outline-none z-[9999]"
            onOpenAutoFocus={(e) => e.preventDefault()}
          >
            <motion.div variants={popoverAnimation} initial="initial" animate="in" exit="out">
              <div className="rounded p-3 w-[260px] bg-dark border-gradient-no-hover outline-none shadow-lg">
                {children}
              </div>
            </motion.div>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </AnimatePresence>
  )
}
