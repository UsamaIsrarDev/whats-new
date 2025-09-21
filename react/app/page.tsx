"use client";

import React, { useState } from "react";
// import Profile from "./components/Profile";
// import AdminPanal from "./components/AdminPanal";
// import LoginForm from "./components/LoginForm";
// import ShoppingList from "./components/ShoppingList";

function MyButton({ count, handleClick }: any) {
  return <button onClick={handleClick}>Clicked {count} times</button>;
}

let isLoggedIn;

const MyApp = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Counter that updates together.</h2>

      <MyButton count={count} handleClick={handleClick} />
      <MyButton count={count} handleClick={handleClick} />

      {/* <br />

      <Profile />

      <br /> */}

      {/* {isLoggedIn && <AdminPanal />} */}

      {/* <ShoppingList /> */}
    </div>
  );
};

export default MyApp;
