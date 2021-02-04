import React from 'react'
import styled from 'styled-components';
import { scroller } from "react-scroll";

export default function Home() {
  const Home = styled.div`
    height: 100vh;
    display: flex;
    text-align: center;
    justify-content: center;
    vertical-align: middle;
  `;

  const Welcome = styled.div`
    position: absolute;
    top: 40%;
    border: 3px solid black;
    padding: 10px
  `;

  const Button = styled.button`
    font-size: 1em;
    padding: 0.25em 1em;
    border: 2px solid red;
    border-radius: 3px;
  `;

  return (
    <Home id='home'>
      <Welcome>
        <p>Hello, I'm Lucas Sherwin.</p>
        <p>I am a full stack web developer.</p>
        <Button onClick={() => scroller.scrollTo('about', {smooth: true, duration: 1000})}>See my work</Button>
      </Welcome>
    </Home>
  )
}
