import { getMergeAnimations } from "./MergeSortAnimation";

const ANIMATION_SPEED = 15;
const COMPARE_COLOR = "#A400F7";
const PRIMARY_COLOR = "cadetblue";
const DONE_COLOR = "green";

export const mergeSort = (arr) => {
  const animations = getMergeAnimations(arr);
  for (let i = 0; i < animations.length; i++) {
    const arrBars = document.getElementsByClassName("array-bar");
    const isColorChange = i % 3 != 2;
    if (isColorChange) {
      const [startIdx, secondIdx] = animations[i];
      const startBarStyle = arrBars[startIdx].style;
      const secondBarStyle = arrBars[secondIdx].style;
      const color = i % 3 === 0 ? COMPARE_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        startBarStyle.backgroundColor = color;
        secondBarStyle.backgroundColor = color;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [starIdx, newHeight] = animations[i];
        const startBarStyle = arrBars[starIdx].style;
        startBarStyle.backgroundColor = COMPARE_COLOR;
        startBarStyle.height = `${newHeight}%`;
        startBarStyle.backgroundColor = PRIMARY_COLOR;
      }, i * ANIMATION_SPEED);
    }
  }
};
