"use client";

import { memo, useState } from "react";

let nextId = 3;

let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const Practice = () => {
  const [store, setStore] = useState(initialArtists);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h2>Practice</h2>
      <input type="text" value={inputValue} onChange={handleInput} />
      <button
        onClick={() => {
          setStore([...store, { id: nextId++, name: inputValue }]);
        }}
      >
        Add
      </button>

      <ul>
        {store.map((item) => {
          return (
            <li key={item.id}>
              {item.name}{" "}
              <button
                onClick={() => {
                  setStore(store.filter((value) => value.id !== item.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default memo(Practice);
