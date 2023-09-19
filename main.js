//---------------------------------------------------------------------------------------------------------------------------------------
// A temperature converter 
const kelvin = 293
let celsius = kelvin - 273 

let newton = celsius * (33/100)
newton = Math.floor(newton);

let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)

console.log(`The temperature is ${newton} degrees Newtons`)
//---------------------------------------------------------------------------------------------------------------------------------------
