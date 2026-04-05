// Function to implement Bubble Sort algorithm
function bubbleSort(arr) {
  let n = arr.length;
  // Loop through all elements in array
  for (let i = 0; i < n - 1; i++) {
    // Track if any swapping occurs
    let swapped = false;
    // Last i elements are already sorted, no need to check them
    for (let j = 0; j < n - i - 1; j++) {
      // Compare adjacent elements and swap if they are in the wrong order
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    // If no two elements were swapped by inner loop, then break
    if (!swapped) {
      break;
    }
  }
  return arr;
}

// Example usage of the bubbleSort function
let array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
array = bubbleSort(array);
console.log("Sorted array:", array);
