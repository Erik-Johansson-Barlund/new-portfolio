import Particles from 'react-particles'
import { loadFull } from 'tsparticles'

function ParticleContainer (): JSX.Element {
  const particlesInit = async (main: any): Promise<any> => {
    await loadFull(main)
  }

  return (
    <div className="absolute w-screen h-screen z-0">
      <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'repulse'
          },
          onHover: {
            enable: true,
            mode: 'attract'
          },
          resize: false
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 1000,
            duration: 0.2
          }
        }
      },
      particles: {
        color: {
          value: '#0ef229'
        },
        links: {
          color: '#7e7575',
          distance: 300,
          enable: true,
          opacity: 0.5,
          width: 1
        },
        collisions: {
          enable: true
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'out'
          },
          random: true,
          speed: 0.2,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 20
        },
        opacity: {
          value: 0.4
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: { min: 1, max: 3 }
        }
      },
      detectRetina: true
    }}
  />
    </div>
  )
}

export default ParticleContainer
