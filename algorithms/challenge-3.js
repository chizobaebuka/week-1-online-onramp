// # Challenge 3

// Implement the function isDivisbleByN(arr, n) which extracts all the values in the input array arr that are divisible by n into another array and returns the new array.

// ## Examples

// isDivisbleByN([1,3,5,6,3,6,7,4], 2) to return [6, 6, 4]  
// isDivisbleByN([21,3,5,6,3,6,7,4], 7) to return [21, 7]

function isDivisbleByN(arr, n) {
    let newArr = [];
    
    arr.forEach((item) => {
        if (item % n === 0 && item !== 0){
            newArr.push(item);
        }
    });
    return newArr;
}

module.exports = isDivisbleByN
