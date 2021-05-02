/* The following program contains source code for Kargo's Summer 2021
SWE Intern Assessment.
The program takes a command line input of integers and stores them into an array,
converts them into their phonetic equivalent and prints the result in standard output
*/


// Stores phonetic equivalents of integers in object for easy and fast lookup
let values = {0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 
5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten"};


// Reads arguments passed into command-line and stores input in array
let args = process.argv.slice(2);
let phonetic = "";


// If input is not empty, execute main function
if (args.length > 0) {
    intToPhonetic(args);
}
else {
    console.log("No input has been provided!");
    return;
}


// Function that converts digits to phonetic equivalents
function intToPhonetic(numInput) {
    for (let i = 0; i < numInput.length; i++) {
        // If input is not a number, ignore it
        if (isNaN(numInput[i]))
            continue;
        if (numInput[i].length == 1 && numInput[i] in values) {
            phonetic += values[numInput[i]];
        }
        else if (numInput[i].length > 1) {
            convertLargeNum(numInput[i])
        }

        if (i < numInput.length - 1) {
            phonetic += ",";
        }
    }
}


// Helper function called to convert multi-digit numbers
function convertLargeNum(num) {
    let largeNumber = num.split("");
    for (let j = 0; j < largeNumber.length; j++) {
        if (largeNumber[j] in values) {
            phonetic += values[largeNumber[j]];
        }
    }
}

console.log(phonetic);