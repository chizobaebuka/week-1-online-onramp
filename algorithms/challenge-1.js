// # Challenge 1

// Implement the function noOfElements(x, y, z) which returns the number of elements in that array x, that are greater than or equal to the variable y and less than or equal to the variable z

function noOfElements(x, y, z) {
    let count = 0;
    x.forEach((item) => {
        if (item >= y && item <= z){
            count ++;
        }
    })
    return count;
}

module.exports = noOfElements
