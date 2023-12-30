import {useState, useEffect} from 'react'
import styled from 'styled-components'
import IndividualNode from './IndividualNode'

const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 99.9vw;
  height: 99.9vh;
  display: grid;
  grid-template-rows: repeat(${20}, 1fr);
  grid-template-columns: repeat(${20}, 1fr);
  gap: 1px;
`;
console.log(window.innerHeight / 20)

function Backdrop2() {
  const grid = [...Array(Math.ceil((window.innerWidth / 20) * (window.innerHeight / 20)))]

  return (
    <StyledBackdrop>
      {grid.map((_, index) => <IndividualNode key={index.toString()} />)}</StyledBackdrop>
  )
}

export default Backdrop2