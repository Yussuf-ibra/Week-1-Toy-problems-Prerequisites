let speed = parseInt (prompt("Enter the speed of the vehicle")) //user enters the speed of the vehicle//
if (speed <= 70) {
    console.log ("Ok"); alert("Ok")
    //if speed is less than or equal to speed limit, display ok//
}else {
    let result = (speed-70)/5 //for every 5 km/s above the speed limit, the driver is assigned a demerit point//
    if (result <=12) {     
console.log(`Points: ${result}`) ;alert (`Points: ${result}`)
    }else {
        console.log (`Points : ${result}`) //if points are more than 12,program informs the user that license is suspended//
        console.log( `License suspended`) ;alert ( `Points: ${result}
         License suspended`)
        
    }
    
  
}