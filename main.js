/* The following program contains source code for Kargo's Summer 2021
SWE Intern Assessment.
The program takes a command line input of integers and stores them into an array,
converts them into their phonetic equivalent and prints the result in standard output
*/


// Stores phonetic equivalents of integers in object for easy and fast lookup
let values = {0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 
5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten"};

// Reads arguments passed into command line and stores the integers to be converted in an array
let args = process.argv.slice(2);

// This variable will be updated to store the phonetic equivalents during execution
let phonetic = "";

intToPhonetic(args);


function intToPhonetic(numInput) {
    for (let i = 0; i < numInput.length; i++) {
        if (numInput[i].length == 1 && numInput[i] in values) {
            phonetic += values[numInput[i]];
        }
        else if (numInput[i].length > 1) {
            let largeNumber = numInput[i].split("");
            for (let j = 0; j < largeNumber.length; j++) {
                if (largeNumber[j] in values)
                    phonetic += values[largeNumber[j]];
            }
        }

        if (i < numInput.length - 1) {
            phonetic += ",";
        }
    }
}

console.log(phonetic);