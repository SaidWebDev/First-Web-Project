let personalInformation = {
     firstname: `Alessandro`,
     lastname: `Cavali`,
     age:`30`,
     country: `Italia`
}

const {firstname:fn, lastname:ln } = personalInformation;

console.log(fn, ln );
console.log(`the full name is : ${fn}    ${ln}`)