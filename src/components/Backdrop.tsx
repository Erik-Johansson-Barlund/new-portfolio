import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { MouseContext } from '../contexts/MouseContext/MouseProvider'

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  filter: blur(40px);
  z-index: 1;
`

const StyledCursor = styled.div`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
  pointer-events: none;
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

const colorRandomizer = (): number => Math.floor(Math.random() * 200 + 55)

function Backdrop (): JSX.Element {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [trailX, setTrailX] = useState(0)
  const [trailY, setTrailY] = useState(0)
  const [shapes, setShapes] = useState([])
  const [isClicked, setIsClicked] = useState(false)

  const { isHovering } = useContext(MouseContext)

  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setMouseX(e.x)
      setMouseY(e.y)
      setTimeout(() => {
        setTrailX(e.x)
        setTrailY(e.y)
      }, 70)
    })

    window.addEventListener('click', () => {
      setIsClicked(true)
      setTimeout(() => { setIsClicked(false) }, 100)
    })
  }, [])

  useEffect(() => {
    if (shapes.length < 3) {
      const coinflip = Math.floor(Math.random() * 100 + 1) < 50
      const newShape = {
        id: crypto.randomUUID(),
        color: `rgba(${colorRandomizer()}, ${colorRandomizer()}, ${colorRandomizer()}, 0.1)`,
        size: Math.random() * 400 + 100,
        startTop: coinflip ? window.innerHeight : -399,
        startLeft: Math.round(Math.random() * window.innerWidth),
        velX: coinflip ? Math.floor(Math.random()) * 25 + 0.5 : -Math.floor(Math.random()) * -5 - 0.5,
        velY: coinflip ? Math.random() + 1 : -Math.random() - 1
      }

      setShapes((old: any[]): any => [...old, newShape])
    }
  }, [shapes])
  return (
    <>
    <StyledBackdrop>
      {/* {shapes.map((shape) => (
        <BackgroundShape
          key={shape.id}
          id={shape.id}
          size={shape.size}
          top={shape.startTop}
          left={shape.startLeft}
          startVelX={shape.velX}
          startVelY={shape.velY}
          color={shape.color}
          mouseX={mouseX}
          mouseY={mouseY}
          kill={kill}
        />
     ) )} */}
     <StyledCursorTrail style={{ top: trailY, left: trailX, backgroundColor: isHovering ? 'pink' : '#dadada4f' }} />
    </StyledBackdrop>
    <StyledCursor style={{ top: mouseY, left: mouseX, width: isClicked ? '8px' : '4px', height: isClicked ? '8px' : '4px' }} />

    </>
  )
}

export default Backdrop
