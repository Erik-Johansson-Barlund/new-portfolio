import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MouseContext } from '../contexts/MouseContext/MouseProvider'

const StyledCursor = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: width height 0.1s ease-in-out;
`

const StyledCursorTrail = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #dadada4f;
  transform: translate(-50%, -50%);
  pointer-events: none;
`

function Backdrop (): JSX.Element {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [trailX, setTrailX] = useState(0)
  const [trailY, setTrailY] = useState(0)
  const [isClicked, setIsClicked] = useState(false)

  const { isHovering } = useContext(MouseContext)
  const cursorInteraction = (isClicked && isHovering) ? '4px' : (isClicked || isHovering) ? '8px' : '4px'

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMouseX(e.x)
      setMouseY(e.y)
      setTimeout(() => {
        setTrailX(e.x)
        setTrailY(e.y)
      }, 100)
    })

    window.addEventListener('mousedown', () => {
      setIsClicked(true)
    })

    window.addEventListener('mouseup', () => {
      setIsClicked(false)
    })
  }, [])

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden filter blur-xl z50">
        <StyledCursorTrail style={{ top: trailY, left: trailX, backgroundColor: isHovering ? '#2eb03984' : '#dadada4f' }} />
      </div>
      <StyledCursor style={{ top: mouseY, left: mouseX, width: cursorInteraction, height: cursorInteraction }} />
    </>
  )
}

export default Backdrop
