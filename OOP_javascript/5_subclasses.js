class Car {
    constructor(manufacturer,model,year){
        this.manufacturer=manufacturer,
        this.model=model,
        this.year=year;
    }

    getSummary(){
        return `This is a ${this.manufacturer} ${this.model} and it was made in ${this.year}`;
    }
}

class Suv extends Car{
    constructor(manufacturer,model,year,offroad){
        super(manufacturer,model,year);
        this.offroad=offroad;
    }

    getSummary(){
        return `This is a ${this.manufacturer} ${this.model} and it was made in ${this.year}.`;
    }

    isOffroad(){
        return this.offroad === true ? `And guess what? it is offroad broooo!`: ` Sorry bro! but this is not offroad`
    }
}

const jeepCherockee= new Suv("Jeep","Cherockee","2019", true);
console.log(jeepCherockee);
console.log(jeepCherockee.getSummary() +" " + jeepCherockee.isOffroad());
