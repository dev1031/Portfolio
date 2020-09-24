import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router , Link } from "react-router-dom";
import Header from './components/header';
import Wave from './components/Wave';
import Card from './components/Card';
import Section from './components/Section';
import Tags from './components/Tags';

function App() {
  return (
        <Router>
          <div>
            <Header/>
            <div className="Hero">
              <div className="HeroGroup">
                <h1>Hello, I'm Dherendra Dev.<span><Typewriter options={{ strings: ['Frontend ', 'Backend', 'Fullstack'],autoStart: true, loop: true, delay :100}} /></span> web developer.</h1>
                <p>Hello folks this is simple peragraph for testing purpose</p>
                <Link to = "/" >Go to the course</Link>
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
            title = "My Personal Projects"
            />
            <div className ="Cards">
                <div className="CardGroup">
                  <Card title ="Social Media App" text ="Advance" image ={require('./images/wallpaper4.jpg')}/>
                  <Card title ="Github Client" text ="Advance" image ={require('./images/wallpaper.jpg')}/>
                  <Card title ="Airbnb" text ="Advance" image ={require('./images/wallpaper2.jpg')}/>
                  <Card title ="Instagram" text ="Advance" image ={require('./images/wallpaper3.jpg')}/>
                  <Card title ="The Movie App" text ="Advance" image ={require('./images/wallpaper1.jpg')}/>
                  <Card title ="Chat Application" text ="Advance" image ={require('./images/wallpaper5.jpg')}/>
                  <Card title ="Exercise Tracker" text ="Advance" image ={require('./images/wallpaper2.jpg')}/>
                  <Card title ="Travel log App" text ="Advance" image ={require('./images/wallpaper4.jpg')}/>
                  <Card title ="Yelp" text ="Advance" image ={require('./images/wallpaper.jpg')}/>
                </div>
            </div>
            <Section 
            image = {require('./images/wallpaper5.jpg')} 
            title = "Other Skills"
            />
            <div className ="Cards">
                <div className="CardGroup">
                  <Card title ="Hacker Rank" text ="Advance" image ={require('./images/hackerrank.jpg')}/>
                  <Card title ="Codewars" text ="Advance" image ={require('./images/codewars.jpg')}/>
                  </div>
            </div>     
          </div>      
        </Router>
  );
}

export default App;
