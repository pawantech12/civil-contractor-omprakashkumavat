import React from "react";
import CountUp from "react-countup";
export const CounterUp = ({ end, label }) => {
  return (
    <div className="flex flex-col gap-2 items-center bg-gray-100 p-6 rounded-lg max-sm:w-full">
      <h4 className="text-4xl font-bold text-neutral-700">
        <CountUp end={end} duration={3} />+
      </h4>
      <p className=" text-gray-600 text-lg">{label}</p>
    </div>
  );
};
