import React from 'react'
import styled from 'styled-components';
import { scroller } from "react-scroll";
import { Button } from '@material-ui/core';

const Home = styled.div`
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  vertical-align: middle;
  background-color: lightgray;
`;

const Welcome = styled.div`
  position: absolute;
  top: 20%;
  padding: 80px
`;

const Text = styled.p`
  color: black;
  font-size: 30px;
`;

export default function HomePage() {
  return (
    <Home id='home'>
      <Welcome>
        <Text className='helloFade'>Hello</Text>
        <Text className='nameFade'>I'm <span style={{color: 'red'}}>Lucas Sherwin</span></Text>
        <Text className='fsFade'>I'm a Full Stack Developer</Text>
        <Button className='buttonFade' style={{ color: 'red', border: '1px solid red'}} variant='outlined' color='primary' onClick={() => scroller.scrollTo('about', {smooth: true, duration: 1000})}>See my work</Button>
      </Welcome>
    </Home>
  )
}