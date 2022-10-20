export const addOpacityOnHexColor = (color: string, opacity: number) => {
  return color + Math.round(255 * opacity).toString(16);
};
