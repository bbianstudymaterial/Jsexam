function reverseString(str){
    let strrev = str.split('').reverse().join('');
    return strrev;
}

function checkPalindrome(str1, str2){
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if(str1 == str2){
        return true;
    }
    return false;
}

let str1 = prompt("Enter a string");
let str2 = reverseString(str1);

if(checkPalindrome(str1, str2)){
    console.log("It is a palindrome")
}
else{
    console.log("It is not a palindrome");
}