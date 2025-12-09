// 1. For Loop   -->>   Used when you know how many times to run the loop.

// SYNTAX  -- >>         for (initialization; condition; increment) {
                              // code
                            // }

// for (let i = 1; i <= 6; i++) {
//     console.log(i);
// }



// 2.  while loop  -->>  Runs as long as the condition is true. ----------------------------------

// SYNTAX   -->>        
// start
// while (condition) {
//      code
//      increment
//}

// let i = 1;
// while (i <= 5) {
//     console.log(i);
//     i++;
// }



// 3. do...while loop      -->>>   Runs the code at least once, even if the condition is false.------------

// SYNTAX     -->>  do {
                        // code
                        // increment
                    // } while (condition);


// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);



// 4. for...of loop   -->>   Used to loop through arrays, strings, or iterable objects.----------------------

// SYNTAX         -->>      for (let item of iterable) {
                                // code
                            // }

// let fruits = ["apple", "banana", "mango"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }



// 5.  for...in loop  -->>   Used to loop through object properties (keys).---------------------------------

// SYNTAX        -->>        for (let key in object) {
                                // code
                            // }

// let person = {name: "John", age: 25};
// for (let key in person) {
//     console.log(key, person[key]);
// }


// 6. Array loops using functions     --->> IT IS OF TWO TYPES --------------------------------------------

//       A. forEach()    -->>>  Runs a function for each array element.

//         let nums = [10, 20, 30];
//         nums.forEach(function(n) {
//          console.log(n);
//         });


//       B.  map() (creates and returns a new array)

// let nums = [1, 2, 3]; 
// let doubled = nums.map(n => n * 2);
// console.log(doubled);
















