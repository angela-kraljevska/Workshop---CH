//1. 

//Checking Age for Different Ticket Prices 
//- Child ticket: $5 (below 12 years)
//- "Teen ticket: $7" (below 18 years)
//- "Senior ticket 

//$10 (between 18 and 60)
//- "Adult ticket: $10" (over 60years)

let person = 5

if (person <= 12){
    console.log('The child ticket is $5')
} else if (person <= 18){
    console.log('The teen ticket is 7$')
} else if (person >18 || person <60){
    console.log ('The senior ticket is $10')
}else{
    console.log('The adult ticket is $8')
}

//2. Checking Day of the Week
//- Monday - Start of the work week!
//- Wednesday - Midweek!
//- Friday - Almost weekend!
//- Other day - Just another day.

let day = 'Wednesday'

if (day === 'Monday'){
    console.log('Start of the work week!')
}else if (day === 'Wednesday'){
    console.log('Midweek!')
}else if (day === 'Friday'){
    console.log('Almost weekend!')
}else{
    console.log('Just another day')
}

//3. Determining Weather Advice
//- sunny - Wear sunglasses!
//- rainy - Take an umbrella!
//- snowy - Wear a warm coat!
//- any other - Check the weather forecast for more details.

let weather = 'snowy'

if (weather === 'sunny'){
    console.log('Wear sunglasses!')
}else if(weather === 'rainy'){
    console.log('Take an umbrella!')
}else if (weather === 'snowy'){
    console.log('Wear a warm coat!')
}else {
    console.log('Check the weather forecast for more details.')
}

//4. Simple Login System ( if the credentials match) 
//- username: admin, pass: adminpass - Welcome, admin!- username: user123 , pass: password123 - Welcome,
// user123!
//- missmatch -  Invalid username or password.

let username = 'admin'
let pass = 'adminpass'

if (username === 'admin' && pass === 'adminpass'){
    console.log('Welcome admin!')
}else if (username === 'user123' && pass === 'password123'){
    console.log('Welcome, user123!')
}else{
    console.log('Invalid username or password.')
}

//If else: Needs to be solved with if, else and with ternary operator

//1. Check Age for Voting Eligibility

let age = 17
let daliSmeeDaGlasa = false

daliSmeeDaGlasa = age <=18? 'Cannot Vote':'Can Vote'
console.log(daliSmeeDaGlasa)

if(age>=18){
    console.log('The person can vote')
}else{
    console.log('The person cannot vote')
}

//2. Determining Pass or Fail Based on Score 0-100 ( below 65 is a fail )

let score = 88

let determination = false

determination = score <=65? "Fail":'Pass'
console.log(determination)

if(score <=65){
    console.log('The person failed')
}else{
    console.log('The person passed')
}

