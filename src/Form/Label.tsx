import React from 'react'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps } from '../types'

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> &
  IComponentBaseProps & {
    title?: string
  }

const Label = ({
  children,
  title,
  dataTheme,
  className,
  ...props
}: LabelProps): JSX.Element => {
  const classes = twMerge('label', className)

  return (
    <label {...props} className={classes}>
      <span className="label-text cursor-pointer">{title}</span>
      {children}
    </label>
  )
}

export default Label
