import React, { forwardRef } from 'react'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

import {
  IComponentBaseProps,
  ComponentColor,
  ComponentSize,
  ComponentStatus,
} from '../types'

export type ToggleProps = React.InputHTMLAttributes<HTMLInputElement> &
  IComponentBaseProps & {
    color?: Omit<ComponentColor, ComponentStatus | 'ghost'>
    size?: ComponentSize
  }

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  ({ color, size, dataTheme, className, ...props }, ref): JSX.Element => {
    const classes = twMerge(
      'toggle',
      className,
      clsx({
        [`toggle-${size}`]: size,
        [`toggle-${color}`]: color,
      })
    )

    return (
      <input
        {...props}
        ref={ref}
        type="checkbox"
        data-theme={dataTheme}
        className={classes}
      />
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
