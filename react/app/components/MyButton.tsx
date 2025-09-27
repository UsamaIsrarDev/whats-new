"use client";

const MyButton = ({ onClick, count }: any) => {
  return <button onClick={onClick}>Clicked {count} times!</button>;
};

export default MyButton;
