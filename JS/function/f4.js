// {
//     let a = 5;
// }
// console.log(a); // a is not defined (error as scope of a is {} in between this curly bracket)

// {
//     var b = 4;
// }
// console.log(b);
// if till this line is the code then it will throw error that a is not defined


// but if i comment this upper {var} code then it prints

// means var ke ander hum koi bhi variavle ko define karege tooo vo variable jis bhi [function/file] ke ander define hai utna hi uska scope raheta hai 
// undefined
// 4
// {
//     var a = 4;
// }
// console.log(a);


// but if in funciton
// function walk(){
//     var a1 = 11;
// }
// console.log(a1); /// a1 is not defined as var ka scope sirf function/file  tak hota hai (as it is function toooo function takk hi hoga)

// let b ;
// console.log(b); // undefined


// if(true){
//     var r = 11;
// }
// console.log(r); // prints 11

// if(true){
//     let h = 11;
// }
// console.log(h); // h is not defined


// for(var i = 0 ; i < 4 ; i++){
//     console.log(i);
// }
// console.log(i); 

// we can't do this with let keyword



// var m = 3;
// function xyz(){
//     var m = 11;
// }
// console.log(m); // pritns 3


// function a(){
//     const ab = 11;
// }
// const ab = 3;
// function b(){              /// this code gives no error
//     const ab = 90;
// }
