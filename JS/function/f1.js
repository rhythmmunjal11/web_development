// function


// run();  // ************ important (this will run ) 
// as in js (js engine iss particular file ke saree function ko alag karke iss file ke top pr bhej dete hai and then it will execute the code from top to down ) this process is known as (hoisting) 
// Hoisting -> is process of moving (function declaration) to the top of file and this is automatically in js 

// function declaration
// function run(){
//     console.log('runnuing');
// }

// function call / invoke
// run();



//stand(); // nahi chalega bcz hoisting sirf function declaration ko karta hai upar shift function assignment ko nahi karta

// named function assignment
// let stand = function walk(){
//     console.log('walking');
// };
// now i will call this function by stand() , but if i do this walk() then gives error 
// stand(); // correct 
// walk(); error  walk is undefinned

// let another = stand;
// another(); // important


// Anonynmous function assignment
// let stand2 = function(){
//     console.log('wallllkiiiing');
// };
// stand2();




// let x = 1;
// x = 'a';
// console.log(x); // dynamic


// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// };
// console.log(sum(1,2)); // prints 3
// console.log(sum(1)); // NaN
// console.log(sum()); // NaN
// console.log(sum(1,2,4,5)); // 3

//console.log(sum(3,4)); // 7 (arguments will print the mapping of these 3,4 and this is not an array , this is an object and in which mapping is done of 3 and 4 ) '0' : 3 in this 0 is key and 3 is value (basically iss object ke ander hamare pass key value pairs hai)


// ************************ key value pair of argumetsn
// [Arguments] { '0': 2, '1': 1, '2': 5, '3': 4, '4': 3 }



// imprtant
function sum1(){ // chaiyeee sum1(a,b) likho ya mat likho
    let total = 0;
    for (let value of arguments) //(special object -> arguments)
        total+= value;
    return total;
}

console.log(sum1(2,1,5,4,3)); // prints 3 if there was simple function written without help of arguments but in this it will print 15
// // but if i want to print all of these parametes then i will take help of argumetns 
// console.log(sum1()); // 0 




// Rest parameter (...) **********

// function sum(...args){
//     console.log(args); // jo bhi function mai input denge vo sara ka sara array mai store ho jayega bcz of rest ... operator
// }
// sum(1,2,3,4,5);

// if it was
function sum(num , ...args){
    console.log(args); // it will print [ 2, 3, 4 ] as 1 will be store in num variabvle and baaki rest ke args mai store ho jaynge
}
sum(1,2,3,4);

// if we do function sum(num , ...args , num2) then it will give error as ... is rest operator aur hum iske baad nahi laga sakte koi bhi variable

