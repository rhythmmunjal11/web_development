// defalut parameters 

function interest(p,r=6,t=9){
    return p*r*t/100;
}
console.log(interest(1000,undefined,8)); // prints 480