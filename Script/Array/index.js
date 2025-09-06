let numbers = [1,2,3,4];

numbers.push(7);
console.log(numbers);

numbers.pop(3)
console.log(numbers)

numbers.unshift(8); // add at first index
console.log(numbers)

numbers.shift(); //remove first element
console.log(numbers)

// For each use

let fruit = ["apple", "papaya", "orange"];

fruit.forEach(function(item, index, array){
    console.log(`${item}: ${index}`);
});