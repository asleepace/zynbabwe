import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export type ContainerProps = PropsWithChildren<{
  className?: string
}>

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={clsx(
        'items-center justify-center m-auto w-full flex flex-1 max-w-[800px]',
        className,
      )}
    >
      {children}
    </div>
  )
}
