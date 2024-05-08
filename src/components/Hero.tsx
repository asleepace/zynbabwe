export type HeroProps = {
  className?: string
}

export function Hero({ className }: HeroProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <Testimony />
      <div className="grid grid-cols-2 gap-x-4">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-accent p-1 rounded-2xl overflow-hidden">
            <img
              src="./public/holster.webp"
              alt="holster"
              className="rounded-2xl overflow-clip aspect-square"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-accent self-stretch flex flex-col flex-1 p-4 rounded-2xl overflow-hidden items-center justify-between gap-y-4">
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
            <button className="w-full mx-16 py-2.5 rounded-xl bg-z-green text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const Testimony = () => {
  return (
    <div className="bg-transparent items-center justify-center flex flex-col rounded-xl p-8 overflow-none">
      <img
        src="./public/five-stars.webp"
        alt="hero"
        className="max-w-[400px]"
      />
      <p className="prose text-light tracking-wider text-center italic text-xl opacity-90 leading-8">
        "Easily the best product of the year, hands down, literally!"
        <br />
        <span className="text-normal font-bold"> - Zynston Churchill</span>
      </p>
    </div>
  )
}
