// function factorial(n) {
//   if (n === 0) return 1;

//   return n * factorial(n - 1);
// }

// // 4 * 3 * 2 * 1

// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(4));
// console.log(factorial(5));

function factorial(n) {
  let fac = 1;

  for (let i = 2; i <= n; i++) {
    fac = fac * i;
  }

  return fac;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(4));
console.log(factorial(5));
