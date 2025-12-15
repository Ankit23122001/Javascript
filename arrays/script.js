// let arr = [1,2,3,4,5,6];
// arr.push(12,"six", "Ankit", 15);              //PUSH ELEMENT AT LAST

// arr.pop()    REMOVES LAST ELEMENT FROM ARRAY 

// arr.shift()     REMOVES ELEMENT FROM START OF INDEX 

// arr.unshift(500,"hello", 159)  push element at start of array 




// SPLICE----------------------------------------------------------------------
// let newArr = arr.splice(2,3)      modifies array and return a new array (2 --> index,  3 --> kitne Element hatane hai) 
// console.log(newArr)



// NOTE: SPLICE METHOD MODIFY THE ORIGINAL ARRAY AND RETURN THE REMOVED ELEMENTS 


// arr.splice(3,2,5,10,100,195)    index 3 se 2 value hatega and uski jagah new values aa jayegi. 








// SLICE METHOD ------------------------------------------------------------------

// NOTE: SLICE METHOD DO NOT CHANGE THE ORIGINAL ARRAY AND RETURN THE COPIED PART OF ARRAY  
// let newArr = arr.slice(0,4)
// console.log(newArr)








// CONCAT ---->> Merges (joins) two or more arrays together, Returns a NEW array, Does NOT change the original arrays 

// let a = [1, 2];
// let b = [3, 4];

// let result = a.concat(b);

// console.log(result); // [1, 2, 3, 4]
// console.log(a);      // [1, 2] (unchanged)


// EXAMPLE  2 
// let output = a.concat(b, [5, 6]);
// console.log(output); // [1, 2, 3, 4, 5, 6]











// JOIN METHOD   --->>  Converts an array into a string, Joins all elements using a separator (by default: comma ,),   Returns a string, NOT an array,   Does NOT modify the original array


// EXAMPLE --- 1 

// let arr = ["Ankit", "is", "learning", "JS"];

// let result = arr.join(" ");

// console.log(result); // "Ankit is learning JS"
// console.log(arr);    // ["Ankit", "is", "learning", "JS"] (unchanged)


// EXAMPLE --- 2     DEFAULT SEPARATOR

// [1, 2, 3].join();
// "1,2,3"


// EXAMPLE --- 2     CUSTOM SEPARATOR

// [1, 2, 3].join("-");
// "1-2-3"











// REVRESE --->>  Reverses the order of elements in the array,  Modifies the original array,   Returns the same array after reversing.

// let arr = [1, 2, 3, 4];
// let result = arr.reverse();

// console.log(result); // [4, 3, 2, 1]
// console.log(arr);    // [4, 3, 2, 1]  (original changed)


// NOTE: For Getting A Reverse Copy of Array 

// let arr = [1, 2, 3, 4];

// let reversedCopy = [...arr].reverse();

// console.log(reversedCopy); // [4, 3, 2, 1]
// console.log(arr);          // [1, 2, 3, 4] (unchanged)









// SORT ----->>  Sorts the elements of an array,   Changes (mutates) the original array,   Returns the same array, after sorting.


// NOTE:  VERY IMPORTANT ------------------------------------------------------->>>>>>>
// By default, sort() converts elements to STRING and then sorts them lexicographically (dictionary order).
// Isliye numbers galat sort hote hain.


// WRONG WAY-------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let arr = [10, 1, 5, 20];
// arr.sort();

// console.log(arr); // [1, 10, 20, 5] ❌ (wrong for numbers)



// RIGHT WAY --------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let arr = [1,209, 67, 287, 3, 23,45,5,664,12,12,445,6]
// arr.sort((a, b) => a - b);  // ascending order
// arr.sort((a, b) => b - a);  descending order 



// FOR STRING --------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let names = ["Ankit", "Rahul", "Zara", "Bharat"];
// names.sort();

// console.log(names); 
// // ["Ankit", "Bharat", "Rahul", "Zara"]








// forEach() ------------------------------------------------------>>>>>>>>>>>>>>>>>
// Runs a function for each element in the array,  Returns:Nothing (undefined),  
// USED FOR -- PRINTING, LOGGING, UPDATING UI 


// let arr = [1, 2, 3];

// arr.forEach((num) => {
//   console.log(num);
// });









// MAP METHOD ----------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// Creates a new array by applying a function to each element,  Returns:A new array (same length).
// USED FOR --->>  TRANSFORMING VALUES, SQUARING NUMBERS, EXTRACTING PROPERTIES FROM OBJECTS

// EXAMPLE  1-----------------

// let arr = [1, 2, 3, 4];

// let result = arr.map(num => num * 2);

// console.log(result); // [2, 4, 6, 8]


// EXAMPLE   2--------------

// let prices = [100, 200, 300];

// let updated = prices.map(p => p + 10);

// console.log(updated); // [110, 210, 310]


// EXAMPLE   3--------------

// let celsius = [0, 10, 20, 30];

// let fahrenheit = celsius.map(c => (c * 9/5) + 32);

// console.log(fahrenheit); // [32, 50, 68, 86]


// EXAMPLE   4--------------

// let arr = ["ankit", "rohit", "neha"];

// let upper = arr.map(str => str.toUpperCase());

// console.log(upper); // ["ANKIT", "ROHIT", "NEHA"]








// FILTER METHOD ------------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// Creates a new array containing elements that pass a condition.   
// Returns: A new array (length maybe smaller)
// USED FOR :  FLITERING NUMBERS, REMOVING ITEMS ETC.........


// EXAMPLE  1------------------------------------

// let arr = [1, 2, 3, 4, 5, 6];

// let even = arr.filter((num) => num % 2 === 0);

// console.log(even); // [2, 4, 6]


// EXAMPLE  2------------------------------------

// let names = ["Ankit", "Rohit", "Neha", "Aman"];

// let result = names.filter(name => name.includes("a") || name.includes("A"));

// console.log(result); // ["Ankit", "Neha", "Aman"]



// EXAMPLE  3------------------------------------

// let arr1 = [1,2,2,3,3,4,5,6,6,7,7,9];
// let uniqueArr = arr1.filter((val, index, arr)=>{
//     return arr.indexOf(val) === index;
// })
// console.log(uniqueArr)






// REDUCE METHOD -----------------------------------------------------------------------------

// Reduces the entire array into a single value. 
// Returns:A single number,  a string,  an object...


// let arr = [1, 2, 3, 4];

// let sum = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(sum); // 10











// ARRAY DESTRUCTURING-----------------------------------------------------------------------------------------------

// let arr = [10, 20, 30];

// let [a, b, c] = arr;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 30




// let arr3 = [10, 20, 30, 40, 50, 60];

// let [a, b,  ,  ,c] = arr3;

// console.log(a); // 10
// console.log(b); // 20
// console.log(c); // 50


// EXAMPLE  3 -------------------------------------------- USING REST OPERATOR

// let arr = [1, 2, 3, 4, 5];

// let [x, y, ...rest] = arr;

// console.log(x);    // 1
// console.log(y);    // 2
// console.log(rest); // [3, 4, 5]



// EXAMPLE   4-------------------------------------------------  USING DEFAULT VALUES

// let arr = [10];

// let [a, b = 50] = arr;

// console.log(a); // 10
// console.log(b); // 50 (default)






// SPREAD OPERATOR----------------------------------------------------------------------------------------------
// The spread operator (...) JavaScript ka ek powerful feature hai jo arrays, objects, or iterables ko spread (expand) karne ke kaam aata hai.

// let arr1 = [1, 2, 3, [12,25,19,20]];
// let arr2 = [...arr1];
// arr2[1] = 250
// arr2[3][2] = 150
// console.log(arr2); 
// console.log(arr1)

// NOTE: IF I AM HAVING A NORMAL ARRAY THEN SPREAD OPERATOR WILL CREATE A DEEP COPY. AND IF I AM HAVING A NESTED ARRAY THEN THE SPREAD OPERATOR WILL MAKE A SHALLOW COPY.

// AGR NESTED ARRAY ME KOI BHI CHANGE KRTE HAI SPREAD OPERATOR KO USE KRKE TO WO MAIN ARRAY ME BHI CHANGE HO JAYEGA. BUT AGR ARRAY NESTED NHI HAI TO SPREAD OPERATOR EK DEEP COPY BNA DEGA 


// EXAMPLE  -2       ----------------------------------------

// let a = [1, 2];
// let b = [3, 4];

// let merged = [...a, ...b];

// console.log(merged); // [1, 2, 3, 4]



// EXAMPLE   3 --------------------------------------------------------

// let arr = [1, 2, 3];

// let newArr = [0, ...arr, 4];

// console.log(newArr); // [0, 1, 2, 3, 4]









// DEEP COPY  -------------------------------
// To make a deep copy of a nested array, you must use a method that copies everything, including inner arrays — not just the top level.


// 1.   Best & Easiest (Modern JS): structuredClone()

// let arr1 = [1, 2, [10, 20]];

// let arr2 = structuredClone(arr1);

// arr2[2][0] = 99;

// console.log(arr1); // [1, 2, [10, 20]] (NOT affected)
// console.log(arr2); // [1, 2, [99, 20]]


// 2.   Using JSON.parse(JSON.stringify())

// let obj1 = { name: "Ankit", skills: { js: true } };

// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.skills.js = false;

// console.log(obj1.skills.js); // true ✔ (not affected)







// SHALLOW COPY -----------------------------------------------------------------

// A shallow copy creates a new array or object, but only copies the top-level values. If the original contains nested arrays or objects, the shallow copy still references the same nested structures instead of making new ones."





