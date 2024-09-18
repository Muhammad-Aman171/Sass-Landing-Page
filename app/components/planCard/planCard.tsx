import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import Button from "../button/button";

import "./planCard.scss";

interface PlanCardTypes {
  style?: string;
  heading?:string;
  rupess?:string;
  para?:string;
}

const PlanCard: React.FC<PlanCardTypes> = ({ style,heading,rupess,para }) => {
  return (
    <div className={`${style}  plan-card`}>
      <h3>{heading}</h3>
      <h1>{rupess}</h1>
      <p>{para}</p>
      <span>
        <FiCheckCircle className="check"/>
        <p>Sync unlimited devices</p>
      </span>
      <span>
        <FiCheckCircle className="check"/>
        <p>10 GB monthly uploads</p>
      </span>
      <span>
        <FiCheckCircle className="check"/>
        <p>200 MB max. note size</p>
      </span>
      <span>
        <FiCheckCircle className="check"/>
        <p>Customize Home dashboard and access extra widgets</p>
      </span>
      <span>
        <FiCheckCircle className="check"/>
        <p>Connect primary Google Calendar account</p>
      </span>
      <span>
        <FiCheckCircle className="check"/>
        <p>Add due dates, reminders, and notifications to your tasks</p>
      </span>

      <Button heading="Get Started" style="plan-button" />
    </div>
  );
};

export default PlanCard;
