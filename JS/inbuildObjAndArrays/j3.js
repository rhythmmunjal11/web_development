// let number = [64,3,2,1,5];
// let number = [64,18,10,1,5]; // important
// number.sort();
// console.log(number);

// if i want to sort array of objects
// let obj1 = [

//     {no:11 , name:'billa'},
//     {no:1 , name:'nyoliwala'},
//     {no:3 , name:'sumit'},
//     {no:2 , name:'khasaAala'}

// ];

// console.log(obj1);

// obj1.sort(); // does not work 


// [sort kar diya numbers] ko
// (internally phele array ke elements string mai convert hote hai then sort function apply hota hai , after that it converts into number as it was)

// obj1.sort(function(a,b){
//     if(a.no > b.no) return 1; ////ascending order
//     else if(a.no < b.no) return -1;
//     else return 0;
// });
// console.log(obj1);


// Arrow function
// obj1.sort((a,b) => {
//     if(a.no < b.no) return 1; // decending order
//     else if(a.no > b.no) return -1;
//     else return 0;
// });
// console.log(obj1);




// another method  
// number.sort((a, b) => {
//     return a - b;
// });
// console.log(number);

// const sortedNumber = obj1.sort((a, b) => {
//     return a.no - b.no;
// });
// console.log(sortedNumber);




// now sort for Strings
// const names = ['rhythm' , 'abhi' , 'paraSf' , 'babu'];
// names.sort();
// console.log(names);


let names1 = [
    {no:11 , name:'billa'},
    {no:1 , name:'nyoliwala'},
    {no:100 , name:'rahul'},
    {no:3 , name:'sumit'},
    {no:2 , name:'khasaAala'}
];

names1.sort((a,b) => {

    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;

});
console.log(names1);