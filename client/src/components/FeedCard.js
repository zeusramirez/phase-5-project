import React from "react";
import './FeedCard.scss'

export default function FeedCard() {
   let background = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTmT7bHGveAK6eI3pdQxRXgZqbOOuvaUufQQ&usqp=CAU"
  return (
    <div>
      <div id="spinner"></div>
      <div className="content">
        <h1 className="heading">CAR TITLE-</h1>
        <p className="description">Hover over a Movie to flip it.</p>

        <a className="card" href="#!">
          <div className="front" style={{backgroundImage:`url(${background})`}}>
            <p>Lorem ipsum dolor sit amet consectetur adipisi.</p>
          </div>
          <div className="back">
            <div className="release_date">1985</div>
            <div>
              <p>Consectetur adipisicing elit. Possimus, praesentium?</p>
              <p>Provident consectetur natus voluptatem quis tenetur sed beatae eius sint.</p>
              <button className="button">Click Here</button>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
