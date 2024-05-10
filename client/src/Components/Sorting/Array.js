import randomInt from "./RandomInt";

export const resetArray = () => {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(randomInt(10, 1000));
  }
  return array;
};
