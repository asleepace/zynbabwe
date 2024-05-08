import clsx from 'clsx'
import { Fragment, memo, type PropsWithChildren } from 'react'

export type JSXButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export type ButtonProps = JSXButtonProps & {
  variant?:
    | 'green-highlight'
    | 'red-highlight'
    | 'blue-highlight'
    | 'accent-highlight'
  children?: React.ReactNode
  className?: string
  text?: string
  growOnHover?: boolean
}

export const Button = memo(
  ({ variant, text, children, growOnHover = true, className }: ButtonProps) => {
    return (
      <button
        className={clsx(
          'flex flex-row items-center justify-center self-stretch rounded-2xl p-3 font-bold tracking-wide text-lg text-light hover:text-white bg-transparent',
          {
            'bg-z-green hover:bg-green-600 hover:text-white':
              variant === 'green-highlight',
            'bg-z-red hover:bg-red-600 hover:text-white':
              variant === 'red-highlight',
            'bg-z-blue hover:bg-blue-600 hover:text-white':
              variant === 'blue-highlight',
            'bg-accent hover:bg-slate-600 hover:text-white':
              variant === 'accent-highlight',
          },
          className,
        )}
      >
        {text ?? children}
      </button>
    )
  },
)
