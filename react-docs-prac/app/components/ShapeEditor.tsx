"use client";

import { memo, useState } from "react";

const initialShape = [
  { id: 0, type: "circle", x: 50, y: 100 },
  { id: 1, type: "square", x: 150, y: 100 },
  { id: 2, type: "circle", x: 250, y: 100 },
];

const ShapeEditor = () => {
  const [shapes, setShape] = useState(initialShape);

  function handleClick() {
    const nextShapes = shapes?.map((shape) => {
      if (shape.type === "square") {
        return shape;
      } else {
        return {
          ...shape,
          y: shape?.y + 50,
        };
      }
    });

    setShape(nextShapes);
  }

  return (
    <>
      <button onClick={handleClick}>Move circles</button>

      {shapes?.map((shape) => (
        <div
          key={shape?.id}
          style={{
            background: "purple",
            position: "absolute",
            left: shape?.x,
            top: shape?.y,
            borderRadius: shape?.type === "circle" ? "50px" : "",
            width: 20,
            height: 20,
          }}
        ></div>
      ))}
    </>
  );
};

export default memo(ShapeEditor);
