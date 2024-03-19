import { useContext } from 'react'
import { MouseContext } from '../contexts/MouseContext/MouseProvider'

// transparent helper class to make elements clickable, handles mouse hover state
function Clickable (): JSX.Element {
  const { isHovering, setIsHovering } = useContext(MouseContext)
  return (
    <div
    onMouseEnter={() => {
      setIsHovering(true)
    }}
    onMouseLeave={() => {
      setIsHovering(false)
    }}
    className="absolute top-0 left-0 w-full h-full bg-opacity-0 z-50 rounded-md cursor-none"></div>
  )
}

export default Clickable
