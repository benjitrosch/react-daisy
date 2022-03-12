import React from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import { IComponentBaseProps, ComponentColor } from '../types'

export type StepProps = React.LiHTMLAttributes<HTMLLIElement> &
  IComponentBaseProps & {
    value?: string
    color?: ComponentColor
  }

const Step = ({
  children,
  value,
  color,
  dataTheme,
  className,
  ...props
}: StepProps): JSX.Element => {
  const classes = twMerge(
    'step',
    className,
    clsx({
      [`step-${color}`]: color,
    })
  )

  return (
    <li
      {...props}
      data-theme={dataTheme}
      data-content={value}
      className={classes}
    >
      {children}
    </li>
  )
}

export default Step
