import React from 'react'
import Hero from '../components/Hero'
import IconRow from '../components/IconRow'
import ParticleContainer from '../components/ParticleContainer'

function Home (): JSX.Element {
  return (
    <React.Fragment key={'test2'}>
      <Hero />
      <div className="absolute bottom-0 right-0">
        <img src="./assets/me.png" width="800px" />
      </div>
      <ParticleContainer />
      <IconRow />
    </React.Fragment>
  )
}

export default Home
