import React from "react";
import "./Card.css";

// const Card = (props) => {
const Card = ({ title }) => {
  return (
    <div className="card-item">
      <div className="image image1"></div>
      <div className="content">
        {/* <h1>{props.title}</h1> */}
        <h1>{title}</h1>
        <p>
          I have already withdrawn the remaining balance from the account and
          there are no pending transactions.
        </p>
        <a
          href="https://github.com/KhizarAhmad313"
          target="_blank"
          className="button"
        >
          read more
        </a>
      </div>
    </div>
  );
};

export default Card;
