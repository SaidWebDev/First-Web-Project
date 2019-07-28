// Create car protos

const carProtos={

    getSummary : function(){
        return `This is a ${this.manufacturer} ${this.model} made in ${this.year}`;
    },

    getAge : function(){
        const years= new Date().getFullYear()- this.year;
        return `This car is ${years} years old !`
    }
};

const jeepcherocke = Object.create(carProtos, {
    manufacturer: {value:'Jeep'},
    model: {value:'Cherocke'},
    year:{value:'2018'}
}
    );

console.log(jeepcherocke);