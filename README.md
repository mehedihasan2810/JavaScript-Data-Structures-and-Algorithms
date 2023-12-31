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
  - ### [Miscellaneous Algorithms](#miscellaneous-algorithms)
    - [Cartesian Product](#cartesian-product)
    - [Climbing Staircase](#climbing-staircase)
    - [Tower Of Hanoi](#tower-of-hanoi)
    - [Prim's, Kruskal's and Floyd's algo](#) ⏳
  - ### [Algorithm Patterns](#algorithm-patterns)
    - [Sliding Window](#sliding-window)
    - [Two Pointers](#two-pointers)
- ## [Data Structures](#data-structures)
  - ### [Built In Data Structures](#built-in-data-structures)
    - [Array](#array)
    - [Object](#object)
    - [Set](#set---refer-to-this-doc-to-learn-more-about-set)
    - [Map](#map---refer-to-this-doc-to-learn-more-about-map)
  - ### [Custom Data Structures](#custom-data-structures)
    - [Stack](#stack)
    - [Queue](#queue)
      - [Queue (with array)](#implementationwith-array)
      - [Queue (with object) - optimized](#implementationwith-object---optimized)
      - [Circular Queue](#circular-queue)
      - [Priority Queue](#priority-queue)
        - [Min Priority Queue](#priority-queue)
        - [Max Priority Queue](#max-priority-queue)
    - [Linked List](#linked-list)
      - [Linked List Implementation](#implementation-without-tail-pointer)
      - [Linked List Optimized Implementation](#implementation-with-tail-pointer---more-optimized)
      - [Linked List Stack](#linked-list-stack)
      - [Linked List Queue](#linked-in-queue)
      - [Circular Linked List](#) ⏳
      - [Doubly Linked List](#doubly-linked-list)
      - [Merge Sort Linked List](#merge-sort-linked-list)
    - [Hash Table / Hash Map](#hash-table--hash-map)
    - [Tree](#tree)
      - [Binary Search Tree](#binary-search-tree-bst)
      - [AVL Trees](#) ⏳
      - [Red black Trees](#) ⏳
    - [Graph](#graph)
      - [Graph Implementation(Undirected | Adjacency List)](#graph)
      - [Directed acyclic graph](#) ⏳
    - [Heap](#heap)
      - [Min Heap](#min-heap)
      - [Max Heap](#max-heap)
    - [Trie](#trie)
      - [Trie Implementation](#trie)

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

![an image which visualizing how quicksort algorithm works](/assets/QuickSort2.png)
<br>
Source: [GeeksForGeeks](https://www.geeksforgeeks.org/quick-sort/)

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays

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

  const pivot = arr[arr.length - 1];
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

![an image visualizing how merge sort works](/assets/Merge-Sort-Algorithm.png)
<br>
Source: [101computing](https://www.101computing.net/merge-sort-algorithm/)

Merge sort is defined as a sorting algorithm that works by dividing an array into smaller subarrays, sorting each subarray, and then merging the sorted subarrays back together to form the final sorted array.

<details>
<summary>Merge Sort Idea</summary>
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

## Miscellaneous Algorithms

### Cartesian Product

```js
// Big-O - O(mn) // depends on length. As both array input
// lengths could be different hence Big-O is O(mn) instead O(n^2)
function cartesianProduct(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 3];
const arr2 = [2, 4, 5];
console.log(cartesianProduct(arr1, arr2)); // [ [ 1, 2 ], [ 1, 4 ], [ 1, 5 ], [ 3, 2 ], [ 3, 4 ], [ 3, 5 ] ]
```

### Climbing Staircase

**_Problem -_** Given a staircase of \`n\` steps, count the number of distinct ways to climb to the top.
<br>
You can either climb 1 step or 2 step at a time.

```js
// Big-O - linear O(n)
function climbingStairCase(n) {
  const numOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }

  return numOfWays[n - 1];
}

console.log(climbingStairCase(1)); // 1
console.log(climbingStairCase(2)); // 2
console.log(climbingStairCase(3)); // 3
console.log(climbingStairCase(4)); // 5
console.log(climbingStairCase(5)); // 8
```

### Tower Of Hanoi

![tower of hanoi visual explanation](/assets/tower-of-hanoi.jpg)
<br>
Source: [Enjoy Mathematics](https://www.enjoymathematics.com/blog/tower-of-hanoi-puzzle)

<details>
<summary>What is Tower Of Hanoi</summary>
- Tower of hanoi is a mathematical puzzle where we have three rods and a number of disks of various diameters.
<br>
- The objective of the puzzle is to move the entire stack to the last rod obeying following the rules:
<br>
-- Only on disk may be moved at a time.
<br>
-- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod. And lastly
<br>
-- No disk may be placed on top of a disk that is smaller
</details>
<br>

```js
// Steps to solve the problem:-
// Steps-1:- Shift `n-1` disks from `A` to `B`, using `C`(when required)
// Steps-2:- Shift last disk from `A` to `C`
// Steps-3:- Shift `n-1` disks from `B` to `C`, using `A`(when required)

// Big-O - O(2^n)
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
// Move disk 1 from A to C
// Move disk 2 from A to B
// Move disk 1 from C to B
// Move disk 3 from A to C
// Move disk 1 from B to A
// Move disk 2 from B to C
// Move disk 1 from A to C
```

## Algorithm Patterns

### Sliding Window

The sliding window algorithm is a technique used to efficiently solve problems that involve arrays or sequences. It works by maintaining a "window" of elements within the array and sliding it through the array to perform a specific operation. This technique is often used to optimize problems with a time complexity of O(n^2) to O(n).

Let's go through a simple example of a sliding window algorithm in JavaScript. Suppose you have an array of numbers, and you want to find the maximum sum of a subarray of a fixed size k. The sliding window algorithm can be used to achieve this efficiently.

Here's a basic implementation in JavaScript:

```js
function maxSubarraySum(arr, k) {
  if (arr.length < k) {
    return null; // Invalid input, as the window size is larger than the array size.
  }

  // Calculate the sum of the first window.
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }

  let currentSum = maxSum;

  // Slide the window through the array and update the sum.
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i]; // Subtract the element leaving the window and add the new element.

    // Update the max sum if the current sum is greater.
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}

// Example usage:
const array = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const windowSize = 3;
const result = maxSubarraySum(array, windowSize);
console.log(result); // Output: 21 (sum of subarray [1, 0, 20])
```

In this example, the maxSubarraySum function takes an array (arr) and a window size (k) as input and returns the maximum sum of a subarray of size k. The algorithm initializes the sum of the first window and then slides the window through the array, updating the sum as it goes. The time complexity of this algorithm is O(n).

[🔼 Back to top](#data-structures)

### Two Pointers

The two pointers algorithm is a technique used to efficiently solve problems that involve arrays or sequences by using two pointers to traverse the array. The basic idea is to maintain two pointers that iterate through the array in a way that reduces the time complexity of the algorithm.

Here's a simple example of the two pointers algorithm in JavaScript. Let's say you have a sorted array of numbers, and you want to find a pair of elements whose sum is equal to a given target value.

```js
function findPairWithSum(arr, target) {
  let left = 0; // Pointer starting from the beginning of the array
  let right = arr.length - 1; // Pointer starting from the end of the array

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target) {
      return [arr[left], arr[right]]; // Found a pair with the target sum
    } else if (currentSum < target) {
      left++; // Move the left pointer to increase the sum
    } else {
      right--; // Move the right pointer to decrease the sum
    }
  }

  return null; // No pair found with the target sum
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8];
const targetSum = 10;
const result = findPairWithSum(sortedArray, targetSum);
console.log(result); // Output: [3, 7] (3 + 7 = 10)
```

In this example, the findPairWithSum function takes a sorted array (arr) and a target sum (target) as input and returns a pair of elements whose sum is equal to the target. The algorithm starts with two pointers at the beginning and end of the array and adjusts them based on the comparison of the current sum with the target.

- If the current sum is equal to the target, the algorithm returns the pair.
- If the current sum is less than the target, it means we need a larger sum, so we move the left pointer to the right.
- If the current sum is greater than the target, it means we need a smaller sum, so we move the right pointer to the left.

This approach reduces the time complexity from O(n^2) to O(n) for certain problems where a brute force approach would involve nested loops.

[🔼 Back to top](#data-structures)

<!-------------
Data Structures
--------------->

<br>

# Data Structures

## Built In Data Structures

### Array

### Object

### Set - [refer to this doc to learn more about Set](https://javascript.info/map-set#set)

### Map - [refer to this doc to learn more about Map](https://javascript.info/map-set#map)

### WeakSet and WeakMap - [refer to this doc to learn more about WeakSet and WeakMap](https://javascript.info/weakmap-weakset)

## Custom Data Structures

### Stack

In JavaScript, a stack is a data structure that follows the Last In, First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. You can implement a stack using an array in JavaScript.

<details>
<summary>Stack Data Structure Usage</summary>

**_Function Call Management:_**
The call stack is used to manage function calls in programming languages. When a function is called, its information is pushed onto the stack, and when the function completes execution, it is popped off the stack.

**_Expression Evaluation:_**
Stacks are often used to evaluate expressions, especially in languages that use postfix (or Reverse Polish Notation) or infix notation. They help in converting expressions from infix to postfix and then evaluating the postfix expression.

**_Undo Mechanisms in Applications:_**
Undo functionality in applications is often implemented using a stack. Each action that can be undone is pushed onto the stack, and when the user requests an undo, the last action is popped and reversed.

**_Browser History:_**
Web browsers use a stack to keep track of the pages visited. Each new page visited is pushed onto the stack, and navigating back corresponds to popping the stack.

**_Parsing in Compilers:_**
Stacks are used in compiler design for parsing expressions and syntax analysis. They help in managing the order of operations and tracking nested structures.

**_Memory Management:_**
The call stack in a computer's memory is used to manage local variables and function calls. Each function call allocates space on the stack for local variables and parameters.

**_Backtracking Algorithms:_**
Stack-based backtracking is common in algorithms like depth-first search (DFS). The stack keeps track of the path taken, allowing the algorithm to backtrack when needed.

**_Expression Matching:_**
Stacks can be used to match parentheses and brackets in expressions, ensuring that they are balanced and properly nested.

**_Task Management in Operating Systems:_**
The operating system's task or process stack is used to manage the execution of processes and keep track of the function calls within each process.

**_Symbol Balancing in Editors:_**
Text editors and Integrated Development Environments (IDEs) use stacks to check for balanced symbols such as parentheses, braces, and brackets in the code.

</details>
<br>

**_Implementation:_**

```js
class Stack {
  constructor() {
    this.items = [];
  }

  // Add element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the last element added to the stack
  pop() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.pop();
  }

  // Return the last element without removing it
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the stack
  size() {
    return this.items.length;
  }

  // Clear the stack
  clear() {
    this.items = [];
  }

  // Print the items
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek()); // Output: 3

console.log(stack.pop()); // Output: 3
console.log(stack.pop()); // Output: 2

console.log(stack.isEmpty()); // Output: false

console.log(stack.size()); // Output: 1

stack.clear();
console.log(stack.isEmpty()); // Output: true
```

[🔼 Back to top](#data-structures)

### Queue

In JavaScript, a queue is a data structure that follows the First In, First Out (FIFO) principle. This means that the first element added to the queue is the first one to be removed. You can implement a queue using an array in JavaScript.

<details>
<summary>Queue Usage</summary>

**_Task Scheduling:_**
Operating systems often use queues to schedule processes or tasks. The first task to arrive is the first to be executed.

**_Print Queue:_**
In a print spooler, documents sent to the printer are placed in a queue. The printer processes them in the order they are received.

**_Breadth-First Search (BFS) in Graphs:_**
BFS traversal in graphs uses a queue to explore nodes level by level. Nodes are enqueued as they are discovered and dequeued for further exploration.

**_Job Queue in Systems:_**
Systems that handle multiple tasks or jobs often use a job queue to manage and process tasks in the order they are received.

**_Order Processing in E-commerce:_**
When orders are placed in an online store, they are often processed in the order they are received, resembling a queue.

**_Buffer in Networking:_**
In networking, queues are used in routers and switches to manage incoming data packets. Packets wait in a queue until they can be transmitted.

**_Browsing History:_**
Similar to stacks, queues can be used to manage browsing history in web browsers. The first page visited is the first one to be removed when the history limit is reached.

**_Message Queues in Inter-process Communication:_**
Queues are used for communication between different processes. Messages are sent to a queue and retrieved by the receiving process in a first-come, first-served manner.

**_Print Spooling:_**
Print jobs sent to a printer are often stored in a print spooler queue. The printer processes them one by one.

**_Task Management in Asynchronous Programming:_**
In asynchronous programming, a queue is often used to manage the execution of tasks or callbacks. Tasks are queued up and executed in the order they are received.

**_Request Handling in Web Servers:_**
Web servers often use queues to manage incoming requests. Requests are processed in the order they are received.

**_Waiting Lines in Simulations:_**
Queues are commonly used in simulations to model waiting lines, such as customers waiting in line at a bank or in a supermarket.

</details>
<br>

#### **_Implementation(with array)_**

```js
class Queue {
  constructor() {
    this.items = [];
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.items.length === 0) {
      return "Underflow";
    }
    return this.items.shift();
  }

  // Return the front element without removing it
  /*front or*/ peek() {
    if (this.items.length === 0) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the size of the queue
  size() {
    return this.items.length;
  }

  // Clear the queue
  clear() {
    this.items = [];
  }

  // Print the items
  print() {
    console.log(this.items.toString());
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false

console.log(queue.size()); // Output: 1

queue.clear();
console.log(queue.isEmpty()); // Output: true
```

[🔼 Back to top](#data-structures)

#### **_Implementation(with object) - optimized_**

> Previous queue DS implementation was with array which is not performant when the size of the array grows. For instance, we were dequeueing with the array method shift which is linear time complexity. In this optimized queue DS implementation we used object instead of array cause operating in object is more performant than operating in array.

```js
class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  // Add element to the end of the queue
  enqueue(element) {
    this.items[this.rear] = element;
    this.rear++;
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.front === this.rear) {
      return "Underflow";
    }
    const element = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return element;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === this.rear;
  }

  // Return the front element without removing it
  peek() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[this.front];
  }

  // Return the size of the queue
  size() {
    return this.rear - this.front;
  }

  // Clear the queue
  clear() {
    this.items = {};
    this.front = 0;
    this.rear = 0;
  }

  print() {
    console.log(this.items);
  }
}

// Example usage:
const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); // { '0': 1, '1': 2, '2': 3 }
console.log(queue.peek()); // Output: 1

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

console.log(queue.isEmpty()); // Output: false

console.log(queue.size()); // Output: 1
queue.print(); // { '2': 3 }

queue.clear();
console.log(queue.isEmpty()); // Output: true
queue.print(); // {}
```

[🔼 Back to top](#data-structures)

### _Circular Queue_

The size of the Circular Queue is fixed and a single block of memory is used as if the first element is connected to the last element.
<br>
Also referred to as circular buffer or ring buffer and follows the FIFO principle.
<br>
A circular queue will reuse the empty block created during the dequeue operation.
<br>
When working with queue of fixed maximum size, a circular queue is a great implementation choice.

<details>
<summary>Circular Queue Usage</summary>

- Clock
- Streaming Data
- Traffic lights
</details>

**_Implementation:_**

```js
class CircularQueue {
  constructor(capacity) {
    this.items = new Array(capacity);
    this.rear = -1;
    this.front = -1;
    this.currentLength = 0;
    this.capacity = capacity;
  }

  isFull() {
    return this.currentLength === this.capacity;
  }

  isEmpty() {
    return this.currentLength === 0;
  }

  size() {
    return this.currentLength;
  }

  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentLength += 1;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentLength -= 1;
    if (this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.front];
    }
    return null;
  }

  print() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
    } else {
      let i;
      let str = "";
      for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + " ";
      }
      str += this.items[i];
      console.log(str);
    }
  }
}

const queue = new CircularQueue(5);
console.log(queue.isEmpty()); // true
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log(queue.size()); // 5
queue.print(); // 10 20 30 40 50
console.log(queue.isFull()); // true
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
queue.print(); // 20 30 40 50
queue.enqueue(60);
queue.print(); // 20 30 40 50 60
```

[🔼 Back to top](#data-structures)

### Priority Queue

A priority queue is a data structure that maintains a set of elements, each associated with a priority, and allows efficient insertion and removal of elements according to their priorities. In JavaScript, you can implement a priority queue using a binary heap.

<details>
<summary>Priority Queue Usage</summary>

- Task Scheduling
- Job Scheduling
- Event-driven Simulations
- Load Balancing
- Scheduling in Real-time Systems
- Data Compression
</details>

**_Min Priority Queue Implementation(uses [Min Heap](#min-heap)):_**

```js
class PriorityQueue {
  constructor() {
    // Space O(N)
    this.heap = [];
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.heap.length === 0;
  }

  // Enqueue operation to add a new element with a priority to the priority queue.
  // Time O(log N) | Space O(1)
  enqueue(element, priority) {
    // Create a new node object that represents the element and its priority.
    const node = { element, priority };

    // Push the newly created node to the end of the heap array.
    this.heap.push(node);

    // After inserting a new element, perform heapifyUp to maintain the heap property.
    this.heapifyUp();
  }

  // Dequeue operation to remove and return the element with the highest priority.
  // Time O(log N) | Space O(1)
  dequeue() {
    // Check if the priority queue is empty. If so, return null.
    if (this.isEmpty()) {
      return null;
    }

    // Save the element at the root (highest priority) of the heap.
    const top = this.heap[0];

    // Replace the root with the last element and remove the last element from the heap.
    const last = this.heap.pop();

    // If there are still elements in the heap, replace the root with the last element (heap[0] = last) and
    // perform the heapifyDown operation to maintain the heap property.
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown(); // Restore the heap property after removal
    }

    // Return the element that was at the root.
    return top.element;
  }

  // HeapifyUp operation to maintain the heap property after inserting a new element.
  heapifyUp() {
    // Start with the index of the newly inserted element (at the end of the heap).
    let currentIndex = this.heap.length - 1;

    // Continue the process while the current index is greater than 0.
    while (currentIndex > 0) {
      // Calculate the index of the parent of the current element.
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      // Compare the priority of the current element with its parent, and swap if necessary.
      if (this.heap[currentIndex].priority < this.heap[parentIndex].priority) {
        this.swap(currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        // Break out of the loop if the heap property is restored.
        break;
      }
    }
  }

  // HeapifyDown operation to maintain the heap property after removing or replacing the root.
  heapifyDown() {
    // Start with the root (index 0) as the current index.
    let currentIndex = 0;

    // Continue the process indefinitely (will break out of the loop when heap property is restored).
    while (true) {
      // Calculate the indices of the left and right children of the current index.
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;

      // Initialize nextIndex with the current index.
      let nextIndex = currentIndex;

      // Compare the priority of the left child with the priority of the element at nextIndex.
      // If the left child has a smaller priority, update nextIndex to the left child index.
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex].priority < this.heap[nextIndex].priority
      ) {
        nextIndex = leftChildIndex;
      }

      // Compare the priority of the right child with the priority of the element at nextIndex.
      // If the right child has a smaller priority, update nextIndex to the right child index.
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex].priority < this.heap[nextIndex].priority
      ) {
        nextIndex = rightChildIndex;
      }

      // If currentIndex is different from nextIndex, swap elements and update currentIndex.
      if (currentIndex !== nextIndex) {
        this.swap(currentIndex, nextIndex);
        currentIndex = nextIndex;
        // If a swap was performed, continue the loop.
      } else {
        // If no swap was performed, break out of the loop as the heap property is now restored.
        break;
      }
    }
  }

  // Swap elements at two indices in the heap
  swap(i, j) {
    const temp = this.heap[i];
    this.heap[i] = this.heap[j];
    this.heap[j] = temp;
  }
}

// Example usage:
const pq = new PriorityQueue();

pq.enqueue("Task 1", 3);
pq.enqueue("Task 2", 1);
pq.enqueue("Task 3", 2);

console.log(pq.dequeue()); // Output: 'Task 2'
console.log(pq.dequeue()); // Output: 'Task 3'
console.log(pq.dequeue()); // Output: 'Task 1'
```

**Explanation:**

- The PriorityQueue class uses an array (heap) to represent the binary heap. Each element in the heap is an object with element and priority properties.
- The enqueue method adds an element to the priority queue with the specified priority and then performs a heapifyUp operation to maintain the heap property.
- The dequeue method removes the element with the highest priority (lowest value) from the priority queue and then performs a heapifyDown operation.
- The heapifyUp and heapifyDown methods ensure that the binary heap properties are maintained after insertion and removal operations.
- The swap method is a helper function to swap elements at two indices in the heap.
- The priority queue supports elements with associated priorities, and elements with higher priority values will be dequeued before those with lower priority values.

> This implementation uses a `min-heap`, where the element with the minimum priority has the highest priority. If you need a max-heap (highest priority element is dequeued first), you can modify the comparison conditions accordingly.

### Max Priority Queue

**_Implementation(uses [Max Heap](#max-heap))_**

```js
class MaxPriorityQueue {
  constructor() {
    // Initialize an empty array to represent the max heap.
    this.heap = [];
  }

  // Method to insert a new element into the max heap.
  // Time O(log N) | Space O(1)
  enqueue(element, priority) {
    // Create a node with the given element and priority.
    const node = { element, priority };

    // Add the new node to the end of the heap array.
    this.heap.push(node);

    // Restore the max heap property after insertion.
    this._heapifyUp();
  }

  // Method to extract the maximum element (root) from the max heap.
  // Time O(log N) | Space O(1)
  dequeue() {
    if (this.isEmpty()) {
      // Return null if the heap is empty.
      return null;
    }

    // Extract the root element (maximum) from the heap.
    const max = this.heap[0];

    // Replace the root with the last element in the heap.
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      // If the heap is not empty, replace the root and restore the max heap property.
      this.heap[0] = last;
      this._heapifyDown();
    }

    // Return the extracted maximum element.
    return max.element;
  }

  // Method to check if the max heap is empty.
  isEmpty() {
    return this.heap.length === 0;
  }

// Private method to restore the max heap property after insertion.
_heapifyUp() {
    // Start with the index of the last inserted element.
    let currentIndex = this.heap.length - 1;

    // Continue moving up the tree until the heap property is restored.
    while (currentIndex > 0) {
        // Calculate the index of the parent element.
        const parentIndex = Math.floor((currentIndex - 1) / 2);

        // Compare the current element with its parent.
        if (this.heap[currentIndex].priority > this.heap[parentIndex].priority) {
            // Swap if the current element has higher priority than its parent.
            [this.heap[currentIndex], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[currentIndex],
            ];

            // Update the current index to the parent index for the next iteration.
            currentIndex = parentIndex;
        } else {
            // If the current element is not higher than its parent, break out of the loop.
            break;
        }
    }
}


 // Private method to restore the max heap property after removal.
_heapifyDown() {
    // Start with the root element.
    let currentIndex = 0;

    // Continue the process indefinitely.
    while (true) {
        // Calculate the indices of the left and right children.
        const leftChildIndex = 2 * currentIndex + 1;
        const rightChildIndex = 2 * currentIndex + 2;

        // Assume the current index is the largest.
        let largestChildIndex = currentIndex;

        // Check if the left child exists and has higher priority than the current largest.
        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex].priority > this.heap[largestChildIndex].priority
        ) {
            largestChildIndex = leftChildIndex;
        }

        // Check if the right child exists and has higher priority than the current largest.
        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex].priority > this.heap[largestChildIndex].priority
        ) {
            largestChildIndex = rightChildIndex;
        }

        // If the current index is not the largest, swap with the largest child.
        if (currentIndex !== largestChildIndex) {
            [this.heap[currentIndex], this.heap[largestChildIndex]] = [
                this.heap[largestChildIndex],
                this.heap[currentIndex],
            ];
            currentIndex = largestChildIndex;
        } else {
            // Break if the max heap property is restored.
            break;
        }
    }
}


// Example usage:
const maxPriorityQueue = new MaxPriorityQueue();

maxPriorityQueue.enqueue("Task 1", 3);
maxPriorityQueue.enqueue("Task 2", 1);
maxPriorityQueue.enqueue("Task 3", 2);

console.log(maxPriorityQueue.dequeue()); // Output: Task 2 (highest priority)
console.log(maxPriorityQueue.dequeue()); // Output: Task 1
```

[🔼 Back to top](#data-structures)

### Linked List

A linked list is a linear data structure in which elements are stored in nodes, and each node points to the next node in the sequence. Unlike arrays, linked lists do not have a fixed size, and their elements can be dynamically allocated. The basic components of a linked list include nodes and pointers.

<details>
<summary>Most common usage of linked list</summary>

**_Dynamic Memory Allocation:_**
Linked lists are useful when the size of the data structure is not known in advance or may change frequently. They allow for dynamic memory allocation, as nodes can be added or removed easily without the need for contiguous memory.

**_Implementation of Data Structures:_**
Linked lists are fundamental in the implementation of various data structures such as stacks, queues, and symbol tables. For example, a stack or a queue can be easily implemented using a linked list by manipulating the pointers to achieve last-in-first-out (LIFO) or first-in-first-out (FIFO) behavior.

**_Memory Management:_**
Linked lists are used in memory management systems, like the free block list in dynamic memory allocation. The free memory blocks are maintained in a linked list, and when memory is requested, the allocator can efficiently find and allocate the appropriate-sized block.

**_Undo Functionality in Software:_**
Linked lists are often used to implement undo functionality in software applications. Each action performed is stored as a node in a linked list, and by traversing the list backward, the application can undo each action in sequence.

**_File Systems:_**
Linked lists are employed in file systems to represent the structure of directories and files. Each directory or file is represented as a node, and the pointers link the nodes together to form the hierarchy. This allows for efficient traversal and manipulation of the file system structure.

</details>
<br>

#### **_Implementation (without tail pointer):_**

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Big-O - constant O(1)
  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // Big-O - linear O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;

      while (prev.next) {
        prev = prev.next;
      }

      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index! index is not in the list");
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log("Node has been deleted");
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        console.log("Node has been deleted");
        return value;
      }

      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }

    return -1;
  }

  reverse() {
    let prev = null;
    let curr = this.head;

    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const linkedList = new LinkedList();

console.log(linkedList.getSize()); // 0
console.log(linkedList.isEmpty()); // true

linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);

console.log(linkedList.getSize()); // 4
console.log(linkedList.isEmpty()); // false
linkedList.print(); // 20 30 40 50

console.log(linkedList.removeFrom(1)); // 30
linkedList.print(); // 20 40 50

linkedList.append(60);
linkedList.print(); // 20 40 50 60

console.log(linkedList.removeValue(50)); // 50
linkedList.print(); // 20 40 60

console.log(linkedList.search(40)); // 1
console.log(linkedList.search(90)); // -1

linkedList.reverse();
linkedList.print(); // 60 40 20

linkedList.insert(70, 2);
linkedList.print(); // 60 40 70 20
```

[🔼 Back to top](#data-structures)

#### **_Implementation (with tail pointer - more optimized):_**

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // Big-O - constant O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // Big-O - constant O(1)
  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;

      this.size++;
    }
  }

  removeFromFront() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return null;
    }

    const value = this.head.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;

      this.size--;

      return value;
    }

    // const value = this.head.value;
    this.head = this.head.next;

    this.size--;

    return value;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("invalid index! index is not in the list");
      return null;
    }

    let removedNode;

    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;

      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }

    const value = this.tail.value;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let prev = this.head;
      while (prev.next !== this.tail) {
        prev = prev.next;
      }
      prev.next = null;
      this.tail = prev;
    }

    this.size--;
    return value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      console.log("list is empty");
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      console.log("Node has been deleted");
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }

      if (prev.next) {
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        console.log("Node has been deleted");
        return value;
      }

      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }

    let index = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        return index;
      }
      curr = curr.next;
      index++;
    }

    return -1;
  }

  reverse() {
    // `prev` is used to keep track of the reversed part of the list.
    let prev = null;

    // `current` is used to iterate through the original list.
    let curr = this.head;

    while (curr) {
      // In each iteration, the nextNode variable is used to temporarily store the next node in the original list.
      let nextNode = curr.next;

      // The direction of the `next` pointer for the current node is reversed to point to the previous node (prev).
      curr.next = prev;

      // Move prev and current pointers to the next nodes for the next iteration.
      prev = curr;
      curr = nextNode;
    }

    // At the end of the loop, 'prev' will be the new head of the reversed list
    this.head = prev;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";

      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }

      console.log(listValues);
    }
  }
}

const linkedList = new LinkedList();

console.log(linkedList.getSize()); // 0
console.log(linkedList.isEmpty()); // true

linkedList.append(20);
linkedList.append(30);
linkedList.append(40);
linkedList.append(50);

linkedList.print(); // 20 30 40 50

linkedList.removeFromFront();

linkedList.print(); // 30 40 50

console.log(linkedList.getSize()); // 3
console.log(linkedList.isEmpty()); // false
linkedList.print(); // 30 40 50

console.log(linkedList.removeFrom(1)); // 40
linkedList.print(); // 30 50

linkedList.append(60);
linkedList.print(); // 30 50 60

console.log(linkedList.removeValue(50)); // 50
linkedList.print(); // 30 60

console.log(linkedList.search(60)); // 1
console.log(linkedList.search(90)); // -1

linkedList.reverse();
linkedList.print(); // 60 30

linkedList.insert(70, 2);
linkedList.print(); // 60 30 70
```

[🔼 Back to top](#data-structures)

### Linked List Stack

> We can implement stack data structure by reusing the linked list data structure

**_Implementation:_**

```js
class LinkedListStack {
  constructor() {
    // we are reusing the LikedList data structure
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    this.list.print();
  }
}

const stack = new LinkedListStack();

console.log(stack.isEmpty()); // true
console.log(stack.getSize()); // 0

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.isEmpty()); // false
console.log(stack.getSize()); // 3

console.log(stack.peek()); // 30

stack.print(); // 30 20 10
stack.pop();
stack.print(); // 20 10
```

[🔼 Back to top](#data-structures)

### Linked In Queue

> We can implement queue data structure by reusing the linked list data structure

**_Implementation:_**

```js
class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
    return this.list.removeFromFront();
  }

  peek() {
    if (this.list.isEmpty()) {
      return null;
    }
    return this.list.head.value;
  }

  getSize() {
    return this.list.getSize();
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  print() {
    this.list.print();
  }
}

const queue = new LinkedListQueue();

console.log(queue.isEmpty()); // true
console.log(queue.getSize()); // 0

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.isEmpty()); // false
console.log(queue.getSize()); // 3

console.log(queue.peek()); // 10

queue.print(); // 10 20 30
console.log(queue.dequeue());
queue.print(); // 20 30
```

[🔼 Back to top](#data-structures)

### Doubly Linked List

A doubly linked list is a data structure in which each node contains a data element and two pointers, one pointing to the next node in the sequence (next pointer) and another pointing to the previous node (previous pointer). This bidirectional linking allows for more versatile traversal in both directions.

**_Implementation:_**

```js
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFromFront() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  removeFromEnd() {
    if (this.isEmpty()) {
      return null;
    }
    const value = this.tail.value;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
    return value;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  printReverse() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.tail;
      let list = "";
      while (curr) {
        list += `${curr.value}<->`;
        curr = curr.prev;
      }
      console.log(list);
    }
  }
}

const list = new DoublyLinkedList();
list.append(1);
list.append(2);
list.append(3);
list.prepend(0);
list.print(); // 0<->1<->2<->3<->
list.printReverse(); // 3<->2<->1<->0<->
list.removeFromEnd();
list.print(); // 0<->1<->2<->
list.removeFromFront();
list.print(); // 1<->2<->
```

[🔼 Back to top](#data-structures)

### Merge Sort Linked List

```js
// check the linkedList implementation above
const linkedList1 = new LinkedList();

linkedList1.append(4);
linkedList1.append(2);
linkedList1.append(1);
linkedList1.append(3);
linkedList1.append(5);
linkedList1.append(-5);

function merge(list1, list2) {
  let dummy = new Node(0);
  let current = dummy;

  while (list1 !== null && list2 !== null) {
    if (list1.value < list2.value) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  return dummy.next;
}

// --------------------------------------------

function sortList(head) {
  if (head === null || head.next === null) {
    return head;
  }

  // Find the middle of the linked list
  let slow = head;
  let fast = head;
  let prev = null;

  while (fast !== null && fast.next !== null) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // Split the linked list into two halves
  prev.next = null;

  // Recursively sort each half
  const sortedFirstHalf = sortList(head);
  const sortedSecondHalf = sortList(slow);

  // Merge the sorted halves
  return merge(sortedFirstHalf, sortedSecondHalf);
}

const head = sortList(linkedList1.head);

/* Function to print the linked list */
function printList(node) {
  let result = "";
  while (node != null) {
    result += node.value + " ";

    node = node.next;
  }

  console.log(result); // -5 1 2 3 4 5
}

printList(head);
```

[🔼 Back to top](#data-structures)

### Hash Table / Hash Map

- Most common usage of Hash Table
  - Database Indexing
  - Caching

**_Implementation:_**

```js
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let indexKey = 0;
    for (let i = 0; i < key.length; i++) {
      indexKey += key.charCodeAt(i);
    }

    // the index should be withing the size of the array
    return indexKey % this.size;
  }

  set(key, value) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) {
      this.table[index] = [[key, value]];
    } else {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        return sameKeyItem[1];
      }
    }

    return undefined;
  }

  remove(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (bucket) {
      const sameKeyItem = bucket.find((item) => item[0] === key);

      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);

table.set("name", "Bruce");
table.set("age", 24);
table.display();

console.log(table.get("name"));

table.remove("name");

table.display();
```

[🔼 Back to top](#data-structures)

### Tree

```mermaid
    graph TB;
      A-->B
      A-->C
      A-->D
      B-->E
      B-->F
      C-->G
      C-->H
      D-->I
      D-->J
```

<br>

- A tree is a hierarchical data structure that consists of nodes connected by edges

- A tree is a non-linear data structure, compared to arrays, linked lists, stacks and
  queues which are linear data structures.
- In linear data structures, the time required to search is proportional to the size of
  the data set
- Trees however, owing to the nonlinear nature allow quicker and easier access to
  the data
- A tree will not contain any loops or cycles.

<br>

<details>
<summary>Some common types of tree data structure</summary>

**_Binary Tree:_**
A tree in which each node has at most two children, referred to as the left child and the right child.

**_Binary Search Tree (BST):_**
A binary tree with the property that the key in each node is greater than or equal to any key in its left subtree and less than or equal to any key in its right subtree.

**_AVL Tree:_**
A self-balancing binary search tree where the height difference between the left and right subtrees of any node (the balance factor) is at most 1. This ensures logarithmic height and efficient search, insert, and delete operations.

**_Red-Black Tree:_**
Another self-balancing binary search tree with the property that each node has a color (either red or black), and the tree is balanced based on certain rules, ensuring logarithmic height.

</details>

<br>

<details>
<summary>Usage of Tree Data Structure:</summary>

- File systems for directory structure

- A family tree

- An organisation tree
- DOM
- Chat bots
- Abstract syntax trees
  </details>

    <br>

<details>
<summary>Terminology:</summary>

<br>

```mermaid
    graph TB;
      A-->B
      A-->C
      B-->E
      B-->F
```

<br>

**_Node:_**
A fundamental building block of a tree that contains data and may have a reference to one or more child nodes. Here `A, B, C, D, E, F` are individual node.

**_Root:_**
The topmost node in a tree structure. It serves as the starting point for traversing the tree. Here `A` is the root node

**_Parent:_**
A node in a tree that has one or more child nodes. The node directly above another node is considered its parent. Here `A` is the parent of child `B` and `C`

**_Child:_**
A node in a tree that is directly connected to another node (its parent) beneath it. Here `B` and `C` is the child of `A`.

**_Leaf:_**
A node in a tree that has no children, meaning it is a terminal node at the end of a branch. Here `E`, `F` and `C` are the leaf node.

**_Siblings:_**
Nodes that share the same parent are called siblings. They are on the same level of the tree.

**_Ancestor:_**
A node that is on a path from a given node to the root node. All ancestors of a node are higher in the tree. Here `A` is the ancestor of `E`

**_Descendant:_**
A node that is on a path from the root node to a given node. All descendants of a node are below it in the tree.

**_Subtree:_**
A tree formed by a node and its descendants.

**_Level:_**
The level of a node is its distance from the root node. The root is considered to be at level 0, and its children are at level 1, and so on.

**_Height:_**
The height of a tree is the length of the longest path from the root node to a leaf. The height of leaf `E` node is 0 and `A` is 2.

**_Depth:_**
The depth of a node is the number of edges present in path from the root node of a tree to that node. The depth of `E` is 2 and `A` is 0.

**_Binary Tree:_**
A tree in which each node has at most two children, referred to as the left child and the right child.

**_Binary Search Tree (BST):_**
A binary tree in which the left subtree of a node contains only nodes with keys less than the node's key, and the right subtree contains only nodes with keys greater than the node's key.

**_Balanced Tree:_**
A tree in which the height of the left and right subtrees of any node differs by at most one.

**_Traversal:_**
The process of visiting all the nodes of a tree in a specific order. Common traversal methods include in-order, pre-order, and post-order.

**_Node Degree:_**
The degree of a node in a tree is the number of children it has. For example:
A node with no children (a leaf) has a degree of 0.
A node with one child has a degree of 1.
A node with two children (common in binary trees) has a degree of 2.

**_Tree Degree:_**
The degree of a tree is defined as the maximum degree of any node in the tree. In other words, it is the maximum number of children that any node in the tree has.
For example, in a binary tree, the maximum degree is 2 because each node can have at most two children. In a ternary tree, the maximum degree is 3, and so on.

</details>
<br>

### Binary Search Tree (BST)

<br>

```mermaid
    graph TB;
      10-->5
      10-->15
      5-->3
      5-->7
```

<br>

Binary Search Tree is tree data structure where -

- The value of each left node must be smaller than the parent node
- The value of each right node must be greater than the parent node
- Each node has at most two children

<details>
<summary>
Binary Search Tree Usage
</summary>

- Searching
- Sorting
- To implement abstract data types such as lookup tables and priority queues
</details>
<br>

<details>
<summary>
Tree Traversal
</summary>

Tree Traversal means Visiting every node in the tree.
<br>
A hierarchical data structure like a tree can be traversed in different ways.

1.  Depth First Search (DFS)

    - The DFS algorithm starts at the root node and explores as far as possible along
      each branch before backtracking
    - Visit the root node, visit all the nodes in the left subtree and visit all the nodes in
      the right subtree
    - Depending on the order in which we do this, there can be three types of DFS
      traversals

      1. Preorder Traversal
      2. Inorder Traversal
      3. Postorder Traversal

2.  Breadth First Search (BFS)

    - Explore all nodes at the present depth prior to moving on to the nodes at the next depth level
    </details>
    <br>

```js
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    // If the current root is null, a new node with the value is created and assigned as root node.
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(root, newNode) {
    // If the value is less than the current root's value, the insertion is done in the left subtree.
    if (newNode.value < root.value) {
      // if left pointer empty point it to the new node
      if (root.left === null) {
        root.left = newNode;

        // else recursively check if there's empty spot below
      } else {
        this._insertNode(root.left, newNode);
      }

      // If the value is greater, the insertion is done in the right subtree.
    } else {
      // if right pointer empty point it to the new node
      if (root.right === null) {
        root.right = newNode;

        // else recursively check if there's empty spot below
      } else {
        this._insertNode(root.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(root, value) {
    // If the current node is null, return null.
    if (!root) {
      return null;
    } else {
      // If the current node's value matches the target value, return the current value.
      if (root.value === value) {
        return value;

        // If the target value is less than the current node's value, recurse on the left subtree.
      } else if (value < root.value) {
        return this._searchNode(root.left, value);

        // If the target value is greater, recurse on the right subtree.
      } else {
        return this._searchNode(root.right, value);
      }
    }
  }

  // Depth First Search
  // PreOrder Traversal
  preOrder(callback) {
    this._preOrder(this.root, callback);
  }

  _preOrder(root, callback) {
    if (root) {
      // 1. Read the data of the node
      callback(root.value);

      // 2. Visit the left subtree
      this._preOrder(root.left, callback);

      // 3. Visit the right subtree
      this._preOrder(root.right, callback);
    }
  }

  // Depth First Search
  // InOrder Traversal
  inOrder(callback) {
    this._inOrder(this.root, callback);
  }

  _inOrder(root, callback) {
    if (root) {
      // 1. Visit the left subtree
      this._inOrder(root.left, callback);

      // 2. Read the data of the node
      callback(root.value);

      // 3. Visit the right subtree
      this._inOrder(root.right, callback);
    }
  }

  // Depth First Search
  // PostOrder Traversal
  postOrder(callback) {
    this._postOrder(this.root, callback);
  }

  _postOrder(root, callback) {
    if (root) {
      // 1. Visit the left subtree
      this._postOrder(root.left, callback);

      // 2. Visit the right subtree
      this._postOrder(root.right, callback);

      // 3. Read the data of the node
      callback(root.value);
    }
  }

  // Breadth First Search
  // LevelOrder Traversal
  levelOrder(callback) {
    // 1. Create a queue
    // Check the queue implementation above
    const queue = new Queue();

    // 2. Enqueue the root node
    queue.enqueue(this.root);

    while (queue.size()) {
      // a. Dequeue the node from the front
      let curr = queue.dequeue();

      // b. Read the node's value
      callback(curr.value);

      // C. Enqueue the node's left child if it exists
      if (curr.left) {
        queue.enqueue(curr.left);
      }
      // d. Enqueue the node's right child if it exists
      if (curr.right) {
        queue.enqueue(curr.right);
      }
    }
  }

  min(root = this.root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.min(root.left);
    }
  }

  max(root = this.root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.max(root.right);
    }
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(root, value) {
    if (root === null) {
      return root;
    }
    // if value is less than root value then traverse the left subtree
    if (value < root.value) {
      root.left = this._deleteNode(root.left, value);

      // if value is greater than root value then traverse the right subtree
    } else if (value > root.value) {
      root.right = this._deleteNode(root.right, value);
    } else {
      // Case 1: Node with No Children (Leaf Node):
      // - Simply remove the node.
      if (!root.left && !root.right) {
        return null;
      }

      // Case 2: Node with One Child:
      // - Remove the node and replace it with its child.
      if (!root.left) {
        return root.right;
      } else if (!root.right) {
        return root.left;
      }

      // Case 3: Node with Two Children:
      // - Find the node's in-order successor (or predecessor), replace the node's value with the successor's value, and then recursively delete the successor.
      root.value = this.min(root.right);
      root.right = this._deleteNode(root.right, root.value);
    }

    return root;
  }
}

const bst = new BinarySearchTree();

console.log(bst.isEmpty()); // true

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);

const preOrderResult = [];
bst.preOrder((value) => preOrderResult.push(value));
console.log(preOrderResult); // [ 10, 5, 3, 7, 15 ]

const inOrderResult = [];
bst.inOrder((value) => inOrderResult.push(value));
console.log(inOrderResult); // [ 3, 5, 7, 10, 15 ]

const postOrderResult = [];
bst.postOrder((value) => postOrderResult.push(value));
console.log(postOrderResult); // [ 3, 7, 5, 15, 10 ]

const levelOrderResult = [];
bst.levelOrder((value) => levelOrderResult.push(value));
console.log(levelOrderResult); // [ 10, 5, 15, 3, 7 ]

bst.delete(10);

const levelOrderResult2 = [];
bst.levelOrder((value) => levelOrderResult2.push(value));
console.log(levelOrderResult2); // [ 15, 5, 3, 7 ]

console.log(bst.min()); // 3
console.log(bst.max()); // 15

console.log(bst.isEmpty()); // false
console.log(bst.search(5)); // 5
console.log(bst.search(2)); // null
```

[🔼 Back to top](#data-structures)

### Graph

<br>

![simple graph image](/assets/simple-graph.png)

<br>

- A graph is a non-linear data structure that consists of a finite number of vertices
  (also called nodes) connected by edges
- Trees are a specific type of graph data structure

<br>

<details>
<summary>Types of graph</summary>

1. **_Directed graph_**

![simple graph image](/assets/directed-graph.png)

- A graph in which the edges have a direction
- Edges are usually represented by arrows pointing in
  the direction the graph can be traversed

 <br>

2. **_Undirected graph_**

![simple graph image](/assets/undirected-graph.png)

- A graph in which the edges are bidirectional
- The graph can be traversed in either direction
- The absence of an arrow tells us that the graph is
  undirected

  <br>

**_More graph types:_**

- A graph can have only vertices(nodes) no edges(lines or direction)

```mermaid
    graph TB;
     B ~~~ A
     B ~~~ C
```

<br>

- Multiple edges from one node

```mermaid
    graph LR;
     B --- A
     B --- C
```

<br>

- Cycles in the graph

```mermaid
    graph LR;
     B --> C
     C --> A
     A --> B
```

<br>

- Self loops in a node

```mermaid
    graph LR;
     B --- A
     B --- C
     A --- A
```

<br>

- Disconnected

```mermaid
    graph TB;
     B ~~~ A
     B --- C
```

<br>

- Graphs may contain weights on edges representing the cost of traversing that edge

![weight graph image](/assets//weight-graph.png)

<br>
</details>

<br>

<details>
<summary>Graph Usage</summary>

- **_Google maps_** --> cities are represented as vertices(nodes) and roads are edges(lines) to help build navigation system.

- **_Social media sites_** --> Users are considered as vertices and edges are the links between connections. Like facebook, instagram uses graph data structure to show mutual connection, post suggestion and other recommendations.
</details>

<br>

<details>
<summary>Graph Representation</summary>

<br>

Graphs are commonly represented in two ways -

1. Adjacency Matrix

   - An adjacency matrix is a 2D array of size V x V where V is the number of vertices in the graph
   - Each row and column represent a vertex
   - If the value of any element say, matrix[i][j] is 1, it represents that there is an edge
     connecting vertex i and vertex j
   - [Checkout this video to learn more about **_Adjacency Matrix_**](https://youtu.be/9QTHtlAVhmU?si=uA9szpdNR5M_NVPa)

2. Adjacency List

   - [Checkout this video to learn more about **_Adjacency List_**](https://youtu.be/0L6WPq3bT9w?si=bBkRmo0XM5gZxHEH)
   </details>

<br>

   <details>
   <summary>Adjacency Matrix vs Adjacency List</summary>

- With an adjacency list, we only need to store the values for the edges that exist. With adjacency matrix, you store values irrespective of whether an edge exists or
  not. Storage wise, an adjacency list is way more efficient

- With adjacency list, inserting and finding adjacent nodes is constant time
  complexity whereas with adjacency matrix, it is linear time complexity.

- An adjacency list allows you to store additional values with an edge such as
  weight of the edge. With adjacency matrix, such information would have to be
  stored externally

     </details>

     <br>

  **_Graph Implementation(Undirected | Adjacency List)_**

```js
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    // here add method available in Set data structure
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return;
    }

    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + "->" + [...this.adjacencyList[vertex]]);
    }
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

graph.display();
// A->B
// B->A,C
// C->B

console.log(graph.hasEdge("A", "C")); // false

graph.removeEdge("A", "B");

graph.display();
// A->
// B->C
// C->B

graph.addEdge("A", "B");

graph.removeVertex("B");

graph.display();
// A->
// C->
```

[🔼 Back to top](#data-structures)

## Heap

![An image which visualizing min heap max heap data structure](/assets/heap.png)
<br>
Source: [GeeksForGeeks](https://www.geeksforgeeks.org/heap-data-structure/)

[To understand visually how heap works checkout this freeCodeCamp youtube video](https://youtu.be/-LVmKNvflnY?si=lzG6fvSycqBBYHP3&t=2:33:55)

<details>
<summary>What is Heap?</summary>

A heap is a specialized tree-based data structure that satisfies the heap property. In a heap, the elements are arranged in a particular order such that the value of each node is either greater than or equal to (max heap) or less than or equal to (min heap) the values of its children. This ensures that the root of the heap contains either the maximum or minimum element, depending on the type of heap.

**_Heaps are commonly implemented as binary heaps, where each node has at most two children. The binary heap has two variations:_**

**_Max Heap:_** In a max heap, the value of each node is greater than or equal to the values of its children. Therefore, the maximum element is at the root.

**_Min Heap:_** In a min heap, the value of each node is less than or equal to the values of its children. Therefore, the minimum element is at the root.

The heap data structure is often used to efficiently find and remove the maximum (or minimum) element, making it suitable for priority queue implementations. It also plays a crucial role in various algorithms, such as heap sort, and is used in graph algorithms like Dijkstra's algorithm for finding the shortest path.

Key operations on a heap include:

Insertion: Adding a new element to the heap while maintaining the heap property.

Deletion: Removing the maximum (or minimum) element from the heap and rearranging the remaining elements to maintain the heap property.

Peek: Retrieving the maximum (or minimum) element without removing it.

Heaps are efficient for tasks that involve repeatedly finding and removing the extremal elements. The underlying binary tree structure allows these operations to be performed with logarithmic time complexity.

</details>

### Min Heap

A min-heap is a binary tree data structure in which the value of each node is less than or equal to the values of its children. This structure ensures that the minimum element is always at the root. Min-heaps are commonly implemented as arrays for efficiency.

<details>
<summary>Min Heap Usage:</summary>

**_Job Scheduling:_** Min-heaps can be used to schedule jobs based on their priority or execution time.

**_Network Routing:_** In computer networks, min-heaps can be utilized to optimize routing algorithms.

**_Task Scheduling in Operating Systems:_** Min-heaps are used in operating systems to schedule tasks with the least processing time.

**_Merge Operations:_** Min-heaps can be applied to efficiently perform merge operations in external sorting algorithms.

**_Priority Queues:_** Min-heaps are often used to implement priority queues where elements with higher priority (lower value in this case) are served before elements with lower priority.

</details>

<br>

```js
class MinHeap {
  constructor() {
    this.heap = [];
  }

  // Adds new element in the heap
  insert(value) {
    this.heap.push(value);
    this._heapifyUp();
  }

  // Removes and returns the minimum element from the heap
  extractMin() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._heapifyDown();

    return root;
  }

   // getMin: Returns the minimum element without removing it from the heap.
  getMin() {
    return this.heap.length > 0 ? this.heap[0] : null;
  }


  // Size: Returns the number of elements in the heap.
  size() {
    return this.heap.length;
  }

   // Is Empty: Checks if the heap is empty.
  isEmpty() {
    return this.heap.length === 0;
  }

 // _HeapifyUp operation to maintain the min heap property after inserting a new element.
_heapifyUp() {
    // Start with the index of the last inserted element.
    let index = this.heap.length - 1;

    // Continue moving up the tree until the heap property is restored.
    while (index > 0) {
        // Calculate the index of the parent element.
        const parentIndex = Math.floor((index - 1) / 2);

        // Compare the current element with its parent.
        if (this.heap[index] < this.heap[parentIndex]) {
            // Swap if the current element is smaller than its parent.
            [this.heap[index], this.heap[parentIndex]] = [
                this.heap[parentIndex],
                this.heap[index],
            ];

            // Update the current index to the parent index for the next iteration.
            index = parentIndex;
        } else {
            // If the current element is not smaller than its parent, break out of the loop.
            break;
        }
    }
}


  // _HeapifyDown operation to maintain the min heap property after removing the root.
_heapifyDown() {
    // Start with the root element.
    let index = 0;

    // Continue the process indefinitely.
    while (true) {
        // Calculate the indices of the left and right children.
        const leftChildIndex = 2 * index + 1;
        const rightChildIndex = 2 * index + 2;

        // Assume the current index is the smallest.
        let smallestChildIndex = index;

        // Check if the left child exists and is smaller than the current smallest.
        if (
            leftChildIndex < this.heap.length &&
            this.heap[leftChildIndex] < this.heap[smallestChildIndex]
        ) {
            smallestChildIndex = leftChildIndex;
        }

        // Check if the right child exists and is smaller than the current smallest.
        if (
            rightChildIndex < this.heap.length &&
            this.heap[rightChildIndex] < this.heap[smallestChildIndex]
        ) {
            smallestChildIndex = rightChildIndex;
        }

        // If the current index is not the smallest, swap with the smallest child.
        if (smallestChildIndex !== index) {
            [this.heap[index], this.heap[smallestChildIndex]] = [
                this.heap[smallestChildIndex],
                this.heap[index],
            ];
            index = smallestChildIndex;
        } else {
            // If no swap occurred, the heap property is restored, so break out of the loop.
            break;
        }
    }
}


// Example usage:
const minHeap = new MinHeap();
minHeap.insert(4);
minHeap.insert(8);
minHeap.insert(2);
minHeap.insert(5);

console.log(minHeap.extractMin()); // Output: 2
console.log(minHeap.extractMin()); // Output: 4
```

[🔼 Back to top](#data-structures)

<br>

### Max Heap

A max heap is a binary heap data structure where the value of each node is greater than or equal to the values of its children. The root node, therefore, contains the maximum element in the heap. It is a complete binary tree, represented as an array where the parent node at index i has children at indices 2i + 1 (left child) and 2i + 2 (right child).

<details>

<summary>Max Heap Usage</summary>

**_Priority Queues:_** Max heaps are used in priority queues, where elements with higher priorities (larger values) are dequeued before elements with lower priorities.

**_Heap Sort:_** The max heap is used in heap sort, a comparison-based sorting algorithm.

**_Task Scheduling:_** Max heaps can be used in job scheduling algorithms, where tasks with higher priority are scheduled first.

**_Graph Algorithms:_** Max heaps are used in algorithms like Prim's algorithm for finding minimum spanning trees.

**_Memory Allocation:_** Max heaps can be used in memory allocation algorithms to allocate memory blocks of varying sizes efficiently.

</details>

<br>

Here's a simple JavaScript implementation of a max heap along with an example of inserting elements into the heap:

```js
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Insert an element in the heap
  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Extract Max: Removes and returns the maximum element from the heap.
  extractMax() {
    if (this.heap.length === 0) {
      return null;
    }

    const max = this.heap[0];
    const last = this.heap.pop();

    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }

    return max;
  }

  // Returns the max element from the heap without removing it
  getMax() {
    if (this.heap.length === 0) {
      return null;
    }

    return this.heap[0];
  }

  // Size: Returns the number of elements in the heap.
  size() {
    return this.heap.length;
  }

  // Is Empty: Checks if the heap is empty.
  isEmpty() {
    return this.heap.length === 0;
  }

  // HeapifyUp operation to maintain the max heap property after inserting a new element.
  heapifyUp() {
    // Start with the last inserted element.
    let currentIndex = this.heap.length - 1;

    // Continue moving up the tree until the heap property is restored.
    while (currentIndex > 0) {
      // Calculate the index of the parent element.
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      // Compare the current element with its parent.
      if (this.heap[currentIndex] > this.heap[parentIndex]) {
        // Swap if the current element is greater than its parent.
        [this.heap[currentIndex], this.heap[parentIndex]] = [
          this.heap[parentIndex],
          this.heap[currentIndex],
        ];

        // Update the current index to the parent index for the next iteration.
        currentIndex = parentIndex;
      } else {
        // If the current element is not greater than its parent, break out of the loop.
        break;
      }
    }
  }

  // HeapifyDown operation to maintain the max heap property after removing the root.
  heapifyDown() {
    // Start with the root element.
    let currentIndex = 0;

    // Continue the process indefinitely.
    while (true) {
      // Calculate the indices of the left and right children.
      const leftChildIndex = 2 * currentIndex + 1;
      const rightChildIndex = 2 * currentIndex + 2;

      // Assume the current index is the largest.
      let largestChildIndex = currentIndex;

      // Check if the left child exists and is greater than the current largest.
      if (
        leftChildIndex < this.heap.length &&
        this.heap[leftChildIndex] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = leftChildIndex;
      }

      // Check if the right child exists and is greater than the current largest.
      if (
        rightChildIndex < this.heap.length &&
        this.heap[rightChildIndex] > this.heap[largestChildIndex]
      ) {
        largestChildIndex = rightChildIndex;
      }

      // If the current index is not the largest, swap with the largest child.
      if (currentIndex !== largestChildIndex) {
        [this.heap[currentIndex], this.heap[largestChildIndex]] = [
          this.heap[largestChildIndex],
          this.heap[currentIndex],
        ];
        currentIndex = largestChildIndex;
      } else {
        // If no swap occurred, the heap property is restored, so break out of the loop.
        break;
      }
    }
  }
}

// Example usage
const maxHeap = new MaxHeap();

maxHeap.insert(5);
maxHeap.insert(10);
maxHeap.insert(7);
maxHeap.insert(1);

console.log(maxHeap.getMax()); // Output: 10
```

[🔼 Back to top](#data-structures)

## Trie

![Trie data structure visualization](/assets/trie.png)
<br>
Image Credit: [Easy Algorithms](https://www.enjoyalgorithms.com/blog/introduction-to-trie-data-structure)

A trie (pronounced "try") is a tree-like data structure that is used to store a dynamic set of strings. It is particularly useful for tasks involving the insertion, deletion, and search operations on strings. Each node in the trie represents a single character of a string. Unlike binary search trees, the nodes in a trie have multiple children, typically equal to the size of the alphabet.

<details>
<summary>Common use cases for tries include:</summary>

- **_Autocomplete, Spell Checking and Auto Correcting:_** Tries are often used to implement features like autocomplete in text editors or search engines. They efficiently store and retrieve words based on partial inputs.

- **_IP Routing Tables:_** Tries are used in computer networking for storing IP addresses in routing tables, facilitating fast and efficient IP address lookups.

- **_Symbol Tables:_** Tries are used in compilers and interpreters to implement symbol tables, where identifiers (variables and functions) are stored and looked up.

- **_Dictionary Implementations:_** Tries are suitable for implementing dictionaries where words can be efficiently inserted, deleted, and searched.

- **_Efficient Prefix Searching:_** Tries excel in tasks that involve searching for words with a common prefix, making them suitable for applications like contact lists on mobile phones.

- **_Predictive Search:_**

</details>

<br>

Here's a basic implementation of a trie in JavaScript:

```js
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;
    for (const char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return node.isEndOfWord;
  }
}

// Example usage
const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // Output: true
console.log(trie.search("app")); // Output: false
console.log(trie.search("apx")); // Output: false
```

In this example, each node in the trie has a children property, which is a dictionary mapping characters to the corresponding child nodes. The isEndOfWord property indicates whether the node represents the end of a word.

The efficient time complexity of trie operations makes them valuable in scenarios where quick string manipulation and lookup are essential.

[🔼 Back to top](#data-structures)
