import { useContext } from 'react'
import { MouseContext } from '../contexts/MouseContext/MouseProvider'
import Clickable from './Clickable'

function Icon ({ title, icon, isLarge, navigate }: { title?: string, icon: JSX.Element, isLarge: boolean, navigate: any }): JSX.Element {
  const large = 'relative flex justify-center items-center text-white shadow-md bg-zinc-900 p-3 min-w-32 rounded-md'
  const small = 'relative flex items-center justify-center text-white shadow-md bg-zinc-950 p-3 rounded-xl hover:bg-zinc-700 hover:shadow-lg'
  const filter = 'filter grayscale'
  const hover = 'hover:bg-zinc-700 hover:shadow-lg hover:filter-none'
  return (
    <div
      className={`${isLarge ? large : small} ${hover}`}
      onClick={navigate}
    >
      {icon}
      {!!title && (
        <>
          <div className="p-1" />
          {title}
        </>
      )}
      <Clickable />
    </div>
  )
}

export default Icon
