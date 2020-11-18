import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router , Link  } from "react-router-dom";
import Header from './components/header';
import Wave from './components/Wave';
import Card from './components/Card';
import Section from './components/Section';
import Tags from './components/Tags';
import Footer from './components/Footer';

function App() {
  return (
        <Router>
          <div>
            <Header/>
            <div className="Hero">
              <div className="HeroGroup">
                <h1>Hello, I'm Dherendra Dev.<span><Typewriter options={{ strings: ['Frontend ', 'Backend', 'Fullstack'],autoStart: true, loop: true, delay :100}} /></span> web developer.</h1>
                <p>I am self taught full stack web developer. I have serious passion for creating new full stack web applications.</p>
                <Link to = "/" >Check my portfolio</Link>
                <Wave />
              </div>
            </div>
            <div className ="Cards">
              <h2>Skills</h2>
                <h3>Frontend</h3>
                <div className="TagsGroup">
                  <Tags image = {require('./images/html.png')} title = {"HTML"}/>
                  <Tags image = {require('./images/css.png')} title = {"CSS"}/>
                  <Tags image = {require('./images/js.png')} title = {"JS"}/>
                  <Tags image = {require('./images/react.png')} title = {"REACT"}/>
                  <Tags image = {require('./images/apollo.jpeg')} title = {"Apollo"}/>
                </div> 
                <h3>Frontend Library</h3> 
                <div className="TagsGroup">
                    <Tags image = {require('./images/bootstrap.png')} title = {"Bootstrap"}/>
                    <Tags image = {require('./images/mui.png')} title = {"MaterialUI"}/>
                    <Tags image = {require('./images/material.png')} title = {"Materialize"}/>
                  </div>  
                  <h3>Backend</h3> 
                  <div className="TagsGroup">
                  <Tags image = {require('./images/node.png')} title = {"NODE"}/>
                  <Tags image = {require('./images/express.jpeg')} title = {"EXPRESS"}/>
                  <Tags image = {require('./images/es6.jpeg')} title = {"ES 6"}/>
                  </div>
                  <h3>Database</h3>
                  <div className="TagsGroup">
                    <Tags image = {require('./images/mongo.png')} title = {"MONGO"}/>
                    <Tags image = {require('./images/postgres.png')} title = {"PG SQL"}/>
                    <Tags image = {require('./images/firestore.png')} title = {"FireStore"}/>
                  </div>
                  <h3>ORM</h3>
                  <div className="TagsGroup">
                    <Tags image = {require('./images/mongoose.jpg')} title = {"Mongoose"}/>
                    <Tags image = {require('./images/node-pg.png')} title = {"Node pg"}/>
                  </div>
                  <h3>API</h3>
                  <div className="TagsGroup">
                  <Tags image = {require('./images/rest-api.png')} title = {"Rest API"}/>
                  <Tags image = {require('./images/graphql.png')} title = {"Graphql"}/>
                  </div>
                  <h3>Deployment</h3>
                  <div className="TagsGroup">
                  <Tags image = {require('./images/heroku.png')} title = {"HEROKU"}/>
                  <Tags image = {require('./images/firebase.png')} title = {"FIREBASE"}/>
                  <Tags image = {require('./images/netlify.png')} title = {"NETLIFY"}/>
                  </div>
                  <h3>ProtoTyping</h3>
                  <div className="TagsGroup">
                  <Tags image = {require('./images/adobe.png')} title = {"Adobe xd"}/>
                  <Tags image = {require('./images/logo-figma.png')} title = {"Figma"}/>
                  </div>
                  <h3>Testing</h3>
                  <div className="TagsGroup">
                  <Tags image = {require('./images/mocha.png')} title = {"Mocha"}/>
                  </div>
                  <h3>Version Control</h3>
                  <div className="TagsGroup">
                  <Tags image = {require('./images/git.png')} title = {"Git"}/>
               </div>
            </div>
            <Section 
            image = {require('./images/wallpaper1.jpg')} 
            title = "Personal Projects"
            />
            <div className ="Cards">
                <div className="CardGroup">
                  <Card title ="Social Media App" githubLink ="https://github.com/dev1031/mern-social-application-" appLink ="https://unruffled-bell-7e7c9b.netlify.app/" image ={require('./images/wallpaper4.jpg')}/>
                  <Card title ="Github Client" githubLink ="https://github.com/dev1031/Graphql-Github-Client" appLink ="https://github-client-a09d6.web.app/"   image ={require('./images/wallpaper.jpg')}/>
                  <Card title ="Airbnb" githubLink ="https://github.com/dev1031/Airbnb-Clone-React-MUI" appLink ="https://airbnb-clone-7af9c.web.app/" image ={require('./images/wallpaper2.jpg')}/>
                  <Card title ="Instagram" githubLink ="https://github.com/dev1031/Instagram-clone--React" appLink ="https://instagram-clone-15227.web.app/" image ={require('./images/wallpaper3.jpg')}/>
                  <Card title ="The Movie App"githubLink ="https://github.com/dev1031/The-Movie-DataBase" appLink ="https://movie-db-tmdb.herokuapp.com/"  image ={require('./images/wallpaper1.jpg')}/>
                  <Card title ="Chat Application" githubLink ="https://github.com/dev1031/chat-app-client-code" appLink ="https://5f7164570727d037de68263f--unruffled-bell-7e7c9b.netlify.app/" image ={require('./images/wallpaper5.jpg')}/>
                  <Card title ="Expense Tracker" githubLink ="https://github.com/dev1031/EXPENSE-TRACKER" appLink ="https://mern-money-tracker-app.herokuapp.com/" image ={require('./images/wallpaper2.jpg')}/>
                  <Card title ="Travel log App" githubLink ="https://github.com/dev1031/Travel-Log-App" appLink ="https://travel-app-with-mapbox.herokuapp.com/" image ={require('./images/wallpaper4.jpg')}/>
                  <Card title ="Yelp" githubLink ="https://github.com/dev1031/yelp-pern-clone" appLink ="https://postgres-yelp-clone.herokuapp.com/"  image ={require('./images/wallpaper.jpg')}/>
                </div>
            </div>
            <Section 
            image = {require('./images/wallpaper5.jpg')} 
            title = "Other Skills"
            />
            <div className ="Cards">
            <h2>Programming Languages</h2>
                <div className="CardGroup">
                  <Card title ="Java Script" text ="Advance" image ={require('./images/javas.png')}/>
                  <Card title ="Python" text ="Intermediate" image ={require('./images/python.png')}/>
                  <Card title ="C++" text ="Intermediate" image ={require('./images/c++.png')}/>
                  <Card title ="C#" text ="Beginner" image ={require('./images/cSharp.png')}/>
                  </div>
            </div>
            <div className ="Cards">
            <h2>Competetive Programming</h2>
                <div className="CardGroup">
                  <Card title ="Hacker Rank" text ="Profile" githubLink = "https://www.hackerrank.com/dherendradev106" image ={require('./images/hackerrank.png')}/>
                  <Card title ="Codewars" text ="Profile" githubLink ="https://www.codewars.com/users/dev1031" image ={require('./images/codewars.png')}/>
                </div>
            </div>  
            <Footer></Footer>    
          </div>      
        </Router>
  );
}

export default App;

