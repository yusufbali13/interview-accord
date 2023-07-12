import React, { useState } from "react";
import { arrowdown, arrowup } from "../helper/icons";
import Card from "./Card";

const Question = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);

  console.log(!"saa");

  const handleToggle = () => {
    setShow(!show); //& toglle mantığını not operatörüyle kurmuş olduk
  };

  return (
    <div className="card-group">
      {show ? (
        <Card
          id={id}
          question={question}
          answer={answer}
          icon={arrowup}
          handleToggle={handleToggle}
        />
      ) : (
        <Card
          id={id}
          question={question}
          icon={arrowdown}
          handleToggle={handleToggle}
        />
      )}
    </div>
  );
};

export default Question;
