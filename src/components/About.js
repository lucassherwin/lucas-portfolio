import React from 'react'
import BrushIcon from '@material-ui/icons/Brush';
import SpeedIcon from '@material-ui/icons/Speed';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

export default function About() {
  const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  return (
    <div id='about'>
      <h1>About Me</h1>
      <Wrapper>
        <div id='perf'>
          <SpeedIcon />
          <p>Performance</p>
          <p>Emphasis on fast load times and seamless user interaction</p>
        </div>
        <div id='design'>
          <BrushIcon />
          <p>Design</p>
          <p>Intuitive designs that are simple and easy to use.</p>
        </div>
        <div id='responsive'>
          <ComputerIcon />
          <p>Responsive</p>
          <p>Responsive layouts built to last.</p>
        </div>
      </Wrapper>
    </div>
  )
}
