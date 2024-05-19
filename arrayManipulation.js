// arrayManipulation.js

/**
 * Function that processes an array of numbers.
 * - Squares even numbers.
 * - Triples odd numbers.
 * 
 * @param {number[]} arr - The array of numbers to be processed.
 * @returns {number[]} - A new array with each even number squared and each odd number tripled.
 */
function processArray(arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * num;  // Square the even number
        } else {
            return num * 3;    // Triple the odd number
        }
    });
}

/**
 * Function that formats an array of strings based on a corresponding array of numbers.
 * - Capitalizes the entire string if the corresponding number is even.
 * - Converts the string to lowercase if the corresponding number is odd.
 * 
 * @param {string[]} strings - The array of strings to be formatted.
 * @param {number[]} numbers - The array of numbers processed by processArray.
 * @returns {string[]} - A new array of formatted strings.
 */
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase();  // Capitalize the entire string if the number is even
        } else {
            return str.toLowerCase();  // Convert the string to lowercase if the number is odd
        }
    });
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5];
const processedNumbers = processArray(inputArray);
console.log(processedNumbers);  // Output: [3, 4, 9, 16, 15]

const stringArray = ["Hello", "World", "JavaScript", "is", "Fun"];
const formattedStrings = formatArrayStrings(stringArray, processedNumbers);
console.log(formattedStrings);  // Output: ["hello", "WORLD", "javascript", "IS", "fun"]

// Export the functions for use in other files (if needed)
module.exports = {
    processArray,
    formatArrayStrings
};
