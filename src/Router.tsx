import {
  Routes, Route, Navigate, useLocation
} from 'react-router-dom'
import Home from './pages/Home'
import { AnimatePresence } from 'framer-motion'
import About from './pages/About'
import Transition from './pages/Transition'
import Projects from './pages/Projects'

export const BASEPATH: string = '/new-portfolio/'

export enum RoutesConstants {
  home = '/',
  projects = '/projects/',
  about = '/about/',
  contact = '/contact/',
}

// Pages
// const About = lazy((): Promise<{ default: ComponentType<any> }> => import('/Home'));

function Router (): JSX.Element {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          key={RoutesConstants.home}
            path={RoutesConstants.home}
            element={
              <Transition key={RoutesConstants.home}>
                <Home key={RoutesConstants.home} />
              </Transition>
}
          />
        <Route
          key={RoutesConstants.about}
            path={RoutesConstants.about}
            element={
              <Transition key={RoutesConstants.about}>
                <About key={RoutesConstants.about} />
              </Transition>
           }
          />
        <Route
          key={RoutesConstants.projects}
            path={RoutesConstants.projects}
            element={
              <Transition key={RoutesConstants.projects}>
                <Projects key={RoutesConstants.projects} />
              </Transition>
           }
          />
        {/* THE WILDCARD PATH MUST BE THE LAST ROUTE */}
        <Route path="*" element={<Navigate to={RoutesConstants.home} />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Router
