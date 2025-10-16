"use client";

import { memo, useState } from "react";

const Message = () => {
  const [to, setTo] = useState("Alice");
  const [message, setMessage] = useState("hello!");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setTimeout(() => {
      alert(`You said ${message} to ${to}`);
    }, 3000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        To{" "}
        <select
          value={to}
          onChange={(e) => {
            setTo(e.target.value);
          }}
        >
          <option value="Alice">Alice</option>
          <option value="Bob">Bob</option>
        </select>
      </label>

      <textarea
        value={message}
        placeholder="Message"
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      />

      <button type="submit">Send</button>
    </form>
  );
};

export default memo(Message);
