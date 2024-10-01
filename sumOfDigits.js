function sumOfDigits(number){
    let sum = 0;
    let num = Math.abs(number);
    while(num>0){
        sum += num % 10;
        num = Math.floor(num/10);
    }
    return sum;
}
let number = 12345;
let result = sumOfDigits(number);
console.log(`The sum of the digits of ${number} is ${result}.`);