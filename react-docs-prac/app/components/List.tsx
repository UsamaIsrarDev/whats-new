"use client";

import { memo, useState } from "react";

let nextId = 0;

const List = () => {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState([]);

  return (
    <div>
      <h2>Inspiring sculptors</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={() => {
          setArtist([{ id: nextId++, name: name }, ...artist]);
        }}
      >
        Add
      </button>

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

export default memo(List);
