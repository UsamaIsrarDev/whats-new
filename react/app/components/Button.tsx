"use client";

import React, { useState } from "react";

const Button = () => {
  const [click, setClick] = useState(0);

  function handleClick() {
    setClick(click + 1);
  }

  return <button onClick={handleClick}>You click {click} times</button>;
};

export default Button;
