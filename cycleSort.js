/**
 * Cycle Sort
 * Time: O(n²) | Space: O(1)
 * Minimizes memory writes - optimal for write-limited scenarios
 * Best for: Arrays with duplicate values
 */

function cycleSort(arr) {
  const n = arr.length;
  let writes = 0;

  for (let cycleStart = 0; cycleStart < n - 1; cycleStart++) {
    let item = arr[cycleStart];
    let pos = cycleStart;

    // Find position to place item
    for (let i = cycleStart + 1; i < n; i++) {
      if (arr[i] < item) pos++;
    }

    // Skip if item is already in correct position
    if (pos === cycleStart) continue;

    // Skip duplicates
    while (item === arr[pos]) pos++;

    // Place item
    if (pos !== cycleStart) {
      [item, arr[pos]] = [arr[pos], item];
      writes++;
    }

    // Rotate rest of cycle
    while (pos !== cycleStart) {
      pos = cycleStart;
      for (let i = cycleStart + 1; i < n; i++) {
        if (arr[i] < item) pos++;
      }
      while (item === arr[pos]) pos++;
      if (item !== arr[pos]) {
        [item, arr[pos]] = [arr[pos], item];
        writes++;
      }
    }
  }

  return arr;
}

// --- Example ---
const arr = [20, 10, 10, 5, 15, 30, 25];
console.log("Before:", arr);
console.log("After: ", cycleSort(arr));
console.log("Note: Minimizes write operations");
