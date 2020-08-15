import React, { useState } from "react";
import Block from "./Block";

type DragState = {
  start: {
    x: number;
    y: number;
  };
};

const Scene = () => {
  const [dragging_state, set_dragging_state] = useState<DragState | null>(null);
  const [rotation, setRotation] = useState({
    x: 0,
    y: 0,
  });

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        perspective: 1000,
        perspectiveOrigin: "50% 50%",
        backgroundColor: "hsl(0, 0%, 20%)",
        cursor: "grab",
        pointerEvents: "all",
      }}
      onMouseDown={(event) => {
        set_dragging_state({
          start: {
            x: event.pageX,
            y: event.pageY,
          },
        });
      }}
      onMouseMove={(event) => {
        if (dragging_state !== null) {
          let direction = {
            x: event.movementX,
            y: event.movementY,
          };
          let { x, y } = {
            x: event.pageX - dragging_state.start.x,
            y: event.pageY - dragging_state.start.y,
          };
          setRotation((old_rotation) => ({
            x: (old_rotation.x + direction.x * 0.3) % 360,
            y: (old_rotation.y + direction.y * 0.3) % 360,
          }));
          console.log("rotation", rotation);
        }
      }}
      onMouseUp={(event) => {
        set_dragging_state(null);
      }}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          transform: `rotateX(${rotation.y}deg) rotateY(${rotation.x}deg)`,
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <Block x={-2} y={0} z={0} />
        <Block x={-1} y={0} z={0} />
        <Block x={-1} y={0} z={1} />
        <Block x={0} y={0} z={0} />
        <Block x={1} y={0} z={0} />
        <Block x={2} y={0} z={0} />
        <Block x={2} y={1} z={0} />
      </div>
    </div>
  );
};

export default Scene;
