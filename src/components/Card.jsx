import React from 'react';

function Card(props) {
  return (
    <div className="card--container">
      <section className="Card--list">
        <img src={`./images/${props.data.img}`} alt="" />
        <div className="sketch-desc">
          <small>
            ratings(5/5) ~ <span>location</span>
          </small>
          <h1>{props.data.title}</h1>
          <p>{props.data.description}</p>
          <h2>Price: ${props.data.price}</h2>
          <p>Author: {props.data.author}</p>
        </div>
      </section>
    </div>
  );
}

export default Card;
