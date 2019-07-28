function Car(manufacturer,model, year){
    this.manufacturer=manufacturer;
    this.model=model;
    this.year=year;
}
Car.prototype.getSummary= function(){
return `This is a ${this.manufacturer} ${this.model} made in ${this.year}`;
}
