"use client";

import { memo, useState } from "react";
import Profile from "./components/Profile";
import AdminPanal from "./components/AdminPanal";
import LoginForm from "./components/LoginForm";
import ShoppingList from "./components/ShoppingList";
import MyButton from "./components/MyButton";

// function MyButton() {
//   return <button>I'm a button</button>;
// }

let content;
const isLoggedIn = false;

if (isLoggedIn) {
  content = <AdminPanal />;
} else {
  content = <LoginForm />;
}

const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => {
  return <li key={product.id}>{product.title}</li>;
});

const MyApp = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Welcome to my app!</h2>
      {/* <MyButton /> */}

      <Profile />

      {content}

      <div>{isLoggedIn ? <AdminPanal /> : <LoginForm />}</div>

      <div>{isLoggedIn && <AdminPanal />}</div>

      <ul>{listItems}</ul>

      <ShoppingList />

      <MyButton />

      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
      <MyButton onClick={handleClick} count={count} />
    </div>
  );
};

export default memo(MyApp);
