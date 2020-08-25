import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, OrthographicCamera } from "drei";
import _ from "lodash";
import Block from "./Block";

const SIZE = 1;

let generate_color = (value: number) =>
  _.clamp(value * 5 + _.random(0, 5), 0, 255);

let generate_grid = ({
  width,
  height = width,
}: {
  width: number;
  height?: number;
}) =>
  [...Array(width).keys()]
    .map((x) =>
      [...Array(height).keys()].map((y) => {
        return {
          x,
          y,
          z: _.random(0, 4),
        };
      })
    )
    .flat();

const Scene = () => {
  const camera = useRef<any>();

  let grid = generate_grid({ width: 10 });

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {grid.map(({ x, y, z }) => (
        <Block
          position={[x, y, z]}
          size={SIZE}
          color={`hsl(0, 0%, ${_.clamp(z * 7 + 20, 0, 100)}%)`}
        />
      ))}
      <OrthographicCamera makeDefault position={[10, 5, 10]} zoom={50}>
        {null}
      </OrthographicCamera>
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
