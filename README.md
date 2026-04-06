# JavaScript Algorithms & Utilities

A collection of classic sorting and searching algorithms implemented in JavaScript.

## 📁 Sorting Algorithms

### **Bubble Sort** (`bubbleSort.js`)
Repeatedly swaps adjacent elements if they're in wrong order. Simple but inefficient for large datasets.

### **Selection Sort** (`selectionSort.js`)
Finds the minimum element and places it at the beginning. Repeats for remaining unsorted portion.

### **Insertion Sort** (`insertionSort.js`)
Builds the sorted array one element at a time by inserting each element into its correct position.

### **Quick Sort** (`quickSort.js`)
Divide-and-conquer algorithm that picks a pivot and partitions elements around it. Average case O(n log n).

### **Merge Sort** (`mergeSort.js`)
Divide-and-conquer algorithm that splits the array in half, sorts each half, then merges them. Guaranteed O(n log n).

### **Heap Sort** (`heapSort.js`)
Uses a binary heap data structure to sort. In-place with O(n log n) time complexity.

### **Shell Sort** (`shellSort.js`)
Generalization of insertion sort that allows swapping of far-apart elements using a gap sequence.

### **Counting Sort** (`countingSort.js`)
Non-comparison sort that counts occurrences of each value. Efficient for small integer ranges.

### **Radix Sort** (`radixSort.js`)
Sorts numbers digit by digit from least to most significant. Works with integers of fixed length.

### **Bucket Sort** (`bucketSort.js`)
Distributes elements into buckets, sorts each bucket, then concatenates. Best for uniformly distributed data.

### **Cocktail Sort** (`cocktailSort.js`)
Bidirectional version of bubble sort that traverses the array in both directions.

### **Comb Sort** (`combSort.js`)
Improvement over bubble sort that uses a shrinking gap to eliminate turtles (small values at the end).

### **Tim Sort** (`timSort.js`)
Hybrid of merge sort and insertion sort. Used as the default sort in Python and Java for objects.

### **Cycle Sort** (`cycleSort.js`)
Minimizes the number of memory writes. Optimal for scenarios where write operations are expensive.

---

## 🔍 Searching Algorithms

### **Linear Search** (`linearSearch.js`)
Checks each element sequentially until the target is found. Works on any array.

### **Binary Search** (`binarySearch.js`)
Divides the sorted array in half repeatedly to find the target. O(log n) time complexity.

### **Interpolation Search** (`interpolationSearch.js`)
Improved binary search that estimates the position of the target based on values. Works best on uniformly distributed sorted arrays.

### **Fibonacci Search** (`fibonacciSearch.js`)
Uses Fibonacci numbers to divide the array. Alternative to binary search with division-free operations.

### **Exponential Search** (`exponentialSearch.js`)
Finds a range using exponential steps, then performs binary search. Useful for unbounded arrays.

### **Jump Search** (`jumpSearch.js`)
Jumps ahead by fixed steps (√n) then performs linear search in the identified block.

### **Ternary Search** (`ternarySearch.js`)
Divides the sorted array into three parts instead of two. Finds the target using two midpoints.

---

## 🛠️ Utilities

### **String Utilities** (`stringUtils.js`)
Helper functions: `capitalize()`, `reverse()`, `wordCount()`

### **Login Component** (`Login.jsx`)
React login form with email and password validation.

---

## 🚀 Usage

Run any file with Node.js:

```bash
node bubbleSort.js
node binarySearch.js
node stringUtils.js
```

## 📄 License

Open-source for learning and experimentation.
