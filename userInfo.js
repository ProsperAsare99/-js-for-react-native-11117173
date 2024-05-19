// userInfo.js

/**
 * Function that creates user profiles.
 * - Takes an array of names and an array of modified names.
 * - Returns an array of objects, each containing originalName, modifiedName, and id.
 * 
 * @param {string[]} names - The array of original names.
 * @param {string[]} modifiedNames - The array of modified names.
 * @returns {Object[]} - An array of objects each containing originalName, modifiedName, and id.
 */
function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => ({
        id: index + 1,  // Auto-incremented ID starting from 1
        originalName: name,
        modifiedName: modifiedNames[index]
    }));
}

// Example usage:
const originalNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = ["ALICE", "bob", "CHARLIE", "david", "EVE"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/* Output:
[
    { id: 1, originalName: "Alice", modifiedName: "ALICE" },
    { id: 2, originalName: "Bob", modifiedName: "bob" },
    { id: 3, originalName: "Charlie", modifiedName: "CHARLIE" },
    { id: 4, originalName: "David", modifiedName: "david" },
    { id: 5, originalName: "Eve", modifiedName: "EVE" }
]
*/

// Export the function for use in other files (if needed)
module.exports = createUserProfiles;
