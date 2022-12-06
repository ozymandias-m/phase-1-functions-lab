function distanceFromHqInBlocks(someValue){
    if (someValue >= 42){
    return (someValue - 42)
}   else{
    return 42 - someValue
}
}
//console.log(distanceFromHqInBlocks(34))

function distanceFromHqInFeet(someValue){
    if (someValue >= 42){
        return (someValue - 42)* 264
    }
    else{
        return (42 - someValue)* 264
    }
} //console.log(someValue(50))

function distanceTravelledInFeet(someValue1,someValue2){
    if (someValue1 <= someValue2){
        return (someValue2 - someValue1)* 264
    }
    else{
        return (someValue1 - someValue2)* 264
    }
}//console.log(distanceTravelledInFeet(34,38))

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start) * 264;
    if (distance <= 400){
        console.log('gives customers a free sample')
        return 0
    }
    else if( distance > 400 && distance <= 2000)
    {
        return (distance - 400) * 0.02
    }
    else if( distance >=2001 && distance <= 2500 )
    {
        return 25
    }
    else{ 
        return 'cannot travel that far'
    }
  }console.log(calculatesFarePrice(34,32))