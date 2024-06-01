// console.log("new");
// let lastName = ' munjal';
// console.log(lastName);
// console.log(typeof lastName); // same as below
// console.log(typeof (lastName)); // this has String Type
// // we can create this primitive type String into object stirng by adding .  [like below e.g]
// console.log(lastName.indexOf('a')); // 5 as space is present
// console.log(lastName.endsWith('j')); // false
// console.log(lastName.includes('n')); // true
// console.log(lastName.toUpperCase()); // ( MUNJAL)
// console.log(lastName.trim()); // trim the extra space in lastName (munjal) 
// console.log(lastName.replace('jal' , 'balaa'));
// console.log(lastName);
// console.log(lastName.length); // 7 (this is wrong lenght()  )


// let message = "This is my First message";
// let words = message.split(' ');
// let words = message.split('');
// let words = message.split('  ');
// let words = message.split('   ');  same as above
// console.log(words);


// // (object String)
// let firstName = new String('rhythm'); // this will create an object String
// console.log(firstName);
// console.log(typeof firstName); // this has type object



// escape sequence

// let mes = "this is            
// third message"; ////////// wrong

// let message = 'this is \n my "second" \n message';
// console.log(message);


// template literal
// let mes1 = `this is ${lastName}'s
// fouth 
// message and with back-tick`;
// console.log(mes1);


// Date and Time
// let date = new Date();
// console.log(date); 

// console.log('bhai ka birthday');
// let date1 = new Date('June 11 2003 11:15');
// console.log(date1);

// date.setDate('11'); // we can also use getter
// console.log(date);





// Arrays ***************************
// let numbers = [1,9,7,4]; 
// numbers.push(5); // insert at end
// console.log(numbers);

// numbers.unshift(10); // inset at begin
// console.log(numbers);

//numbers.splice(2,0,'a','b','c');
//console.log(numbers); // [1,9,'a','b','c',7,4] (if push or unshift phele nahi kiya hota nahi tooo alag answer hota)

// console.log(numbers.length); // 9

// console.log(numbers);


// // Searching
// console.log(numbers.indexOf(4));
// console.log(numbers.indexOf(7));
// console.log(numbers.indexOf(10)); // not present in array so prints -1


// if we want to check a number is present in array or not (but this is bad practice )

// if(numbers.indexOf(9) != -1)
//     console.log('present');

// else console.log('absent');

// good practice
// console.log(numbers.includes(7)); // true

// console.log(numbers.indexOf(9,2)) //-1 (this means we are checking the index of 9 number in array from starting from 2nd index)



// Array of Objects
let courses = [
    {no:1 , name:'rhythm'},
    {no:2 , name:'rahul'}
];
console.log(courses);

//console.log(courses.indexOf( {no:1 , name:'rhythm'} )); // will print -1 because now we are dealing with referece(object) , toooo courses ke ander jo 0th index pr jo object hai uska alag referece hai , or jo mai yha print kar raha hu [console.log(courses.indexOf( {no:1 , name:'rhythm'} ));] iska alag referece hai that's why -1 

//console.log(courses.includes( {no:1 , name:'rhythm'} )); // prints false


// so we can do thiss by callback funtion ********
// let course = courses.find(function(course) { // in this function(course) like courses pura array of objects hai tooo hamne ek objrct ko bolne ke liye course/object naam rakh diya (means hum ek course ke upar condition laga rahe hai jikea name rhythm ho) course ke alawa naam kuch bhi de sakta tha it's just a parameter
//     return course.name === 'rhythm';
// });
//console.log(course); // if find then prints that object
// if not then prints undefined


// Arrow function

// function(course){
//     return course.name==='rhythm'
// } 

// isko haam chota kar sakte hai arrow function ke dwara

// let course1 = courses.find(course => course.name==='rhythm');

// console.log(course1);  // sabse phele function ko hatahuga then arrow lagaunga and then agar input parameter single hai like [course] to hum (course) se bracket bhi hata sake ha like just course [without bracket] 
// and agar iske andar single line of code hai to hum {} ye bracket bhi hata denge or return bhi hata denge

// means we are finding ki ek essa course find out karo jiske andar course ka name==='rhythm' ho aur ye hum courses naaam ki array ke andar kar rahe hai





// mapping araray objects
let numbers = [1,2,-6,-9];
let filtered = numbers.filter(value => value >= 0);
console.log(filtered); // prints [1,2]

// map to objects means convert filtered to object
let items = filtered.map(function (num){
    return  {value : num};
});// 0th index -> {value:1}
// 1th index -> {value:2}
// console.log(items); // array of objects bann gya

//doubt ************************* 
// let items = filtered.map(num =>  {value: num});

// same we can write this in arrow function
// let items1 = filtered.map(num => {value :num });
// console.log(items1);

//console.log(items); // now this filterd will be converted into array of objects


// chaining method
// let itmes =  numbers
//             .filter(value => value >= 0)
//             .map(num => {value: num});

// console.log(itmes);
