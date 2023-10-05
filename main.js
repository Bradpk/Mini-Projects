//---------------------------------------------------------------------------------------------------------------------------------------
// A Temperature Converter 

const fahrenheitText = document.getElementById('fahrenheit')
const newtonText = document.getElementById('newton')
const dogText = document.getElementById('dogYears')
const questionText = document.getElementById('question')
const askEightBall = document.getElementById('askEightBall')
const eightBallAnswer = document.getElementById('eightBallAnswer')



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
// Your Age In Dog Years

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
// Magic Eight Ball

let userQuestion = 'Will the world explode soon?'
questionText.innerHTML = userQuestion

askEightBall.addEventListener('click', function(){
let randomNumber = Math.floor(Math.random() * 8);
let eightball = ''

switch (randomNumber){
  case 0:
  eightball = 'It is certain'
  break;
  case 1:
 eightball = 'It is decidedly so'
  break;
  case 2:
eightball =  'Reply hazy try again'
  break;
 case 3:
eightball = 'Cannot predict now'
  break;
 case 4:
eightball = 'Do not count on it'
  break;
   case 5:
eightball = 'My sources say no'
  break;
   case 6:
eightball = 'Outlook not so good'
  break;
   case 7:
eightball = 'Signs point to yes'
  break;
}

eightBallAnswer.innerHTML = eightball
})
//---------------------------------------------------------------------------------------------------------------------------------------
// 