"use client";

import { memo, useState } from "react";

const Formmm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  function handleFirstName(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + " " + lastName);
  }

  function handleLastName(e) {
    setLastName(e.target.value);
    setFullName(firstName + " " + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label htmlFor="">
        First Name: <input type="text" onChange={handleFirstName} />
      </label>

      <br />
      <br />

      <label htmlFor="">
        Last Name: <input type="text" onChange={handleLastName} />
      </label>

      <p>Your ticket will be issue to : {fullName}</p>
    </>
  );
};

export default memo(Formmm);
