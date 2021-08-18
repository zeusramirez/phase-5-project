import React from "react";
import "./FeedCard.scss";

export default function FeedCard(props) {
  console.log(props)
  const {year, mileage, make, model, category, bio, name} = props
  return (
 
      <div className="card">
        <div className="content">
          <h2 className="title">{name}</h2>
          <p className="copy">
            {bio}
          </p>
          <button className="btn">View More</button>
        </div>
      </div>
  );
}
