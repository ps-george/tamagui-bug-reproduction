import type { UseFloatingOptions } from '@floating-ui/react'
import {
  safePolygon,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from '@floating-ui/react'
import { useCallback } from 'react'

// Custom floating context to override the Popper on web
export const useFloatingContext = ({
  open,
  setOpen,
  disable,
  disableFocus,
  hoverable,
}) => {
  return useCallback(
    (props: UseFloatingOptions) => {
      const floating = useFloating({
        ...props,
        open,
        onOpenChange: setOpen,
      }) as any
      const { getReferenceProps, getFloatingProps } = useInteractions([
        hoverable
          ? useHover(floating.context, {
              enabled: !disable && hoverable,
              handleClose: safePolygon({
                requireIntent: true,
                blockPointerEvents: true,
              }),
            })
          : useHover(floating.context, {
              enabled: false,
            }),
        useFocus(floating.context, {
          enabled: !disable && !disableFocus,
          keyboardOnly: true,
        }),
        useRole(floating.context, { role: 'dialog' }),
        useDismiss(floating.context, {
          enabled: !disable,
        }),
      ])
      return {
        ...floating,
        open,
        getReferenceProps,
        getFloatingProps,
      }
    },
    [open, setOpen, disable, disableFocus, hoverable]
  )
}
