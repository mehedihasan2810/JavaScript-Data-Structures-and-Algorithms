# Data Structures and Algorithms with JavaScript

# Table of Contents

- ## [Big-O Notation](#big-o-notation)
  - [Big-O for Object](#big-o-for-object)
  - [Big-O for Array](#big-o-for-array)
- ## [Algorithms](#algorithms)
  - ### [Math Algorithms](#math-algorithms)
    - [Calculate **_a specific length of fibonacci sequence_**](#calculate-a-specific-length-of-fibonacci-sequence)
    - [Find the **_nth fibonacci sequence_**](#find-the-nth-fibonacci-sequence)
    - [Calculate **_factorial_** of a number](#calculate-factorial-of-a-number)
    - [Check **_if a number is prime or not_**](#check-if-a-number-is-prime-or-not)
    - [Check **_if a number is power of two_**](#check-if-a-number-is-power-of-two)
  - ### [Search Algorithms](#search-algorithms)
    - [Linear Search](#linear-search)
    - [Binary Search](#binary-search)
  - ### [Sorting Algorithms](#sorting-algorithms)
    - [Bubble Sort](#bubble-sort)
    - [Insertion Sort](#insertion-sort)
    - [Quick Sort](#quick-sort)
    - [Merge Sort](#merge-sort)

## Big O Notation

![Big O notation graph](/assets/bigo-graph.png)
Source: [Big O Cheat Sheet](https://www.bigocheatsheet.com/)

To get a good grasp on Big O notation checkout this
[Web Dev Simplified video on Big O notation](https://youtu.be/itn09C2ZB9Y?si=KtfxAVqNPNTPutWw)

### Big O for Object

```js
const person = {
  firstName: "Mehedi",
  age: 24,
};

// If we insert, remove or access a property the time complexity is constant O(1)

// example
person.lastName = "Hasan"; // Insert - constant O(1)
delete person.age; // Remove - constant O(1)
console.log(person.firstName); // Access - constant O(1)

// And object methods like keys, values, entries are linear O(n)
Object.keys(person); // linear O(n)
Object.values(person); // linear O(n)
Object.entries(person); // linear O(n)

// Search - linear O(n)
```

### Big O for Array

```js
const odd = [1, 3, 5, 7];

// Insert / remove at end - constant O(1)
odd.push(9); // Insert at end - constant O(1)
odd.pop(); // Remove at end - constant O(1)

// Insert / remove at beginning - linear O(n)
shift / unshift / concat / slice / splice; // linear O(n)

console.log(odd[0]); // Access - constant O(1)

// Search - linear O(n)

forEach / map / filter / reduce; // linear O(n);
```

# Algorithms

## Math Algorithms

### Calculate **_a specific length of fibonacci sequence_**

```js
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    // sum previous two item and insert it to the next
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
}

console.log(fibonacci(7)); // [0, 1, 1, 2, 3, 5, 8]
```

---

### Find the **_nth fibonacci sequence_**

```js
// Iterative solution - Big O(n)
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[fib.length - 1] + fib[fib.length - 2];
}

console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(4)); // 3

// ------------------------------

// Recursive solution - Big O(2^n)
function recursiveFibonacci(n) {
  if (n < 2) return n;

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(3)); // 2
console.log(recursiveFibonacci(4)); // 3
```

### Calculate **_factorial_** of a number

```js
// With Recursion
function factorial(n) {
  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120

// ------------------------------

// With Loop
function factorial(n) {
  let fac = 1;

  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }

  return fac;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(4)); // 24
console.log(factorial(5)); // 120
```

### Check **_if a number is prime or not_**

```js
// With Loop - Big-O - linear O(n)
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true

// -------------------------------------

// More Optimized - Big-O - O(sqrt(n))
function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

console.log(isPrime(0)); // false
console.log(isPrime(4)); // false
console.log(isPrime(5)); // true
```

### Check **_if a number is power of two_**

```js
function isPowerOfTwo(n) {
  if (n < 1) return false;

  while (n > 1) {
    if (n % 2 !== 0) return false;

    n = n / 2;
  }

  return true;
}

console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(1)); // true as 2^0 = 1
console.log(isPowerOfTwo(2)); // true as 2^1 = 2
console.log(isPowerOfTwo(5)); // false

// ---------------------------------------------

// With bitwise
function isPowerOfTwoBitWise(n) {
  if (n < 1) return false;

  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(0)); // false
console.log(isPowerOfTwoBitWise(1)); // true
console.log(isPowerOfTwoBitWise(2)); // true
console.log(isPowerOfTwoBitWise(5)); // false
```

## Search Algorithms

### Linear Search

```js
function linearSea(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}
const arr = [1, 3, 5, 7, 9];
const target = 5;
console.log(linearSea(arr, 5)); // Output: 2
console.log(linearSea(arr, 2)); // Output: -1
```

### Binary Search

> In terms of binary search the input array should be sorted if it is not then sort the array first or you can opt for linear search

```js
// binary search - logarithmic Big-O(logn)
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) return middleIndex;
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1

// -----------------------------------------------------

// Recursive solution - logarithmic Big-O(logn)
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1
```

## Sorting Algorithms

### Bubble Sort

<details>
<summary>Bubble Sort Idea</summary>
- Compare adjacent elements in the array and swap the positions if they are not in the intended order.
<br>
- Repeat the instructions as you step through each element in the array.
<br>
- Once you step through the whole array with no swaps, the array is sorted.
</details>
<br>

```js
// Bubble Sort - Big-O - Quadratic O(n^2)
function bubbleSort(arr) {
  let isSwapped;

  do {
    isSwapped = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapped = true;
      }
    }
  } while (isSwapped);
}

const arr = [2, -5, 6, -1];
bubbleSort(arr);
console.log(arr);
```

### Insertion Sort

<details>
<summary>Insertion Sort Idea</summary>
- Virtually split the array into a sorted and an unsorted part.
<br>
- Assume that the first element is already sorted and the remaining elements are unsorted.
<br>
- Select and unsorted element and compare it with all elements in the unsorted part.
<br>
- If the elements in the sorted part is smaller than the selected element then proceed to the next element in the unsorted part. Else, shift the larger element towards right in the sorted part.
<br>
- Insert the selected element at the right index.
<br>
- Repeat till all the unsorted elements are placed in the right order
</details>
<br>

```js
// Insertion Sort Big-O - Quadratic O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];

      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]
```

### Quick Sort

<details>
<summary>Quick Sort Idea</summary>
<br>
- Identify the pivot element in the array
<br>
-- Pick first element as pivot
<br>
-- Pick last element as pivot
<br>
-- Pick random element as pivot
<br>
-- Pick median as pivot
<br>
<br>
- Put everything that's smaller than the pivot into left array and everything that's greater than the pivot into right array
<br>
- Repeat the process for the individual `left` and `right` array till you have a array of length 1 which is sorted by definition
<br>
- Repeatedly concatenate the left array, pivot and right array till one sorted array remains
</details>
<br>

```js
// Quick Sort without constraints / in place
// Worst case - O(n^2) // happens when the arr is already sorted or you try to sort an already sorted arr
// Avg case - O(nlogn)
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const pivot = arr.length - 1;
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([4, -2, 1, -5])); // [ -5, -2, 1, 4 ]

// ---------------------------------------------
// ---------------------------------------------

// Quick Sort with constraints / in place
// Worst case - O(n^2) // happens when the arr is already sorted or you try to sort an already sorted arr
// Avg case - O(nlogn)
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left;
  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, i, right);
  return i;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const arr = [8, 20, -2, 4, -6];
quickSort(arr);
console.log(arr); // [-6, -2, 4, 8, 20]

const arr2 = [8, 20, -2, 4, -6];
quickSort(arr2, 2, 4); // start and end constraint
console.log(arr2); // [ 8, 20, -6, -2, 4 ]
```

### Merge Sort

<details>
<summary>Quick Sort Idea</summary>
- Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)
<br>
- Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array.
</details>
<br>

```js
// Big-O - O(nlogn)
function mergesort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergesort(leftArr), mergesort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  const resultArr = [...sortedArr, ...leftArr, ...rightArr];
  return resultArr;
}

const arr = [8, 20, -2, 4, -6];
console.log(mergesort(arr)); // [-6, -2, 4, 8, 20]
```
