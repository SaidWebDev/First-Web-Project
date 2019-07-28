//Car class declaration

/* class Car{
    constructor(){
        this.manufcaturer="Toyota";
        this.model="Yaris";
        this.year="2000";
    }

    carmodel(){
        console.log(`This is a ${this.manufcaturer} ${this.model}`);
    }

    set setcarmodel(newmodel){
        this.model=newmodel;
    }
    set setcarmanufacturer(newmanufacturer){
        this.model=newmanufacturer;
    }
    set setcaryear(year){
        this.year=year;
    }
}

Car.prototype.yearOfRelease = function(){
    console.log(`This car was released in ${this.year}`);
}

Car.prototype.yearOfRelease = function(){
    console.log(`This car was released in ${this.year}`);
}
 */
//SUV constructor

function Car(manufacturer,model, year){
    this.manufacturer=manufacturer;
    this.model=model;
    this.year=year;
}

function suv(manufacturer,model, year, offroad){

    Car.call(this,manufacturer,model,year, offroad);
   // this.yearOfRelease= year;
    this.offroad="yes";

}

const JeepCherocke= new suv("Jeep", "Cherocke", "2019", false);

console.log(Object.values(JeepCherocke));



