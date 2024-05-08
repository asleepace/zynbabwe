import clsx from 'clsx'
import type { PropsWithChildren } from 'react'
import { Button } from './Button'

export type HeroProps = {
  className?: string
}

export type GridCardProps = PropsWithChildren<{
  className?: string
}>

const GridCard = ({ children, className }: GridCardProps) => {
  return (
    <div
      className={clsx('bg-accent p-2 rounded-3xl overflow-hidden', className)}
    >
      {children}
    </div>
  )
}

export function Hero({ className }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Testimony />
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col items-center justify-center">
          <GridCard className="bg-slate-300">
            <img
              src="./public/holster.webp"
              alt="holster"
              className="rounded-2xl overflow-clip aspect-square"
            />
          </GridCard>
        </div>
        <div className="flex flex-col items-center justify-center">
          <GridCard className="bg-accent self-stretch flex flex-col flex-1 p-4 rounded-3xl items-center justify-between gap-y-4">
            <div className="flex flex-col flex-1 pt-8 items-center justify-center gap-y-4">
              <p className="text-xs text-white opacity-50 mb-4">
                Tactical. Trusted. Tobacco.
              </p>
              <p className="text-7xl font-black self-stretch text-center text-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                $19.95
              </p>
              <p className="text-lg italic text-light opacity-60">
                + shipping & handling
              </p>
            </div>
            <Button
              variant="green-highlight"
              onClick={() => alert('Added to cart!')}
            >
              Add to Cart
            </Button>
          </GridCard>
        </div>
      </div>
    </div>
  )
}

const Testimony = () => {
  return (
    <div className="bg-transparent items-center justify-center text-center flex flex-col p-8 overflow-none text-light tracking-wider">
      <img
        src="./public/five-stars.webp"
        alt="hero"
        className="max-w-[400px]"
      />
      <div className="flex flex-col gap-y-8">
        <p className="text-6xl font-[Caprasimo] semi-bold tracking-wider text-light">
          Tactical Zyn Holster
        </p>
        <p className="prose text-light italic text-xl opacity-90 leading-8">
          "Easily the best product of the year, hands down, literally!"
        </p>
        <p className="text-normal font-thin">- Zynston Churchill</p>
      </div>
    </div>
  )
}
