import React from 'react';
import './Tags.css'

function Tags(props) {
    return (
        <div className="Tag">
        <div className ="Tags">
            <img src={props.image} alt ="wallpaper" />
        </div>
        <h3>{props.title}</h3>
        </div>
    )
}

export default Tags
