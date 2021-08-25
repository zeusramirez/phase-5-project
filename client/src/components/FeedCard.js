import React from "react";
import { Link } from "react-router-dom";
import "./FeedCard.scss";
import backgroundImg from '../feedCardBG.png'

export default function FeedCard(props) {
 // const {id, bio, name} = props
 let background = backgroundImg
 if (props.images.length > 0){  
    background = props.images[0].url
 }
 //console.log(background)
  return (
 
      <div className="feed-card" 
       style={{backgroundImage: `url(${background})`}}
      >
        <div className="content">
          <h2 className="title">{props.name}</h2>
          <p className="copy">
            {props.bio}
          </p>
          <Link to={`/vehicle/${props.id}`}><button className="feed-btn">View More</button></Link>
        </div>
      </div>
  );
}
