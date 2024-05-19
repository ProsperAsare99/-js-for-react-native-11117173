Assignment 1 DCIT202 (11117173)

This project includes JavaScript files for performing array manipulation and user profile creation.

# Files

arrayManipulation.js`: Contains functions for processing arrays of numbers and formatting strings based on the processed numbers.
  userInfo.js`: Contains a function for creating user profiles using original and modified names.

FUNCTIONS

arrayManipulation.js
processArray(arr)

    Takes an array of numbers and returns a new array where even numbers are squared and odd numbers are tripled.

formatArrayStrings(strings, numbers)

    Takes two arrays: an array of strings and an array of processed numbers.
    Returns a new array of strings where each string is modified based on the corresponding number.

userInfo.js
createUserProfiles(names, modifiedNames)

    Takes two arrays: an array of original names and an array of modified names.
    Returns an array of objects, each containing originalName, modifiedName, and an auto-incremented ID starting from 1.

    EXAMPLE:
    const originalNames = ["Asare", "Prince", "Cassie"];
const modifiedNames = ["ASARE", "PRINCE", "CASSIE"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);

    
