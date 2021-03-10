import React from 'react'
import BrushIcon from '@material-ui/icons/Brush';
import SpeedIcon from '@material-ui/icons/Speed';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BioContainer = styled.div`
  padding: 0 4vw 0 4vw;

`;

const BioTitle = styled.h2`
  text-align: center;
`;

const BioText = styled.p`
  text-align: center;
  line-height: 5.5vh
`;

const AboutContainer = styled.div`
  margin-top: 2vh;
`;

const AboutHeader = styled.h1`
  text-align: center;
  margin-bottom: 5vh;
`;

const AboutItem = styled.div`
  /* text-align: center; */
`;

// const IconContainer = styled.div`
//   float: left;
// border-right: 30px solid #6C6;
// border-top: 52px solid transparent;
// border-bottom: 52px solid transparent;

// float: left;
// width: 60px;
// height: 104px;
// background-color: #6C6;

// float: left;
// border-left: 30px solid #6C6;
// border-top: 52px solid transparent;
// border-bottom: 52px solid transparent;
// `;

export default function About() {
  return (
    <AboutContainer id='about'>
      <AboutHeader>About</AboutHeader>
      <Wrapper>
        <AboutItem id='perf'>
          <div className='hexagon'>
            <SpeedIcon />
          </div>
          <p>Performance</p>
          <p>Emphasis on fast load times and seamless user interaction.</p>
        </AboutItem>
        <AboutItem id='design'>
          <div className='hexagon'>
            <BrushIcon />
          </div>
          <p>Design</p>
          <p>Intuitive designs that are simple and easy to use.</p>
        </AboutItem>
        <AboutItem id='responsive'>
          <div className='hexagon'>
            <ComputerIcon />
          </div>
          <p>Responsive</p>
          <p>Responsive layouts built to last.</p>
        </AboutItem>
      </Wrapper>
      <BioContainer>
        <BioTitle>Hi, I'm Lucas. Nice to meet you.</BioTitle>
        <BioText>
          I am a full-stack software engineer with a background in computer science. I recently graduated from the Flatiron School's Full Stack Development 
          program and am looking for my first full-time job. Prior to Flatiron, I was a computer science major at Boston University, before leaving school in my junior year
          to pursure an alternate approach to my education. 
        </BioText>
      </BioContainer>
    </AboutContainer>
  )
}
