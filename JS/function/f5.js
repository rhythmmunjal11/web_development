// reducing arrays

let a = [4,6,1,2,3];
// let total=0;
// for(let value of a ){
//     total+=value;
// }
// console.log(total);


// another way
let totalSum = a.reduce((accumulator , currenValue) => accumulator + currenValue , 0);
let totalSum1 = a.reduce((accumulator , currenValue) => accumulator + currenValue);
console.log(totalSum); // 16
console.log(totalSum1); // 16 as in totalSum1 mai humne accumulator ki value 0 nahi dali so by defalut the value of accumulator will be 1st value of array and value of currentValue is 2nd elemnt of the array