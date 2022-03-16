import React, { ReactElement } from 'react'
import clsx from 'clsx'

import { AvatarProps } from './Avatar'

type AvatarGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  children: ReactElement<AvatarProps> | ReactElement<AvatarProps>[]
}

const AvatarGroup = React.forwardRef<HTMLDivElement, AvatarGroupProps>(
  ({ children, className, ...props }, ref): JSX.Element => {
    const classes = clsx('avatar-group', '-space-x-6', className)

    return (
      <div {...props} className={classes} ref={ref}>
        {children}
      </div>
    )
  }
)

export default AvatarGroup
