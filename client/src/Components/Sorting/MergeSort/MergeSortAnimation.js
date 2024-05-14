/* Const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const l = MergeSort(arr.slice(0, mid));
  const r = MergeSort(arr.slice(mid, arr.length));
  return Array.from({ length: l.length + r.length }, () => {
    if (!l.length) return r.shift();
    else if (!r.length) return l.shift();
    else return l[0] > r[0] ? r.shift() : l.shift();
  });
};

export default mergeSort; */

export const getMergeAnimations = (arr) => {
  const animationaArr = [];
  //check if array is greater than 0
  if (arr.length <= 1) return arr;
  //get a copy of the arr
  const auxArr = arr.slice();
  // send to helper func to split into subarrays
  mergeHelper(arr, 0, arr.length - 1, auxArr, animationaArr);
  return animationaArr;
};
// Array [], Starting Index i, Ending Index i, Auxiliary Array [], Array for Animating the array bars [].
const mergeHelper = (arr, startIdx, endIdx, auxArr, animationsArr) => {
  if (startIdx === endIdx) return;
  //Middle Index
  let midIdx = Math.floor((startIdx + endIdx) / 2);
  //split arr into sub arrays
  mergeHelper(auxArr, startIdx, midIdx, arr, animationsArr);
  mergeHelper(auxArr, midIdx + 1, endIdx, arr, animationsArr);
  //actually merge the arrays back
  doMerge(arr, startIdx, midIdx, endIdx, auxArr, animationsArr);
};
//Array [], Starting Index i, Middle Index i, Ending Index i, Auxiliary Array [], Array t keep track of animations [].
const doMerge = (arr, startIdx, midIdx, endIdx, auxArr, animationsArr) => {
  //used to keep track of the left index on the auxArr
  let i = startIdx;
  //used to keep track of the index on the main Arr
  let k = startIdx;
  //used to keep track of right index on the auxArr
  let j = midIdx + 1;

  //while there are values still to the right of the starting index and middle index
  while (i <= midIdx && j <= endIdx) {
    // these are the values we are comparing
    // push them to animations array to flip their color
    animationsArr.push([i, j]);
    //push them again to revert their color
    animationsArr.push([i, j]);
    //check if index i (start) is less than index j (middle)
    if (auxArr[i] <= auxArr[j]) {
      //push the index of k (used to track the index of the orignal arr) and push the value of auxArr at i
      animationsArr.push([k, auxArr[i]]);
      //change the value of the original arr at k to the lesser value, in this case it's at i
      arr[k++] = auxArr[i++];
    } else {
      //value of index j is less than value of index i
      //push the index of arr and the value of auxArr at j
      animationsArr.push([k, auxArr[j]]);
      //change the value of the original arr at k to the lesser value, in this case it's at j
      arr[k++] = auxArr[j++];
    }
  }

  while (j <= endIdx) {
    animationsArr.push([j, j]);
    animationsArr.push([j, j]);

    animationsArr.push([k, auxArr[j]]);
    arr[k++] = auxArr[j++];
  }

  while (i <= midIdx) {
    animationsArr.push([i, i]);
    animationsArr.push([i, i]);

    animationsArr.push([k, auxArr[i]]);
    arr[k++] = auxArr[i++];
  }
};
