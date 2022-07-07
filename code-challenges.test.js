// ASSESSMENT 3: Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

describe("greaterThanTwo", () => {
    it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
        expect(greaterThanTwo(6)).toEqual([1, 1, 2, 3, 5, 8])
    })
})

//     ReferenceError: greaterThanTwo is not defined

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]


// b) Create the function that makes the test pass.

// Pseudocode:
// 1. Create a function called greaterThanTwo
// 2. Create a parameter called input. This input will be take in a number value
// 3. Create an output array with index[0] and index[1] already defined. This output array is what we will use to return
// 4. Create a for loop
    // 4a. Create a new variable called 'i' that starts at 2 (& it starts at 2 because we have already defined index position 0 and 1 in the output array)
    // 4b. Set the loop to stop once it has reached the input number
    // 4c. Increment the variable i each iteration
// 5. We are going to set the output index to 'i'
    // 5a. Then we use math logic of adding the previous index and the second previous index together and save it the output index we are currently at
// 6. Once the loop has reached the end, return the output array

const greaterThanTwo = (input) => {
    const output = [1, 1]
    
    for(let i=2; i<input; i++) {
        output[i] = output[i-2] + output[i-1]
        }
    return output
}

console.log(greaterThanTwo(fibLength1)) // Output: [ 1, 1, 2, 3, 5, 8 ]
console.log(greaterThanTwo(fibLength2)) // Output: [ 1,  1,  2,  3,  5, 8, 13, 21, 34, 55 ]

//     ✓ takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence. (1 ms)
  

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOddNumbers", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
        const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]

        expect(onlyOddNumbers(fullArr1)).toEqual([-9, 7, 9, 199])
        expect(onlyOddNumbers(fullArr2)).toEqual([-823, 7, 23])
    })
})

//     ReferenceError: onlyOddNumbers is not defined


const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.

// Pseudocode:
// 1. Create a function called onlyOddNumbers
// 2. The parameter will be called array, because it is taking an array input
// 3. Create a return statement using the .filter hiher order function
//      3a. Use the value declaration to start creating logic within the filter method
//      3b. We will check if the value is an odd number using modulo to strictly equal 1
//      3c. Then we will want to use the && operator to make sure the value is a number using typeof
//      3d. Lastly, we will do the same, but for negative odd number values using the || (OR) statement
// 4. Now that we are able to create the array of values of only negative numbers, we will want to sort the array
//      4a. We will create a new variable called lowestToHighest and plug the array into it and use the .sort method
// 5. The return function from step 3 will return the array with only odd numbers and in order

const onlyOddNumbers = (array) => {
    let lowestToHighest = array.sort((a,b) => a - b)
    
    return lowestToHighest.filter(value => (value % 2 === 1 && typeof value === "number") || value % 2 === -1 && typeof value === "number")
}

console.log(onlyOddNumbers(fullArr1)) // Output: [ -9, 7, 9, 199 ]
console.log(onlyOddNumbers(fullArr2)) // Output: [ -823, 7, 23 ]

//     ✓ takes in an array and returns a new array of only odd numbers sorted from least to greatest. (1 ms)


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.


// a) Create a test with expect statements for each of the variables provided.

describe("accumulatingSum", () => {
    it("takes in an array and returns a new array of only odd numbers sorted from least to greatest.", () => {
        const numbersToAdd1 = [2, 4, 45, 9]
        const numbersToAdd2 = [0, 7, -8, 12]
        const numbersToAdd3 = []

        expect(accumulatingSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
        expect(accumulatingSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
        expect(accumulatingSum(numbersToAdd3)).toEqual([])
    })
})

//     ReferenceError: accumulatingSum is not defined

const numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

const numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

const numbersToAdd3 = []
// Expected output: []


// b) Create the function that makes the test pass.

// Psuedocode:
// 1. Create a function called accumulatingSum
// 2. The function takes a parameter called array
// 3. Create a variable called sum and set it to zero. This will be used to keep track of the accumulating total for each index.
// 4. Create an array called result and this will be used as the return value
// 5. Create a for loop to iterate through each index in the input array from the parameter
    // 5a. Set the result index of i to equal to the sum and the array of the current index
    // 5b. Set the sum to equal the result of the current i
// 6. Exit the for loop and return the result that contains the array

const accumulatingSum = (array) => {
    let sum = 0
    let result = []

    for(let i=0; i<array.length; i++) {
        result[i] = sum + array[i]
        sum = result[i]
    }
    return result
}

// Did not work
// const accumulatingSum = (array) => {
//     let sum = 0
//     let newSum = array.reduce(function (previousValue, currentValue) {
//         return previousValue + currentValue;
// })
// console.log(newSum)

// }


console.log(accumulatingSum(numbersToAdd1)) // Output: [ 2, 6, 51, 60 ]
console.log(accumulatingSum(numbersToAdd2)) // Output: [ 0, 7, -1, 11 ]
console.log(accumulatingSum(numbersToAdd3)) // Output: [ ]