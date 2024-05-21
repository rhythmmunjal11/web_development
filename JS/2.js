// object create
console.log('object creation');

// let rectangle = {
//     // properties
//     length:1,
//     breadth:2,

//     // behaviour [we will call it method insted of function bcz it is crated inside an object k]

//     // draw: function(){
//     //     console.log('draw fucntion');
//     // }

//     // or 

//     draw(){
//         console.log('ijoi');
//     }
// };


// let rectangle1 = {
//     // properties
//     length:1,
//     breadth:2,

//     // behaviour [we will call it method insted of function bcz it is crated inside an object k]
//     draw: function(){
//         console.log('draw fucntion');
//     }
// };


// if we want to crete multiple objects then we will use object crateion methods 


// [factory function]

// function createRectangle() {

//     return rectangle = {
//         length:1,
//         breadth:2,

//         // draw: function(){
//         //     console.log('drawwwww');
//         // }

//         draw(){
//             console.log('drawwww');
//         }
//     };
// }

//let a = createRectangle(); // in this createRectangle() function will return rectangle object and now this a variable will refer to rectangle object
// console.log(a.breadth);
// console.log(a.draw());
// console.log(a.length);
// console.log(a.draw);



// function createRectangle(len , bre) {

//     return rectangle = {
//         length:len,
//         breadth:bre,

//         draw(){
//             console.log('drawwww');
//         }
//     };
// }

// let rec22 = createRectangle(1,3);
// let rec33 = createRectangle(10,30);

// let rec11 = createRectangle(23,33);
// console.log(rec11.len); // undefined bcz it is pointing to object and in that object the value of len is stored in length variable

// console.log(rec11.length);
// console.log(rec11.breadth);


// ******************

// [Constructor function] -> Pascal Notation (first letter of every word is Capital) e.g -> (NumberOfStudent)

// [Constructor function]-> prop/methods -> define/intialise 
function Rectangle(len , bre) { 
    this.length = len;
    this.breath = bre;
    this.draw = function(){
        console.log('drawing');
    }
}

// object creation using constructor fucntion
let rectangleObj = new Rectangle(2,6); // this new keyword will return an empty object (but we write here new Rectangle , so this will return a newly created Rectangle object)

// add new propery
rectangleObj.color = 'black';
// console.log(rectangleObj);

// remove propery from rectnagleObj
delete rectangleObj.color;
// console.log(rectangleObj);

// ******************************************

// what is constructor of rectangleObj
console.log(rectangleObj.constructor); // fucntion Rectangle [line no 91]

console.log(Rectangle.constructor); // harr ek function ek object hi hota hai , and we know har object ka ek constructor hota hai so the constructor of that object[Rectangle] will be printed




// let Rectangle = new Function(
//     'length','breadth',
//     `this.length = len;
//     this.breath = bre;
//     this.draw = function(){
//         console.log('drawing');
//     }`
// )
// means line no. 91 mai jo Rectangle hai vo internally esse create ho raha hai



// let a = {value:10};

// function inc(a){
//     a.value++;
// }

// inc(a);

// console.log(a.value); // 11 




// for-in loop
let rectangle = {

    lenght:1,
    breadth:2

}

// for(let key in rectangle){
//     console.log(key , rectangle[key]);
// }

// rectangle[key] will print value of the key . key is lenght and breadth


// for-of loop **************** imp

// for(let key of rectangle){
//     console.log(key);        // this will give error that rectangle is not iterable bcz for-of looop only applies on iterables such as arrays , maps but not objects
// }

// but there is hack to apply for-of loop on [objects]
// for(let key of Object.keys(rectangle)){
//     console.log(key);
// }

// so Object.keys(rectangle) will make array of keys
// and if we want to print key value pair then

// for(let key of Object.entries(rectangle)){
//     console.log(key);
// }



// how can we check if a particular property is present in object or not
if('color' in rectangle){
    console.log('present');
}
else{
    console.log('absent');
}




