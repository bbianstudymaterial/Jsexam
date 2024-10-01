const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth()+1;
const day = currentDate.getDate();
const hour = currentDate.getHours();
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();

console.log(`Current Date: ${year}-${month}-${day}`);
console.log(`Current time: ${hour}:${min}:${sec}`);