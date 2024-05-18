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

