// BDD

// Given a year
// Determine the Century of the year
// Returning the corresponding century

// Psedocode 

// Create a function  named getCentury
// Calculate the century by dividing the year by 100
// Use the Math.ceil() rounding off to the nearest whole digit


// Solution
function getCentury(year) {
    const century = Math.ceil(year/100)

    return century
}

console.log(getCentury(1900));