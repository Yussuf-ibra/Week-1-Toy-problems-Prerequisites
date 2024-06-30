function checkSpeed(speed) {
    const speedLimit = 70;
    const pointsPerInterval = 5;

    // Calculate the number of points based on the speed
    let demeritPoints = Math.floor((speed - speedLimit) / pointsPerInterval);

    // Print the result
    if (demeritPoints === 0) {
        console.log("Ok");
    } else {
        console.log(`Points: ${demeritPoints}`);

        // Check if the license should be suspended
        if (demeritPoints > 12) {
            console.log("License suspended");
        }
    }
}

// Test the function with a speed of 50 km/s
checkSpeed(50);