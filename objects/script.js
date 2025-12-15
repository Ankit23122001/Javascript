// JavaScript mein object ek aisi cheez hoti hai jisme hum data ko key–value pairs ke form mein store karte hain.


const student = {
  name: "Ankit",
  age: 21,
  skill: "JavaScript"
};
// name, age, skill → keys
// "Ankit", 21, "JavaScript" → values



// ✅ A. Dot Notation → obj.name  

// console.log(student.name); // "Ankit"
// console.log(student.age);  // 21


// ✅ B. Bracket Notation → obj["name"]

// Bracket notation tab use hota hai jab:
// 1.  Key dynamic ho
// 2.  Key space contain kare
// 3.  Key number ho
// 4.  Variable ke form mein ho


// console.log(student["skill"]); // "JavaScript"


// const obj = {
//   "home address": "Bangalore"
// };

// console.log(obj["home address"]); // works!




// 4. Adding, Updating & Deleting Properties------------------------------------------------


// const person = {
//   name: "Ankit",
//   age: 20
// };



// ⭐ A. Adding a new property

// person.city = "Delhi";               DOT NOTATION 

// person["country"] = "India";         BRACKET NOTATION 





// ⭐ B. Updating an existing property

// person.age = 25;

// person["name"] = "Ankit Sharma";






// ⭐ C. Deleting a property


// delete person.age;

// delete person["city"];







// NESTED OBJECTS  AND   DEEP ACCESSING


// const person = {
//   name: "Ankit",
//   age: 22,
//   address: {
//     city: "Bangalore",
//     pincode: 560001,
//     location: {
//       lat: 12.97,
//       lng: 77.59
//     }
//   }
// };



// console.log(person.address.city); 
// Output: Bangalore


// console.log(person["address"]["location"]["lng"]);  this is deep accessing 
// Output: 77.59




// Object Destructuring--------------------------------------------------------------------

// let {lat, lng} = person.address.location





// LOOPS ------------------------------------------------------------------------------------

// 1. FOR IN LOOP-------------------------

// for(let key in person){
//     console.log(key, person[key])
//     // console.log(person.key)           THIS WILL GIVE UNDEFINED qki key ek variavle hai and variable ke liye bracket us krte hai
// }




// console.log(Object.keys(person))          OBJECT.KEYS() WILL PRINT ALL THE KEYS 


// console.log(Object.entries(person))      Yeh function 2D array return karta hai jisme har element = [key, value]


// console.log(Object.values(person));           THIS WILL GIVE THE VALUES WITHOUT KEYS IN AN ARRAY 







// NOTE : SPREAD IS SAME AS OF ARRAY BOTH MAKES SHALLOW COPY OF NESTED PARTS AND CREATE DEEP COPY OF A NORMAL OBJECT 
// TO MAKE A DEEP COPY OR CLONE OF A NESTED OBJECT OR A NORMAL OBJECT WE USE structuredClone or          JSON.parse(JSON.stringify(obj)). 








// OPTIONAL CHAINING -------------------------------------------------------------------------

// const person = {
//   name: "Ankit",
//   age: 22,
//   address: {
//     city: "Bangalore",
//     pincode: 560001,
//     location: {
//       lat: 12.97,
//       lng: 77.59
//     }
//   }
// };





// person?.address?.city    THIS QUESTION MARK IS OPTIONAL CHANING IF ITS THERE THEN GOOD IF NOT THEN IT WILL GIVE UNDEFINED 









// OBJECT FREEZING -------------------------------------------------------------------------

// Object ko completely read-only bana deta hai., Na add kar sakte ho, Na delete kar sakte ho,  Na update kar sakte ho,  Na reconfigure kar sakte ho 


// EXAMPLE  -1 ----------->>>>>>>>>>>>>>>>>>>>>>>>>>

// const person = {
//   name: "Ankit",
//   age: 22
// };

// Object.freeze(person);

// person.age = 30;            // ❌ Not allowed (won't change)
// person.city = "Delhi";       // ❌ Not allowed (no new key)
// delete person.name;          // ❌ Not allowed

// console.log(person);
// Output: { name: "Ankit", age: 22 }




// NOTE:    Freeze is shallow freeze.          Meaning: Nested objects are NOT frozen automatically.   




// const person = {
//   name: "Ankit",
//   address: { city: "Delhi" }
// };

// Object.freeze(person);

// person.address.city = "Mumbai";  // ✔ Allowed (nested change)






// 🔥 2. Object.seal()      

// 👉 Object ke structure ko lock kar deta hai.
// 👉 Add new properties → ❌ Not allowed
// 👉 Delete properties → ❌ Not allowed
// 👉 Update existing properties → ✔ Allowed



// const person = {
//   name: "Ankit",
//   age: 22
// };

// Object.seal(person);

// person.age = 30;            // ✔ Allowed
// person.city = "Delhi";       // ❌ Not allowed
// delete person.name;          // ❌ Not allowed

// console.log(person);
// Output: { name: "Ankit", age: 30 }






// 🔥 4. How to check if object is frozen or sealed?   



// Object.isFrozen(obj);  // true/false
// Object.isSealed(obj);  // true/false



