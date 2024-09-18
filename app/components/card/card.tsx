import React from "react";
import Button from "../button/button";

import './card.scss'

interface CardTypes{
  style?:string;
  heading?:string;
  paragraph?:string;
  buttonheading?:string;
}

const Card: React.FC<CardTypes> = ({style,heading,paragraph,buttonheading}) => {
  return (
    <div className={`${style} card`}>
      <h1>{heading}</h1>
      <p>
        {paragraph}
      </p>
      <Button heading={buttonheading}/>
    </div>
  );
};

export default Card;
