let personalInformation = {
     firstname: `Alessandro`,
     lastname: `Cavali`,
     age:`30`,
     country: `Italia`
}

const {firstname:fn, lastname:ln } = personalInformation;

console.log(fn, ln );
console.log(`the full name is : ${fn}    ${ln}`)

//The functions addressMaker1 and addressmaker2 are equivalent

function addressMaker1(address) {
     const newAddress ={
          city: address.city,
          state: address.state,
          country: 'France'
     };
     console.log(newAddress);
}

addressMaker1({city:'Paris', state: 'Ile de France'});

function addressmaker2(address){

     const {city,state}= address;

     const newAddress ={
          city,
          state,
          country:'France'
     }
     console.log(newAddress);
}

addressmaker2({city:'Nice', state:`Alpes Maritimes`});