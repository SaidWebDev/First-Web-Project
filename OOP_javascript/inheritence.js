//Car constructor

function Car(manufacturer,model, year){
    this.manufacturer=manufacturer;
    this.model=model;
    this.year=year;
}
Car.prototype.getSummary= function(){
return `This is a ${this.manufacturer} ${this.model} made in ${this.year}`;
}

//Suv constructor
function Suv(manufacturer,model, year, offroad){

    Car.call(this,manufacturer,model,year, offroad);
   // this.yearOfRelease= year;
    this.offroad="yes";
}

const toyotaYaris = new Car("Toyota", "yaris", "2015");
console.log(Object.values(toyotaYaris));
console.log(toyotaYaris.getSummary()); 

//Inherit prototype
Suv.prototype=Object.create(Car.prototype);

// Instantiate an suv
const jeepCherocke= new Suv("Jeep", "Cherocke", "2019", false);
console.log(Object.values(jeepCherocke));
console.log(jeepCherocke.getSummary());


