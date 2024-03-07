import * as TooltipPrimitive from '@radix-ui/react-tooltip'

interface Props {
  trigger: React.ReactNode
  content: string
}

export function Tooltip(props: Props) {
  const { trigger, content } = props

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root delayDuration={300}>
        <TooltipPrimitive.Trigger className="w-full">{trigger}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            alignOffset={8}
            side="bottom"
            align="start"
            className="w-70 text-sm bg-black p-2 rounded"
          >
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
