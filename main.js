//---------------------------------------------------------------------------------------------------------------------------------------
// A temperature converter 

const fahrenheitText = document.getElementById('fahrenheit')
const newtonText = document.getElementById('newton')
const dogText = document.getElementById('dogYears')

const kelvin = 293
let celsius = kelvin - 273 

let newton = celsius * (33/100)
newton = Math.floor(newton);

let fahrenheit = celsius * (9/5) + 32
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`)
fahrenheitText.innerHTML = `The temperature is ${fahrenheit} degrees Fahrenheit`

console.log(`The temperature is ${newton} degrees Newtons`)
newtonText.innerHTML = `The temperature is ${newton} degrees Newtons`
//---------------------------------------------------------------------------------------------------------------------------------------
// Your age in dog Years

let myAge = 30
let earlyYears = 2 
earlyYears *= 10.5
let laterYears = myAge - 2
laterYears *= 4
let myAgeInDogYears = earlyYears + laterYears
let myName = 'Brad'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
dogText.innerHTML = `My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`

//---------------------------------------------------------------------------------------------------------------------------------------