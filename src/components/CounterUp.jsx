import React from "react";
import CountUp from "react-countup";

export const CounterUp = ({ end, label }) => {
  return (
    <div className="counter-up-container">
      <h4 className="counter-up-heading">
        <CountUp end={end} duration={3} />+
      </h4>
      <p className="counter-up-label">{label}</p>
    </div>
  );
};
