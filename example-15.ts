// This function returns a function that returns a string
// Add the types:

function sayHello(): () => string {
  return () => "Hello!";
}
// This variable contains a function that returns a string
const hello: () => string = sayHello();
// Calling the function returns the string
console.log(hello()); // Hello!

function mathematizer(n: number): (x: number) => number {
  //   let sum = n; This isn't doing anything.
  return (x: number) => x * n;
}

const m = mathematizer(3);
console.log(m(3)); // 9
console.log(m(2)); // 6
console.log(m(10)); // 30
console.log(m(111)); // 333
