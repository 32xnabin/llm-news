// Selection Sort implementation in JavaScript

/**
 * @param {Array} arr - An array of numbers to be sorted.
 * @return {Array} - The sorted array.
 */
function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }

  return arr;
}

// Example usage
const exampleArray = [64, 25, 12, 22, 11];
console.log("Original Array:", exampleArray);
const sortedArray = selectionSort(exampleArray);
console.log("Sorted Array:", sortedArray);
