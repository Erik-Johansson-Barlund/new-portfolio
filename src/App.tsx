import { useState } from 'react'
import './App.css'
import Backdrop from './components/backdrop'
import Hero from './components/Hero'
import Backdrop2 from './components/Backdrop2'
import Cv from './components/Cv'
import IconRow from './components/IconRow'
import MouseProvider from './contexts/MouseContext/MouseProvider'
import ParticleContainer from './components/ParticleContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MouseProvider>
    <div>
      

      {/* <Backdrop2 /> */}
      
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
