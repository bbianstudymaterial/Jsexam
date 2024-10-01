function sum() {
  let n = prompt("Enter the size of array?");
  let arr = [];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    arr[i] = prompt(`Enter the ${i+1}th number: `);
    sum = parseInt(sum) + parseInt(arr[i]);
  }
  return sum;
}
let a = sum();
alert(`The sum is ${a}`);
