class Person{
    constructor(name, age){
        this.name=name,
        this.age=age;
    }

    greeting(){
        console.log(`hey there, I am ${this.name} and I am ${this.age} years old`);
    }
}
console.log(__filename);
module.exports = Person;