import React, { useContext } from 'react'
import styled from 'styled-components';
import { MouseContext } from '../contexts/MouseContext/MouseProvider';

type IconProps = {
  title: string
  icon: JSX.Element
};

const StyledIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border-radius: 50%;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #47400f;
  }
`

function Icon({ title, icon}) {
  const {setIsHovering} = useContext(MouseContext)
  return (
    <StyledIcon
    onClick={() => console.log('clicked')}
    onMouseEnter={() => setIsHovering(true)}
    onMouseLeave={() => setIsHovering(false)}
    >
      {icon}
    </StyledIcon>
  )
}

export default Icon