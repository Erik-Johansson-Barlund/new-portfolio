import Backdrop from './components/Backdrop'
import SocialRow from './components/SocialRow'
import MouseProvider from './contexts/MouseContext/MouseProvider'
import Router from './Router'

function App (): JSX.Element {
  return (
    <MouseProvider>
      <div className='flex flex-col justify-center items-center w-screen h-screen overflow-hidden'>
        <Router />
        <Backdrop />
        <SocialRow />
      </div>
    </MouseProvider>
  )
}

export default App
