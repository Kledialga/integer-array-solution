/*

The problem: You have an array with integer or string components, e.g [1, 2, 3, 5] that array represents the integer 1235, you must create a function to add one to the array making sure extra digits are accounted for

*/

// Adds one to the integer array presented
function addOneToIntegerArray(integerArray) {
    
    // Creates a string with the array of integers and parses it as an integer
    let integer = parseInt(integerArray.join(""));

    // Adding one to the integer
    integer++;

    // Converting the integer to a string, then splitting it into an array by each character (digit)
    return intege.toString().split("");
}

// Adds one to the integer array presented
Array.prototype.addOneToIntegerArray = function() {

    // Creates a string with the array of integers and parses it as an integer
    let integer = parseInt(this.join(""));

    // Adding one to the integer
    integer++;

    // Converting the integer to a string, then splitting it into an array by each character (digit)
    return integer.toString().split("");;    
}

// const integerArray = ["1", "2", "3", "5", "6"].addOneToIntegerArray();
// const newIntegerArray = addOneToIntegerArray(integerArray);