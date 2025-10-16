"use client";

import { memo, useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>{number}</h2>
      <button
        onClick={() => {
          //   setNumber(number + 1);
          //   setNumber(number + 1);
          //   setNumber(number + 1);

          //   setNumber(number + 3);
          //   setNumber(number + 1);
          //   setNumber(number + 1);

          //   setNumber((n) => n + 1);
          //   setNumber((n) => n + 1);
          //   setNumber((n) => n + 1);

          //   setNumber(number + 5);
          //   setNumber((n) => n + 1);

          setNumber(number + 5);
          setNumber((n) => n + 1);
          setNumber(42);

          //   setTimeout(() => {
          //     alert(number);
          //   }, 3000);
        }}
      >
        +3
      </button>
    </div>
  );
};

export default memo(Counter);
