// try and catch log (error handling)

let person1 = {
    fName: 'rhythm',
    lName: 'munjal',

    get fullName(){
        return `${person1.fName}   ${person1.lName}`;
    },

    set fullName(value){

        if(typeof value !== String) {
            throw new Error("You have not sent a String");
        }

        let parts = value.split(' ');
        this.fName = parts[0];
        this.lName = parts[1];
    }
};


// try mai hum vo likhte hai jisme hume doubt hai ki error aa sakta hai and if error aa gya then vo catch mai gayega error (e) and error(e) throw ho gayega 
try{
    // person1.fullName = true;
    person1.fullName = undefined;
}

catch(e){
    // alert('you have sent a bool value inside fullName');
    alert(e); // naya tarika if in fullName we throw error
}