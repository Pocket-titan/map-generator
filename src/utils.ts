export const multiply = (
  [x, y, z]: [number, number, number],
  scale: number
): [number, number, number] => {
  return [x * scale, y * scale, z * scale];
};
