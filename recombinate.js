// This script will transform and output a two demensional array into a valid JSON object.

// We are going to use node in order to determine that the parameter given is valid.
const throwError = (error) => {
    console.log(error);
    process.exit(1);
}

// Guard Clause
const isCorrectInput = (input) => {
    if (process.argv.length !== 3) throwError("Illegal number of parameters. Should only contain one.");
    if (!Array.isArray(jsonInput)) throwError("Input parameter is not valid. Please use the suggested format.");
    isOfOneType(input);
}

const enumArray = (matrix) => {
    // Do Something
}

const enumObject = (matrix) => {
    let output = {};
    matrix.forEach((value, index, array) => {
        Object.keys(value).forEach((key) => {
            if (!output[key]) output[key] = Array.apply(null, Array(array.length)).map(() => null);
        })

        Object.keys(value).forEach((key) => {
            output[key][index] = (value[key]);
        })
    });
    return output;
}

const jsonInput = JSON.parse(process.argv[2]);

// Verify that the parameter is the correct format.
isCorrectInput(jsonInput);

if (isTypeArray(jsonInput[0])) console.log(JSON.stringify(enumArray(jsonInput)));
if (isTypeObject(jsonInput[0])) console.log(JSON.stringify(enumObject(jsonInput)));



// =============== Helper Function ===============
function isOfOneType(matrix) {
    var isArray = false,
        isObject = false;

    matrix.forEach((input) => {
        if (isTypeArray(input)) isArray = true;
        else if (isTypeObject(input)) isObject = true;
        else throwError("Input parameter is not valid. There should only be Arrays or Objects in the matrix.");

        if (isArray && isObject) throwError("Input parameter is not valid. There is a mixture of Arrays and Objects.");
    })
}

function isObjectOrArray(obj) {
  return Object.prototype.toString.call(obj);
}

function isTypeArray(input) {
    return isObjectOrArray(input) === '[object Array]';
}

function isTypeObject(input) {
    return isObjectOrArray(input) === '[object Object]';
}
