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
const originalNames = ["Asare", "Prince", "Cassie", "James", "Shaibu"];
const modifiedNames = ["ASARE", "PRINCE", "CASSIE", "JAMES", "SHAIBU"];

const userProfiles = createUserProfiles(originalNames, modifiedNames);
console.log(userProfiles);
/* Output:
[
    { id: 1, originalName: "Asare", modifiedName: "ASARE" },
    { id: 2, originalName: "Prince", modifiedName: "PRINCE" },
    { id: 3, originalName: "Cassie", modifiedName: "CASSIE" },
    { id: 4, originalName: "James", modifiedName: "JAMES" },
    { id: 5, originalName: "Shaibu", modifiedName: "SHAIBU" }
]
*/

// Export the function for use in other files (if needed)
module.exports = createUserProfiles;
