import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

function ParticleContainer (): JSX.Element {
  const particlesInit = async (main: any): Promise<any> => {
    await loadFull(main)
  };

  return (
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
          // attract = "attract",
          // bounce = "bounce",
          // bubble = "bubble",
          // connect = "connect",
          // grab = "grab",
          // light = "light",
          // repulse = "repulse",
          // slow = "slow",
          // trail = "trail"
          onHover: {
            enable: true,
            mode: 'attract',
          },
          resize: true
        },
        modes: {
          push: {
            quantity: 4
          },
          repulse: {
            distance: 400,
            duration: 0.2
          }
        }
      },
      particles: {
        color: {
          value: '#31e245'
        },
        links: {
          color: '#a6a4a4',
          distance: 150,
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
            default: 'bounce'
          },
          random: true,
          speed: 0.3,
          straight: false
        },
        number: {
          density: {
            enable: true,
            area: 800
          },
          value: 60
        },
        opacity: {
          value: 0.2
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
  )
}

export default ParticleContainer
