"use client";

import { memo, useState } from "react";

const Formm = () => {
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  function handleChange(e) {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <form>
      <label>
        First Name
        <input
          type="text"
          name="firstName"
          value={person?.firstName}
          onChange={handleChange}
        />
      </label>

      <label>
        Last Name
        <input
          type="text"
          name="lastName"
          value={person?.lastName}
          onChange={handleChange}
        />
      </label>

      <label>
        Email
        <input
          type="text"
          name="email"
          value={person?.email}
          onChange={handleChange}
        />
      </label>

      <p>{person?.firstName + " " + person?.lastName + " " + person?.email}</p>
    </form>
  );
};

export default memo(Formm);
