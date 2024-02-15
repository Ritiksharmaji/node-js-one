const add = require('./calculater')
//const substract = require('./calculater2')
const substract = require('./calculater2_duplicate')

// destructure the method of calculater2_duplicate.
const {sub, mul, dev, modulus} = substract

console.log(add(3, 8))
console.log(sub(12, 2))
console.log(mul(12, 2))
console.log(dev(12, 2))
console.log(modulus(12, 2))
console.log(substract.dev(12, 2))
