"use client";

import { memo, useState } from "react";

const initialCounters = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounter] = useState(initialCounters);

  function handleClick(index) {
    const nextCounter = counters?.map((c, i) => {
      if (i === index) {
        return c + 1;
      } else return c;
    });

    setCounter(nextCounter);
  }

  return (
    <>
      <h2>CounterList</h2>

      {counters?.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => handleClick(index)}>+</button>
        </div>
      ))}
    </>
  );
};

export default memo(CounterList);
