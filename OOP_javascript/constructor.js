class Car{
    constructor(){
        this.model="Toyota";
        this.year="2000";
    }

    carmodel(){
        console.log(`This is a ${this.model}`);
    }

    set setcarmodel(newmodel){
        this.model=newmodel;
    }
    set setcaryear(year){
        this.year=year;
    }
}

Car.prototype.yearOfRelease = function(){
    console.log(`This car was released in ${this.year}`);
}
const mycar =  new Car();
mycar.carmodel();
console.log(Object.values(mycar));
mycar.yearOfRelease();


const mySecondCar = new Car();
mySecondCar.setcarmodel="Ford";
mySecondCar.carmodel();
mySecondCar.setcaryear = "2017";
console.log(Object.values(mySecondCar));
mySecondCar.yearOfRelease();