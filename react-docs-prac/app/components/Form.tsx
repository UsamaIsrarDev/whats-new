"use client";

import { memo, useState } from "react";

const Form = () => {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState("Hi!");

  if (isSent) {
    return <h1>Hi, Your message its on the way.</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
      }}
    >
      <textarea
        placeholder="Write message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default memo(Form);
