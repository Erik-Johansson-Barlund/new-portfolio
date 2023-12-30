import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const FlyingShape = styled.div<{size: number, color: string}>`
  position: absolute;
  width: ${({ size }): number => size}px;
  height: ${({ size }): number => size}px;
  background-color: ${({ color }): string => color};
  border-radius: 50%;
`;

type ShapeProps = {
  id: string
  size: number 
  top: number
  left: number
  startVelX: number
  startVelY: number
  color: string
  mouseX: number
  mouseY: number
  kill: (id: string) => void
};

function BackgroundShape({ id, size, top, left, startVelX, startVelY, color, mouseX, mouseY, kill }: ShapeProps) {
  const [currentTop, setCurrentTop] = useState<number>(top)
  const [currentLeft, setCurrentLeft] = useState<number>(left)
  const [velX, setVelX] = useState(startVelX);
  const [velY, setVelY] = useState(startVelY)
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const left = box.current?.offsetLeft ?? 0;
    const right = left + size;
    const top = box.current?.offsetTop ?? 0; 
    const bottom = top + size;

    if(top < -400 || left < -400 || top > window.innerHeight || left > window.innerWidth) {
      kill(id)
    };

    if(mouseX > left && mouseX < right && mouseY > top && mouseY < top + 10) {
      setVelY(-25)
    }
    if(mouseX > left && mouseX < right && mouseY > bottom - 10 && mouseY < bottom + 10) {
      setVelY(25)
    }
    if(mouseX > left && mouseX < (right - size / 2) && mouseY > top - 10 && mouseY < bottom - 10) {
      setVelX(-25)
    }
    if(mouseX > (right - size / 2)  && mouseX < right + 10 && mouseY > top + 10 && mouseY < bottom - 10) {
      setVelX(25)
    }
  }, [currentTop])

  useEffect(() => {
    const animation = () => {
      setCurrentTop(old => old -= velY)
      setCurrentLeft(old => old -= velX)
    }

    const interval = setInterval(animation, 50)

    return () => {
      clearInterval(interval)
    }
  }, [velX, velY])

  return (
        <FlyingShape 
          ref={box}
          size={size} 
          color={color}
          style={{
            top: currentTop,
            left: currentLeft
          }}
        />
  )
}

export default BackgroundShape