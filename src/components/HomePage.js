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
`;

const Welcome = styled.div`
  position: absolute;
  top: 25%;
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
        <Text className='nameFade'>I'm <span style={{color: 'red'}}>Lucas Sherwin.</span></Text>
        <Text className='fsFade'>I'm a Full Stack Developer.</Text>
        <Button style={{height: 55, color: 'red', border: '1px solid red'}} variant='outlined' color='primary' onClick={() => scroller.scrollTo('about', {smooth: true, duration: 1000})}>See my work</Button>
      </Welcome>
    </Home>
  )
}


// const Button = styled.button`
//   font-size: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid red;
//   border-radius: 3px;
// `;
