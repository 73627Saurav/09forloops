/* for (let i = 0; i < 5; i++) {
  console.log(i)
} */ 
// 0 to (n-1) will print

// Program to add first n natural numbers
/* let sum = 0
let n = prompt("Enter the value of n")
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += (i + 1)
  // console.log((i+1), "+")
}
console.log("Sum of first " + n + " natural numbers is " + sum)
console.log(i) */ 
// i is not defined

let obj = {
  harry: 90,
  shubh: 45,
  shivika: 56,
  ritika: 57,
  shiv: 23
}

// For in loop
for (let a in obj) {
  console.log("Marks of " + a + " are " + obj[a])
}
// 'a' will print keys & 'obj[a]' will print values
/* 
Marks of harry are 90
Marks of shubh are 45
Marks of shivika are 56
Marks of ritika are 57
Marks of shiv are 23 */

// For of loop // can be used in string or array
// object must have to be iterable
for (let b of "Harry") {
  console.log(b)
}
/* 
H
a
r
r
y */