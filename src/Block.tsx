import React from "react";

const Side = ({
  size,
  rotateX,
  rotateY,
  translateZ,
}: {
  size: number;
  rotateX: number;
  rotateY: number;
  translateZ: number;
}) => (
  <div
    style={{
      display: "block",
      position: "absolute",
      outline: 0,
      border: "2px solid black",
      marginLeft: -size / 2,
      marginTop: -size / 2,
      width: size,
      height: size,
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`,
    }}
  >
    <div
      style={{
        height: "100%",
        width: "100%",
        border: 0,
        outline: 0,
        backgroundColor: "#f06",
      }}
    >
      hey
    </div>
  </div>
);

const Block = ({
  x,
  y,
  z,
  size = 50,
}: {
  x: number;
  y: number;
  z: number;
  size?: number;
}) => {
  return (
    <div
      style={{
        position: "absolute",
        // left: "50%",
        // top: "50%",
        transformStyle: "preserve-3d",
        transform: `translate3d(${x * size}px, ${y * size}px, ${z * size}px)`,
      }}
    >
      <Side
        key="top"
        size={size}
        rotateX={90}
        rotateY={0}
        translateZ={size / 2}
      />
      <Side
        key="bottom"
        size={size}
        rotateX={90}
        rotateY={0}
        translateZ={-size / 2}
      />
      <Side
        key="left"
        size={size}
        rotateX={0}
        rotateY={90}
        translateZ={size / 2}
      />
      <Side
        key="right"
        size={size}
        rotateX={0}
        rotateY={90}
        translateZ={-size / 2}
      />
      <Side
        key="front"
        size={size}
        rotateX={0}
        rotateY={0}
        translateZ={size / 2}
      />
      <Side
        key="back"
        size={size}
        rotateX={0}
        rotateY={0}
        translateZ={-size / 2}
      />
    </div>
  );
};

export default Block;
