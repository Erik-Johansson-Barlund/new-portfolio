import './App.css'
import Backdrop from './components/Backdrop'
import Hero from './components/Hero'
import Cv from './components/Cv'
import IconRow from './components/IconRow'
import MouseProvider from './contexts/MouseContext/MouseProvider'
import ParticleContainer from './components/ParticleContainer'

function App (): JSX.Element {
  return (
    <MouseProvider>
    <div>
      <Hero />
      <Backdrop />
      <ParticleContainer />
      <IconRow />
      <Cv />
    </div>
    </MouseProvider>
  )
}

export default App
