import React from "react";
import { perlin } from "./noise";
import Block from "./Block";

let noisy = perlin([15, 15]);

console.log("noisy", noisy);

const Terrain = () => {
  return (
    <>
      {noisy
        .map((row, x) =>
          row.map((value, y) => ({
            x,
            y,
            value: Math.floor(value),
          }))
        )
        .flat()
        .map(({ x, y, value: z }) => (
          <Block key={`${x},${y},${z}`} x={x} y={y} z={z} />
        ))}
    </>
  );
};

export default Terrain;
