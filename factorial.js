function factorial(num){
    let fact = 1;
    for(let i = num; i > 0; i--){
        fact *= i;
    }
    return fact;
}

let num = 5;
console.log(`The factorial of ${num} is ${factorial(num)}`);