function Person(firstname,lastname){
    this.firstname = firstname;
    this.lastname= lastname;
    this.greeting= function(){
        console.log(`my name is ${this.firstname} ${this.lastname}`);
    }
}

class Car {
    constructor(model){
        this.model="Toyota";
    }
    

    carmodel= function(){
        console.log(`This is a ${this.model}`);
    }

    set setmodel(newmodel){
        this.model=newmodel;
    }
        
}
const bro = new Person("Cyril", "Amir");
bro.greeting();

const myCar = new Car();
myCar.carmodel();
myCar.setmodel="Ford";
console.log(Object.values(myCar));
