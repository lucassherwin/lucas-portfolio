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
  text-align: left;
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
  text-align: center;
`;

const SkillsContainer = styled.div`
  border: 1px solid blue;
  justify-content: right;
`;

const Skill = styled.div`
  background-color: gray;
  width: 70px;
  height: 25px;
  padding-left: 2px;
`;

const BarContainer = styled.div`
  /* padding: 2px; */
  /* margin: 0 2px 0 2px; */
`;

const Bar = styled.div`
  max-width: 90%;
  height: 25px;
  width: ${props => props.width};
  background-color: red;
  margin: 10px 0 10px 5px;
  border: 1px solid black;
`;


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
      <SkillsContainer>
        <BarContainer>
          <Bar width='90%'>
            <Skill>ReactJS</Skill>
          </Bar>
          <Bar width='80%'>
            <Skill>HTML</Skill>
          </Bar>
          <Bar width='90%'>
            <Skill>JS</Skill>
          </Bar>
          <Bar width='70%'>
            <Skill>CSS</Skill>
          </Bar>
          <Bar width='80%'>
            <Skill>Ruby On Rails</Skill>
          </Bar>
        </BarContainer>
      </SkillsContainer>
    </AboutContainer>
  )
}
