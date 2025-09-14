"use client";

import React from "react";
import Profile from "./components/Profile";
import Button from "./components/Button";

function MyButton() {
  return <button>I'm a button</button>;
}

const MyApp = () => {
  return (
    <div>
      <h2>Welcome to my App</h2>

      <MyButton />

      <br />

      <Button />

      <br />

      <Button />

      <Profile />
    </div>
  );
};

export default MyApp;
