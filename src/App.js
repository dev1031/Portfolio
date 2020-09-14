import React from 'react';
import './App.css';
import Typewriter from 'typewriter-effect';
import { BrowserRouter as Router , Link } from "react-router-dom";
import Header from './components/header';
import Wave from './components/Wave';
import Card from './components/Card';
import Section from './components/Section';

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
                <div className="CardGroup">
                  <Card title ="React" text ="Advance" image ={require('./images/wallpaper4.jpg')}/>
                  <Card title ="Java Script" text ="Advance" image ={require('./images/wallpaper.jpg')}/>
                  <Card title ="Mongo Db" text ="Advance" image ={require('./images/wallpaper2.jpg')}/>
                  <Card title ="Node" text ="Advance" image ={require('./images/wallpaper3.jpg')}/>
                  <Card title ="CSS" text ="Advance" image ={require('./images/wallpaper1.jpg')}/>
                  <Card title ="HTML" text ="Advance" image ={require('./images/wallpaper5.jpg')}/>
                  <Card title ="PGSQL" text ="Advance" image ={require('./images/wallpaper2.jpg')}/>
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
          </div>      
        </Router>
  );
}

export default App;
