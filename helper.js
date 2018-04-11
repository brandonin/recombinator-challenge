// module "helper.js"

// Guard Clauses
const inputIsCorrectFormat = (input) => {
    if (input.length === 0) throwError("Input parameter is not valid. Array is Empty.");
    if (!Array.isArray(input)) throwError("Input parameter is not valid. Please use the suggested format.");
    isOfOneType(input);
}

// I kept these two functions seperate so it would be easier to debug.
const enumArray = (matrix) => {
    let output = {};
    // Created a map in order to have a reference of the key in output.
    let map = {};

    matrix.forEach((value, index, array) => {
        value.forEach((value, idx) => {
            if (index === 0) {
                output[value] = [];
                map[idx] = value;
            } else {
                output[map[idx]].push(value);
            }
        })
    });
    return output;
}

const enumObject = (matrix) => {
    let output = {};
    matrix.forEach((value, index, array) => {
        Object.keys(value).forEach((key) => {
            // Creates an array with an initial length with null as values.
            if (!output[key]) output[key] = Array.apply(null, Array(array.length)).map(() => null);
        })

        Object.keys(value).forEach((key) => {
            output[key][index] = (value[key]);
        })
    });
    return output;
}

const isTypeArray = (input) => {
    return isObjectOrArray(input) === '[object Array]';
}

const isTypeObject = (input) => {
    return isObjectOrArray(input) === '[object Object]';
}

module.exports = {inputIsCorrectFormat, enumArray, enumObject, isTypeArray, isTypeObject};

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

function throwError(error) {
    console.log(error);
    process.exit(1);
}
