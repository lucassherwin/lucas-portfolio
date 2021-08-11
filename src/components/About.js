import React from 'react'
import BrushIcon from '@material-ui/icons/Brush';
import SpeedIcon from '@material-ui/icons/Speed';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  /* border: 1px solid red; */
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
  line-height: 5.5vh;
  margin-right: 50px;
`;

const AboutContainer = styled.div`
  height: 100vh;
  margin-top: 2vh;
  /* border: 1px solid black; */
  background-color: #f5f5f5;
  /* background-color: orange; */
`;

const AboutHeader = styled.h1`
  text-align: center;
  margin-bottom: 5vh;
`;

const AboutItem = styled.div`
  text-align: center;
`;

const Skill = styled.div`
  /* text-align: center; */
  background-color: #04c2c9;
  width: 120px;
  height: 25px;
  padding-left: 2px;
`;

const BarContainer = styled.div`
  /* background-color: white; */
  /* display: inline; */
  /* float: left; */
  width: 40%;
  /* margin: 10px; */
  margin-right: auto;
  margin-left: 20px;
  /* margin-top: -200px; */
  /* order: 1; */
  /* border: 1px solid red; */
`;

const Bar = styled.div`
  max-width: 90%;
  height: 25px;
  width: ${props => props.width};
  background-color: #00a1a7;
  margin: 10px 0 10px 5px;
  /* border: 1px solid black; */
`;

const BioSkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 1px solid green; */
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
            program. Prior to Flatiron, I was a computer science major at Boston University, before leaving school in my junior year
            to pursure an alternate approach to my education. 
          </BioText>
          <BioText>
            My most recent work expereince was with SpringBig as a junior developer. At SpringBig, I worked on a small team primarily handling bug fixes and feature updates.
            I worked mainly in the Ruby on Rails backend, occasionally tackling frontend updates, and creating and updating AWS lambdas. The technologies I worked with were
            Ruby on Rails and RSpec for the backend, Vue for the frontend, and JavaScript for the lambdas.  
          </BioText>
          <BioText>
            I am currently looking for my next full time position. Feel free to contact me and lets create something!
          </BioText>
        </BioContainer>
      <BarContainer>
        <Bar width='90%'>
          <Skill>ReactJS</Skill>
        </Bar>
        <Bar width='90%'>
          <Skill>JavaScript</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>Ruby On Rails</Skill>
        </Bar>
        <Bar width='80%'>
          <Skill>HTML</Skill>
        </Bar>
        <Bar width='75%'>
          <Skill>CSS</Skill>
        </Bar>
        <Bar width='70%'>
          <Skill>React Native</Skill>
        </Bar>
        <Bar width='70%'>
          <Skill>Vue</Skill>
        </Bar>
        <Bar width='70%'>
          <Skill>Python</Skill>
        </Bar>
        <Bar width='60%'>
          <Skill>RSpec</Skill>
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