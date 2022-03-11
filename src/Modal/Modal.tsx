import React, { forwardRef, ReactNode, useImperativeHandle } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

import Button from '../Button'

export type ModalRef = {
  accept: () => void
  cancel: () => void
}

export type ModalProps = React.HTMLAttributes<HTMLDivElement> &
  IComponentBaseProps & {
    children?: ReactNode | ReactNode[]
    open?: boolean
    title?: string
    footer?: boolean
    acceptText?: string
    cancelText?: string
    onAccept?: () => void
    onCancel?: () => void
  }

const Modal = forwardRef<ModalRef, ModalProps>(
  (
    {
      children,
      open,
      title,
      footer = true,
      acceptText = 'Accept',
      cancelText = 'Close',
      onAccept,
      onCancel,
      dataTheme,
      className,
      ...props
    },
    ref
  ): JSX.Element => {
    const classes = twMerge(
      'modal',
      className,
      clsx({
        'modal-open': open,
      })
    )

    useImperativeHandle(ref, (): ModalRef => {
      return {
        accept: () => {
          onAccept && onAccept()
        },
        cancel: () => {
          onCancel && onCancel()
        },
      }
    })

    return (
      <div {...props} data-theme={dataTheme} className={classes}>
        <div className="modal-box">
          {title ? <div className="w-full mb-8 text-xl">{title}</div> : null}

          <div>{children}</div>

          {footer ? (
            <div className="modal-action">
              <Button onClick={onAccept} color="primary">
                {acceptText}
              </Button>
              <Button onClick={onCancel}>{cancelText}</Button>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
)

Modal.displayName = 'Modal'

export default Modal
