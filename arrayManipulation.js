function processArray(numberArray) {
    return numbersArray.map(num=> {
        return num % 2 === 0 ? num * num : num * 3;

    })
}

function formatArrayStrings(stringsArray, numbersArray) {
    if (stringsArray.length !== numbersArray.length) { 
        throw new Error('Arrays must have the same length.');
    }

    return stringsArray.map((strings, i) => {
        return numbersArray[i] % 2 === 0 ? strings.toUpperCase() : strings.toLowercase()
    })
}

//module.exports = { processArray,formatArrayStrings};

// let process 1 = [1,2,3,4,5,6,7,8,9 ]
// let process 2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']

// let u = processArray(process)
// let v = formatArrayStrings(process 2, process 1);
// console.log(v)
// console.log(u)
module.exports = { processArray}