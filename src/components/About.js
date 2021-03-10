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
  text-align: center;
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
      <BioContainer>
        <BioTitle>Hi, I'm Lucas. Nice to meet you.</BioTitle>
        <BioText>
          Like many others, my coding journey began at a young age being interested in computers.
          I started programming early in high school, and eventually became a Computer Science major at Marist College. 
          After two years at Marist, I transferred to Boston University. I continued my computer science education at BU until I decided it was time to make a change. 
          The traditional Computer Science education path wasn't a good fit for me and my learning style, so I decided it was time to make a change, and dropped out of college.
          This allowed me to pursue web development by attending the Flatiron School, an accredited coding bootcamp, with a curriculum focused on Full Stack Development.
          At Flatiron, I was able to build my skills in a variety of web technologies. I built RESTful APIs using Ruby on Rails and PostgreSQL, and responsive front end applications
          using HTML, CSS, JavaScript, and ReactJS. I built these projects both individually and collaboratively in small groups, in person and remote, using Git.
        </BioText>
        <BioText>
          Since graduating from Flatiron, I have continued my web development journey by taking on a variety of personal projects. I have continued my education by
          using online courses to learn a variety of new techonologies. Most recently, I have been learning React Native to develop mobile applications, and Django, to develop
          web apps using Python.
        </BioText>
      </BioContainer>
    </AboutContainer>
  )
}
