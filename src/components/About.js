import React from 'react'
import BrushIcon from '@material-ui/icons/Brush';
import SpeedIcon from '@material-ui/icons/Speed';
import ComputerIcon from '@material-ui/icons/Computer';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const BioContainer = styled.div`
  margin-left: auto;
  width: 49%;
  order: 2;
`;

const BioTitle = styled.h2`
  text-align: center;
`;

const BioText = styled.p`
  text-align: left;
  line-height: 5.5vh;
  margin-right: 50px;
  max-width: 80%;
`;

const AboutContainer = styled.div`
  margin-top: 2vh;
  background-color: #f5f5f5;
`;

const AboutHeader = styled.h1`
  text-align: center;
  margin-bottom: 5vh;
`;

const AboutItem = styled.div`
  text-align: center;
`;

const Skill = styled.div`
  background-color: #04c2c9;
  width: 120px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BarContainer = styled.div`
  width: 40%;
  margin-right: auto;
  margin-left: 20px;
`;

const Bar = styled.div`
  max-width: 90%;
  height: 25px;
  width: ${props => props.width};
  background-color: #00a1a7;
  margin: 10px 0 10px 5px;
`;

const BioSkillsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
`

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
          <BioTitle>Work Experience</BioTitle>
          <ul>
            <li>
              <JobHeader>
                <span>Lendbuzz - Full Stack Engineer</span>
                <span>2021 - Current</span>
              </JobHeader>
              <BioText>
                Memeber of the frontend team to maintain existing code as well as build new features using the latest technologies. Responsible for two full stack React/Ruby on Rails web apps.<br/>
                Currently working with the payments squad focusing on the user facing borrower portal and the admin payments dashboard. 
              </BioText>
            </li>
            <li>
              <JobHeader>
                <span>SpringBig - Junior Developer</span>
                <span>04/2021 - 07/2021</span>
              </JobHeader>
              <BioText>
                Worked on a small team in a fast paced agile environment to implement feature updates and bug fixes with accompanying unit tests for a Ruby on Rails and Vue based web app.
                Assisted with integration of third party API's
              </BioText>
            </li>
          </ul>
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
