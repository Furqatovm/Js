// // JavaScript Array Methods Tutorial

// // 1. push() - Add elements to the end of the array
// let fruits = ["apple", "banana"];
// fruits.push("orange");
// console.log(fruits); // ["apple", "banana", "orange"]

// // 2. pop() - Remove the last element of the array
// fruits.pop();
// console.log(fruits); // ["apple", "banana"]

// // 3. unshift() - Add elements to the beginning of the array
// fruits.unshift("mango");
// console.log(fruits); // ["mango", "apple", "banana"]

// // 4. shift() - Remove the first element of the array
// fruits.shift();
// console.log(fruits); // ["apple", "banana"]

// // 5. concat() - Combine two or more arrays
// let veggies = ["carrot", "tomato"];
// let food = fruits.concat(veggies);
// console.log(food); // ["apple", "banana", "carrot", "tomato"]

// // 6. slice() - Extract part of the array (does not change original array)
// let sliced = food.slice(1, 3); // start at index 1, end before index 3
// console.log(sliced); // ["banana", "carrot"]
// console.log(food);   // ["apple", "banana", "carrot", "tomato"]



// // 8. indexOf() - Find the first index of an element
// console.log(food.indexOf("pear")); // 2
// console.log(food.indexOf("banana")); // -1 (not found)

// // 9. includes() - Check if the array contains an element
// console.log(food.includes("grape")); // true
// console.log(food.includes("banana")); // false

// // 10. forEach() - Execute a function for each array element
// food.forEach((item) => console.log(item)); 
// // apple
// // grape
// // pear
// // tomato

// // 11. map() - Create a new array by transforming each element
// let upperCaseFood = food.map(item => item.toUpperCase());
// console.log(upperCaseFood); // ["APPLE", "GRAPE", "PEAR", "TOMATO"]

// // 12. filter() - Create a new array with elements that pass a condition
// let shortWords = food.filter(item => item.length <= 5);
// console.log(shortWords); // ["apple", "grape", "pear"]

// // 13. find() - Return the first element that matches a condition
// let foundItem = food.find(item => item.startsWith("p"));
// console.log(foundItem); // "pear"

// // 14. findIndex() - Return the index of the first element that matches a condition
// let foundIndex = food.findIndex(item => item.startsWith("p"));
// console.log(foundIndex); // 2

// // 15. reduce() - Reduce the array to a single value
// let numbers = [1, 2, 3, 4];
// let sum = numbers.reduce((total, num) => total + num, 0);
// console.log(sum); // 10

// // 16. some() - Check if at least one element passes a condition
// console.log(numbers.some(num => num > 3)); // true

// // 17. every() - Check if all elements pass a condition
// console.log(numbers.every(num => num > 0)); // true

// // 18. sort() - Sort the elements (changes the original array)
// let words = ["banana", "apple", "cherry"];
// words.sort();
// console.log(words); // ["apple", "banana", "cherry"]

// // 19. reverse() - Reverse the order of elements (changes the original array)
// words.reverse();
// console.log(words); // ["cherry", "banana", "apple"]

// // 20. join() - Combine all elements into a string
// let sentence = words.join(", ");
// console.log(sentence); // "cherry, banana, apple"

// // 21. split() (string method that creates an array from a string)
// let newArray = sentence.split(", ");
// console.log(newArray); // ["cherry", "banana", "apple"]



// // bu esa vazifalar uchun javon 




