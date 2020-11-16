import React from 'react';
import './Card.css'

function Card(props) {
    let button = props.githubLink && props.appLink !==null ?(
       <span><a href = { props.githubLink} target="_blank" rel="noopener noreferrer">{props.text?props.text:"Code"}</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href = {props.appLink } target="_blank" rel="noopener noreferrer">{props.appLink?"Demo":undefined}</a></span>
    ) : <p>{props.text}</p>
    return (
         <div className="Card">
        <img src={props.image} alt ="wallpaper" />
        <h3>{props.title}</h3>
        <p>{button}</p>
    </div>
    )
}

export default Card
