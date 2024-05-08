import clsx from 'clsx'
import { Zynbabwe } from './Zymbabwe'
import { Wiggle } from './wiggle'

export const Navigation = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 flex-col overflow-x-clip">
      <div className="bg-accent px-8 py-4 flex justify-between items-center px-20">
        <div className="basis-1/2">
          <Zynbabwe />
        </div>
        <div className="flex flex-row justify-between basis-1/6 text-light font-bold">
          <NavigationButton name="Home" isActive={true} />
          <NavigationButton name="Shop" />
          <NavigationButton name="Deals" />
          <NavigationButton name="About" />
        </div>
      </div>
      <Wiggle />
    </div>
  )
}

const NavigationButton = ({ name, isActive = false }: any) => {
  return (
    <div className="">
      <button
        className={clsx(
          'text-light font-bold text-lg tracking-wide px-2 flex-auto flex',
          isActive ? 'opacity-100' : 'opacity-30',
        )}
      >
        {name}
      </button>
    </div>
  )
}
