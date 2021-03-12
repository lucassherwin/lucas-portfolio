import React from 'react'
import BrushIcon from '@material-ui/icons/Brush';
import SpeedIcon from '@material-ui/icons/Speed';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: 1px solid red;
`;

const BioContainer = styled.div`
  /* padding: 0 4vw 0 4vw; */
  /* display: flex; */
  /* float: right; */
  margin-left: auto;
  width: 49%;
  /* margin: 5px; */
  order: 2;
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
  border: 1px solid black;
  background-color: blue;
`;

const AboutHeader = styled.h1`
  text-align: center;
  margin-bottom: 5vh;
`;

const AboutItem = styled.div`
  text-align: center;
`;

const Skill = styled.div`
  background-color: gray;
  width: 120px;
  height: 25px;
  padding-left: 2px;
`;

const BarContainer = styled.div`
  /* display: inline; */
  /* float: left; */
  width: 40%;
  /* margin: 10px; */
  margin-right: auto;
  /* margin-top: -200px; */
  /* order: 1; */
  border: 1px solid red;
`;

const Bar = styled.div`
  max-width: 90%;
  height: 25px;
  width: ${props => props.width};
  background-color: red;
  margin: 10px 0 10px 5px;
  border: 1px solid black;
`;

const BioSkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid green;
`;


export default function About() {
  return (
    <AboutContainer id='about'>
      <AboutHeader>About</AboutHeader>
      <Wrapper>
        <AboutItem id='perf'>
          <SpeedIcon />
          <p>Performance</p>
          <p>Emphasis on fast load times and seamless user interaction.</p>
        </AboutItem>
        <AboutItem id='design'>
          <BrushIcon />
          <p>Design</p>
          <p>Intuitive designs that are simple and easy to use.</p>
        </AboutItem>
        <AboutItem id='responsive'>
          <ComputerIcon />
          <p>Responsive</p>
          <p>Responsive layouts built to last.</p>
        </AboutItem>
      </Wrapper>
      <BioSkillsWrapper>
        <BioContainer>
          <BioTitle>Hi, I'm Lucas. Nice to meet you.</BioTitle>
          <BioText>
            I am a full-stack software engineer with a background in computer science. I recently graduated from the Flatiron School's Full Stack Development 
            program and am looking for my first full-time job. Prior to Flatiron, I was a computer science major at Boston University, before leaving school in my junior year
            to pursure an alternate approach to my education. 
          </BioText>
          <BioText>
            Since graduating, I have been working as a freelance developer completing a variety of projects as well as advancing my education on my own learning technologies
            such as React Native, Python, and Node.js
          </BioText>
        </BioContainer>
      <BarContainer>
        <Bar width='90%'>
          <Skill>ReactJS</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>HTML</Skill>
        </Bar>
        <Bar width='90%'>
          <Skill>JavaScript</Skill>
        </Bar>
        <Bar width='75%'>
          <Skill>CSS</Skill>
        </Bar>
        <Bar width='70%'>
          <Skill>React Native</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>Ruby On Rails</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>Python</Skill>
        </Bar>
        <Bar width='50%'>
          <Skill>Node.js</Skill>
        </Bar>
        <Bar width='40%'>
          <Skill>Java</Skill>
        </Bar>
      </BarContainer>
      </BioSkillsWrapper>
    </AboutContainer>
  )
}




{/* <BioContainer>
        <BioTitle>Hi, I'm Lucas. Nice to meet you.</BioTitle>
        <BioText>
          I am a full-stack software engineer with a background in computer science. I recently graduated from the Flatiron School's Full Stack Development 
          program and am looking for my first full-time job. Prior to Flatiron, I was a computer science major at Boston University, before leaving school in my junior year
          to pursure an alternate approach to my education. 
        </BioText>
        <BioText>
          Since graduating, I have been working as a freelance developer completing a variety of projects as well as advancing my education on my own learning technologies
          such as React Native, Python, and Node.js
        </BioText>
      </BioContainer>
      <BarContainer>
        <Bar width='90%'>
          <Skill>ReactJS</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>HTML</Skill>
        </Bar>
        <Bar width='90%'>
          <Skill>JavaScript</Skill>
        </Bar>
        <Bar width='75%'>
          <Skill>CSS</Skill>
        </Bar>
        <Bar width='70%'>
          <Skill>React Native</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>Ruby On Rails</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>Python</Skill>
        </Bar>
        <Bar width='50%'>
          <Skill>Node.js</Skill>
        </Bar>
        <Bar width='40%'>
          <Skill>Java</Skill>
        </Bar>
      </BarContainer> */}