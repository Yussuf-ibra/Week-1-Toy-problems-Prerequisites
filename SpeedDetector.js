function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPerInterval = 5;

    // Calculate the number of points based on the speed
    let demeritPoints = Math.floor((speed - speedLimit) / pointsPerInterval);

    // Print the result
    if (demeritPoints === 0) {
        alert("Ok");
    } else {
        console.log(`Points: ${demeritPoints}`);

        // Check if the license should be suspended
        if (demeritPoints > 12) {
            alert("License suspended");
        }
    }
}

// Test the function with a speed of 70 km/h
checkSpeed(70);