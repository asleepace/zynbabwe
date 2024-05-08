import clsx from 'clsx'

export type PalmTreeProps = {
  className?: string
}

export function PalmTree({ className }: PalmTreeProps) {
  return (
    <div
      className={clsx(
        'absolute flex items-end justify-end -right-[200px] -bottom-[220px] opacity-20',
        className,
      )}
    >
      <img
        src="./public/palm.png"
        alt="palm tree"
        className="w-[600px] h-auto"
      />
    </div>
  )
}
