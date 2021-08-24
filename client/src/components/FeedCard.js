import React from "react";
import { Link } from "react-router-dom";
import "./FeedCard.scss";

export default function FeedCard(props) {
  const {id, bio, name} = props
  // console.log(props)
  return (
 
      <div className="feed-card">
        <div className="content">
          <h2 className="title">{name}</h2>
          <p className="copy">
            {bio}
          </p>
          <button className="feed-btn"><Link to={`/vehicle/${id}`}>View More</Link></button>
        </div>
      </div>
  );
}
