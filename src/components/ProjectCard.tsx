import { useState, useEffect, useRef } from 'react'
import { type ProjectType } from '../pages/Projects'
import Clickable from './Clickable'

function ProjectCard ({ project }: { project: ProjectType }): JSX.Element {
  const [y, setY] = useState(0)
  const [x, setX] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const containerRect = containerRef.current?.getBoundingClientRect()
    const centerX = containerRect ? containerRect.left / 10 + containerRect.width / 10 : 0
    const centerY = containerRect ? containerRect.top / 10 + containerRect.height / 10 : 0

    containerRef.current?.addEventListener('mousemove', (e) => {
      setY(((centerY - e.pageY) / 29) + (centerY / 20))
      setX(((centerX - e.pageX) / 29) + (centerX / 20))
    })

    return () => {
      containerRef.current?.removeEventListener('mousemove', (e) => {
        console.log(e)
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="relative bg-pink-200 p-1">
      <div
      ref={containerRef}
        className={`
        test
        relative
       bg-white
        min-h-48
        min-w-96
       hover:bg-zinc-700
        `}
        style={{ transform: `rotateY(${-x}deg) rotateX(${-y}deg)` }}
      >P
        <p className='test-hover:text-red-400'>MMmmm</p>

      </div>
      <Clickable />
    </div>
  )
}

export default ProjectCard
