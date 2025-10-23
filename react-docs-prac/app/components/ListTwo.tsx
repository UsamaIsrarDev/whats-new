"use client";

import { memo, useState } from "react";

let nextId = 3;

const initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const ListTwo = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState(initialArtists);

  function handleClick() {
    const inserAt = 1;

    const nextArtists = [
      ...artist.slice(0, inserAt),
      { id: nextId++, name: name },
      ...artist.slice(inserAt),
    ];

    setArtist(nextArtists);
  }

  function handleReverce() {
    const newArray = [...artist];

    newArray.reverse();

    setArtist(newArray);
  }

  return (
    <div>
      <h2>Inspiring sculptors</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={handleClick}>Add</button>
      <br />
      <br />
      <button onClick={handleReverce}>Reverse</button>

      <ul>
        {artist?.map((item) => {
          return (
            <li key={item?.id}>
              {item?.name}{" "}
              <button
                onClick={() => {
                  setArtist(artist.filter((b) => b.id !== item?.id));
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

export default memo(ListTwo);
