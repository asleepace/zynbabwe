import clsx from 'clsx'
import { useMemo, type PropsWithChildren } from 'react'

export type TextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
> & {
  variant: 'body' | 'body-bold' | 'heading-1'
}

export const Text = ({ variant, className, children, ...props }: TextProps) => {
  const classNames = useMemo(
    () => getVariant(variant, className),
    [variant, className],
  )

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  )
}

function getVariant(variant: TextProps['variant'], className?: string) {
  const comp = <p className="tracking"></p>

  return clsx(
    'text-light prose',
    {
      'text-lg tracking-wide': variant === 'body',
      'body-bold': variant === 'body-bold',
      'text-5xl font-black tracking-tighter': variant === 'heading-1',
    },
    className,
  )
}
