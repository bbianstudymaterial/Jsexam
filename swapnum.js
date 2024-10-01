function swap(num1, num2){
   num1 = num1 + num2;
   num2 = num1 - num2;
   num1 = num1 - num2;
   console.log("After swapping");
   console.log(`num1 = ${num1}, num2 = ${num2}`);
}

let num1 = 2;
let num2 = 3;

console.log("Before swapping");
console.log(`num1 = ${num1}, num2 = ${num2}`);
swap(num1, num2);
