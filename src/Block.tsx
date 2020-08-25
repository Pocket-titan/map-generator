import React, { useRef, useState } from "react";
import { useFrame, ReactThreeFiber as Fiber } from "react-three-fiber";
import { Object3D } from "three";
import { multiply } from "./utils";

const Block = ({
  position,
  size,
  color = "orange",
}: {
  position: [number, number, number];
  size: number;
  color?: string;
}) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const mesh = useRef<Object3D>();

  useFrame(() => {
    if (mesh.current) {
      // mesh.current.rotation.x += 0.01;
      // mesh.current.rotation.y += 0.01;
    }
  });

  position = multiply(position, size);
  const scale = multiply([1, 1, 1], size);

  return (
    <mesh
      position={position}
      ref={mesh}
      scale={scale}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? "#f06" : color}
      />
    </mesh>
  );
};

export default Block;
