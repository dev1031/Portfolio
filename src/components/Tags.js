import React from 'react';
import './Tags.css'

function Tags(props) {
    return (
        <div className="Tag">
        <div className ="Tags">
            <img src={props.image} alt ="wallpaper" />
        </div>
        <h4>{props.title}</h4>
        </div>
    )
}

export default Tags
