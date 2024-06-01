// array of objects (combine and slicing)
let arr = [

    {no:1 , name:'rhythm'},
    {no:2 , name:'rahul'},
    {no:3 , name:'heman'},
    {no:4 , name:'madhur'}

];

let modify = arr.slice(1,3);
console.log(modify); // [ { no: 2, name: 'rahul' }, { no: 3, name: 'heman' } ]

let brr = [

    {no:5 , name:'dhandha'},
    {no:6 , name:'sidhu'}

];

let con = arr.concat(brr);
console.log(con); 
//[
//     { no: 1, name: 'rhythm' },
//     { no: 2, name: 'rahul' },
//     { no: 3, name: 'heman' },
//     { no: 4, name: 'madhur' },
//     { no: 5, name: 'dhandha' },
//     { no: 6, name: 'sidhu' }
//  ] 





// error *********************
// let rectangle = {
//     len:2,
//     bre:3
// };

// let square = {
//     side:6
// }

// let combined = rectangle.concat(square); // gives error (rectangle.concat is not a function)
// console.log(combined);