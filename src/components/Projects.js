import React from 'react'
// import '../card.css';

export default function Projects() {
    return (
        <div>
            <div>
                <h1>Completed Projects</h1>
                {/* the section will be the main container for the card list */}
                <section class='card-list'>
                    {/* each card will be an article */}
                    <article class='card'>
                        <header class='card-header'>
                            <h1><a href='https://trivia-game-f5a86.web.app/' target="_blank" rel='noreferrer'>Trivia Game</a></h1>
                            <p><a href='https://github.com/lucassherwin/trivia-game--frontend' target="_blank" rel='noreferrer'>Frontend</a> | <a href='https://github.com/lucassherwin/trivia-game--backend' target="_blank" rel='noreferrer'>Backend</a>
                            </p>
                        </header>
                    </article>

                    <article class='card'>
                        <header class='card-header'>
                            <p>Project 2</p>
                        </header>
                    </article>

                    <article class='card'>
                        <header class='card-header'>
                            <p>Project 3</p>
                        </header>
                    </article>

                    <article class='card'>
                        <header class='card-header'>
                            <p>Project 4</p>
                        </header>
                    </article>

                    <article class='card'>
                        <header class='card-header'>
                            <p>Project 5</p>
                        </header>
                    </article>
                </section>
            </div>
            


            {/* <h2>Completed Projects</h2>
            <ul>
                <li>
                    <a href='https://trivia-game-f5a86.web.app/' target="_blank" rel='noreferrer'>Trivia Game </a> <br />
                    Frontend: https://github.com/lucassherwin/trivia-game--frontend | Backend: https://github.com/lucassherwin/trivia-game--backend <br />
                    Built using pure HTML, JS, and CSS <br />
                    Small trivia game that gets trivia questions from an external API, and saves user name and user score in ruby on rails databse <br />
                </li>
                <li>
                    BeerBook <br />
                    ~~Recreate -- ran into issues with yarn -- should just have to copy the views models and controllers and seeds
                </li>
                <li>
                    <a href='https://github.com/lucassherwin/mod-1-weather-project' target='_blank' rel='noreferrer'>CLI Weather App</a> <br />
                    Ruby CLI App <br />
                    Makes API calls to retrieve real time weather data <br />
                </li>
                <li>
                    <a href='https://github.com/lucassherwin/mod_1_nhl_stat_project' target='_blank' rel='noreferrer'>CLI NHL Stats App</a> <br />
                    Ruby CLI App <br />
                    Allows user to enter a player name, draft year, or team and retrieve relevant statstics in the command line by making calls to the offical NHL API <br />
                </li>
            </ul>
            <h2>Under Construction</h2>
            <ul>
                <li>
                    NHL Fantasy App <br />
                    Frontend: https://github.com/lucassherwin/nhl-fantasy-project | Backend: https://github.com/lucassherwin/nhl-fantasy-backend <br />
                    URL: [to be created lol] <br />
                    Built on React front end using Bootstrap for styling and uses a Ruby on Rails backend <br />
                    User can log in or create an account, search for a player by name and view player statstics, when draft is started, <br />
                    2 players are randomly selected and added to computer teams, then the user is able to draft a player and start the process over. <br />
                    TODO: <br />
                    - Sign up functionality<br />
                    - Proper login with auth<br />
                    - Proper team structure<br />
                    - Improve styling<br />
                    - Improve backend functionality such that user data persists<br />
                    - Improve draft structure
                </li>
                <li>
                    HousandArts<br />
                    https://development.d2mm74qlx7gdnj.amplifyapp.com/ <br />
                    Portfolio site built for a friend who designs posters<br />
                    Built on React frontend and Ruby on Rails backend using ActiveStorage to allow user to upload and store images in database<br />
                    Built content management system allowing the owner to upload more images as needed<br />
                    Images are sorted into categories<br />
                    TODO: <br />
                    - Styling improvements<br />
                    - Store functionality<br />
                    - Add content for each image -- description, title, etc<br />
                </li>
                <li>
                    HydrateMediSpa<br />
                    http://hydratemedispa.com/ <br />
                    WordPress site created for client based on specifications<br />
                    Used as a store as well as to advertise a local business<br />
                    TODO:<br />
                    - Finalize store part of website<br />
                    - Add functionality for user to set up an appointment<br />
                    - Fill out content on site with images and descriptions of products and services<br />
                </li>
            </ul> */}
        </div>
    )
}
