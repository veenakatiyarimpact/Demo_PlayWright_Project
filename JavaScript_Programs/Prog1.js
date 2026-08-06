let fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Accessing elements
console.log(fruits[0]); // Apple
console.log(fruits[1]); // Banana
console.log(fruits[2]); // Orange

// Updating an element
console.log("\nBefore : " + fruits);
fruits[1] = "Mango";
console.log("\nAfter : " + fruits);

// Array length
console.log("\nLength = " + fruits.length);

// Adding at the end
fruits.push("Cherry");
console.log(fruits);

// Adding at the start
fruits.unshift("Cheeku");
console.log(fruits);

// Removing last element
fruits.pop();
console.log(fruits);

// Removing first element
fruits.shift();
console.log(fruits);

// Empty array
let numbers = [];
console.log(numbers);

// Array with different data types
let data = [
    "Veena",
    30,
    true,
    95.5,
    { city: "Pune" }
];

console.log(data);