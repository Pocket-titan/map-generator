import { Noise } from "noisejs";

let seed = 420;
let noise = new Noise(seed);

type Shape = [number, number];

export const perlin = ([width, height]: Shape) => {
  let [min, max] = [0, 10];

  return [...Array(width).keys()].map((x) =>
    [...Array(height).keys()].map((y) => {
      let value = noise.perlin2(x / 100, y / 100);
      return Math.abs(value) * 256;
    })
  );
};
