import React from 'react'
import styled from 'styled-components';

const ProjectsContainer = styled.div`
`;

const ProjectsHeader = styled.h1`
  text-align: center;
`

const SectionLabel = styled.h2`
  margin-left: 20px;
`

export default function Projects() {
  return (
    <ProjectsContainer id='projects'>
      <div>
        <div>
          <ProjectsHeader>Projects</ProjectsHeader>
          <SectionLabel>Under Construction</SectionLabel>
          <section className='card-list'>
          <article className='card'>
              <header className='card-header'>
                <h1>MyJST</h1>
                <p><a href='https://github.com/lucassherwin/MyJST' target="_blank" rel='noreferrer'>Source</a></p>
                <ul>
                  <li>Ruby on Rails and Vue based job search tracker</li>
                  <li>Allows user to track what jobs they have applied to</li>
                  <li>Each job can have a different status representing the status of the application</li>
                  <li>ToDo list to help stay organized</li>
                </ul>
              </header>
            </article>

            <article className='card'>
              <header className='card-header'>
                <h1><a href='https://github.com/lucassherwin/ClownBot_py' target="_blank" rel='noreferrer'>ClownBot_py</a></h1>
                <ul>
                  <li>Discord bot built in Python</li>
                  <li>Keeps track of "clowns" in a discord server</li>
                  <li>When a user reacts with the clown emoji (🤡) the message senders "clown score" goes up by one and increases for each subsequent reaction</li>
                  <li>The leaderboard can be shown with the "!clowns" command</li>
                </ul>
              </header>
            </article>

            <article className='card'>
              <header className='card-header'>
                <h1>NHL Fantasy App</h1>
                <p><a href='https://github.com/lucassherwin/nhl-fantasy-project' target="_blank" rel='noreferrer'>Frontend</a> | <a href='https://github.com/lucassherwin/nhl-fantasy-backend' target="_blank" rel='noreferrer'>Backend</a></p>
                <ul>
                  <li>Frontend built on React, backend built with Ruby on Rails</li>
                  <li>Custom built database to store player and user information</li>
                  <li>All player data comes from the offical NHL API</li>
                  <li>User can create an account, login, and create a team</li>
                  <li>The user can participate in a mock draft</li>
                  <li>The user can see their team stats by visiting the team stats page</li>
                  <li>They can also see the stats of an individual player by searching for that player by name</li> 
                </ul>
              </header>
            </article>
        </section>
    </div>

    <SectionLabel>Completed Projects</SectionLabel>
    <section className='card-list'>
      <article className='card'>
        <header className='card-header'>
          <h1>Tracker</h1>
          <p><a href='https://github.com/lucassherwin/tracker-frontend' target="_blank" rel='noreferrer'>Frontend</a> | <a href='https://github.com/lucassherwin/Tracker-backend' target="_blank" rel='noreferrer'>Backend</a></p>
          <ul>
            <li>React Native app using a Node.js backend with MongoDB</li>
            <li>App allows users to securely create an account that is saved in a MongoDB</li>
            <li>Once the user has an account, they can create a Track</li>
            <li>The Track will track their location as they walk and display their route on a map</li>T
            <li>The user can then save this Track in the database</li>
          </ul>
        </header>
      </article>
      <article className='card'>
        <header className='card-header'>
          <h1><a href='https://trivia-game-f5a86.web.app/' target="_blank" rel='noreferrer'>Trivia Game</a></h1>
          <p><a href='https://github.com/lucassherwin/trivia-game--frontend' target="_blank" rel='noreferrer'>Frontend</a> | <a href='https://github.com/lucassherwin/trivia-game--backend' target="_blank" rel='noreferrer'>Backend</a></p>
          <ul>
            <li>Custom trivia game built on pure HTML/JS</li>
            <li>Leaderboard data stored in database built with Ruby on Rails</li>
            <li>All questions come from an outside trivia API</li>
          </ul>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <h1><a href='https://github.com/lucassherwin/BeerBook' target="_blank" rel='noreferrer'>BeerBook</a></h1>
          <ul>
            <li>Fullstack application built fully with Ruby on Rails</li>
            <li>User can create an account and login</li>
            <li>Once logged in the user can search for a specific beer and add it to their list of favorites</li>
            <li>This list is saved in a database</li>
            <li>User can also search for breweries</li>
            <li>All beer and brewery information comes from an outside API</li>
            <li>I am currently working on getting this hosted</li>
          </ul>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <h1>CLI Weather App</h1>
          <p><a href='https://github.com/lucassherwin/mod-1-weather-project' target="_blank" rel='noreferrer'>Code</a></p>
          <ul>
            <li>CLI app built fully with Ruby</li>
            <li>The user can search for a city by name and view relevant weather data</li>
            <li>All weather data comes form an external API</li>
          </ul>
        </header>
      </article>

      <article className='card'>
        <header className='card-header'>
          <h1>CLI NHL Stats App</h1>
          <p><a href='https://github.com/lucassherwin/mod_1_nhl_stat_project' target="_blank" rel='noreferrer'>Code</a></p>
          <ul>
            <li>CLI app built fully with Ruby</li>
            <li>Allows the user to search for any player in the NHL and view basic stats for that player</li>
            <li>Player can be searched by name, team, or draft year</li>
            <li>User can create a team and add players to that team, similar to a fantasy team</li>
            <li>All data comes from the NHL API</li>
          </ul>
        </header>
      </article>
      </section>
      </div>
    </ProjectsContainer>
  )
}
