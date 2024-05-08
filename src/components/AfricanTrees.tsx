import clsx from 'clsx'

export type AfricanTreesProps = {
  className?: string
}

export function AfricanTrees({ className }: AfricanTreesProps) {
  return (
    <div
      className={clsx(
        'fixed left-0 right-0 top-0 bottom-0 z-0 flex flex-col items-end justify-end',
        className,
      )}
    >
      <img src="./public/jungle.svg" alt="jungle" className="h-full w-auto" />
    </div>
  )
}
