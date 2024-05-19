// console.log("munjal");

// js is a light weight programming language and scripting language (client side scriping language)

// we are using it to improve functionnality and behaviour 

// the best practice to add script tag in html file is -> jabb body ka sara code khatam ho jaye tab code ke badd likhna hai script tag 
// bcz jab last m likhege to har chiz pass ho chuki hogi and it will take less time to render (to increase user experience )

// hum (node 1.js) ke dwarea bhi js file ko run kar sakete hai in terminal 


////////////////////// do java v/s javascript



// let v/s var keyword

//let a = 1;
// let a = 3; // not possible (dubara let a = 5 define karna is not possible)
//console.log(a);

// but through var it is possible
//var b = 2;
//var b = 10; // it is possible using var 
//console.log(b);



// if(true){
//     let r =11;
//     console.log(r);
// }

// console.log(r); // error(r is not defined) as let ka scope sirf {} brackets taak hi hota hai


// if(true){
//     var t = 9;
//     console.log(t);
// }

// console.log(t);



// #include<bits/stdc++.h>
// using namespace std;

// int main()
// {
//     {int a = 5;}
    
//     // cout<<b; //  compiler

//     cout<<a; // runtime pr hi bta diya

//     return 0;

// }



// constant

//const num = 12;
//num = 13; // gives error as num is a constant keyword so the value of num variable is fixed 



// Dynamic Typing
// let lastName = 'munjal';
// console.log(lastName);

// lastName = 11;
// console.log(lastName);


// console.log(5>2); // true
// console.log(4!=3); // true

// console.log(5);     
// console.log(!5);  // false *************** 
// console.log(!!5);  // true *************** 

// consle.log(false || true ); //true



// ****** now we will do this with non boolean values 

// console.log(false || 'munjal'); // munjal
// console.log(5||2); // 5

// console.log(false && 3);
// console.log(4 && false);
// console.log(4 && true);
// console.log(4 && 2);
// console.log(5 && 3 && 1);
// console.log(5 && 3 && true); // true (returns the last checked value as it is and operator so will check this till last )
// console.log(5 && 3 && false); // false
// console.log(false && 3 && 1); // false as 1st hi false hai and is && operator so aage check hi nahi karega direct false return karega

// console.log(true && "munjal"); // munjal
// console.log(true && 'rhtyhm' && 4); // 4
// console.log(true && 'rhtyhm' || 4); // rhythm




// switch case
let num = 2;

switch (num) {

    case 1: console.log('A');
        break;
    case 2: console.log('B');
        // break;
    case 3: console.log('C');
        break;

    default: console.log('D');
        
} // prints B C bcz case 2 ke baad break nahi hai 












