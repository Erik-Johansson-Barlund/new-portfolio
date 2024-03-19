import { useNavigate } from 'react-router'
import Lottie from 'lottie-react'
import Icon from './Icon'
import { TfiEmail } from 'react-icons/tfi'
import { FaCodepen } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { RoutesConstants } from '../Router'
import { useContext } from 'react'
import { MouseContext } from '../contexts/MouseContext/MouseProvider'
import projectsAnimation from '../../public/assets/projectsAnimation.json'

function IconRow (): JSX.Element {
  const navigate = useNavigate()
  const { setIsHovering } = useContext(MouseContext)
  const doNavigate = (destination: string): void => {
    navigate(destination)
    setIsHovering(false)
  }

  return (
    <div className="flex gap-4 p14">
      <Icon
        title="Projects"
        icon={<FaCodepen />}
        isLarge
        navigate={(): void => { doNavigate(RoutesConstants.projects) }}
      />
      <Icon
        title="About"
        icon={<FaRegUserCircle />}
        isLarge
        navigate={(): void => { doNavigate(RoutesConstants.about) }}
      />
      <Icon
        title="Contact"
        icon={<MdOutlineMail />}
        isLarge
        navigate={(): void => { doNavigate(RoutesConstants.about) }}
      />
    </div>
  )
}

export default IconRow
