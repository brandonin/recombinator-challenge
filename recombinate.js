// This script will transform and output a two demensional array into a valid JSON object.

// We are going to use node in order to determine that the parameter given is valid.
const throwError = (error) => {
    console.log(error);
    process.exit(1);
}

const isCorrectInput = (input) => {
    if (!Array.isArray(jsonInput)) throwError("Input parameter is not valid. Please use the suggested format.");
    isOfOneType(input);
}

const isArray = (input) => {
    // Do something
}

const isJson = (input) => {
    // Do something
}

// Verify that only one paramater exists.
if (process.argv.length !== 3) throwError("Illegal number of parameters. Should only contain one.");

const jsonInput = JSON.parse(process.argv[2]);
if (!Array.isArray(jsonInput)) throwError("Input parameter is not valid. Please use the suggested format.")

isCorrectInput(jsonInput);

// This will be our array function
let output = jsonInput.map((x, index, array) => {
    return x;
});

// =============== Helper Function ===============
function isOfOneType(input) {
    var isArray = false,
        isObject = false;

    input.forEach((x) => {
        if (isObjectOrArray(x) === '[object Array]') isArray = true;
        else if (isObjectOrArray(x) === '[object Object]') isObject = true;
        else throwError("Input parameter is not valid. There should only be Arrays or Objects in the matrix.");

        if (isArray && isObject) throwError("Input parameter is not valid. There is a mixture of Arrays and Objects.");
    })
}

function isObjectOrArray(obj) {
  return Object.prototype.toString.call(obj);
}
