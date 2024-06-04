// defalut parameters 

// function interest(p,r=6,t=9){
//     return p*r*t/100;
// }
// console.log(interest(1000,undefined,8)); // prints 480
// console.log(interest(1000,NaN,8)); // prints NaN


// let person = {
//     fName: 'rhythm',
//     lName: 'munjal'
// };

// function fullName(){
//     return `${person.fName}    ${person.lName}`; // correct way

//     // return `${person.fName}+${person.lName}`; //rhythm+munjal
//     // return person.fName + person.lName; //rhythmmunjal
//     // return person.fName + ' ' + person.lName;//rhythm munjal
// }

// console.log(fullName());


// *************************
// getter setter

// getter -> access properties
// setter -> change or mutate properties
let person1 = {
    fName: 'rhythm',
    lName: 'munjal',

    get fullName(){
        return `${person1.fName}   ${person1.lName}`;
    },

    set fullName(value){
        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};

console.log(person1.fullName); // getter
//console.log(person1.fullName()); // gives error as fullName is not a function bcz person1 object ke ander kahi           function fullName(){} nahi lika hua

//person1.fullName('Rahul Verma'); // gives error as fullName is not a functino // *************** important
person1.fullName = 'Rahul Verma'; // setter
console.log(person1.fullName);

// we can't do in setter like that
// person1.fullName('rahul verma) as fullName is not a function

