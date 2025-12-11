// Function Declaration are of two types ------------------------------

// 1. Function Statement -------------------------------------------
function greet(){
    console.log("function statement")
}
// greet();     THIS  WILL CALL AND RUN THE FUNCTION 
// console.log(greet)   THIS WILL PRINT THE WHOLE FUNCTION LINE BY LINE

// 2. Function Expression  ----------------------------------------------------
let fnc = function (){
    console.log("function expression")
}
// fnc()      THIS WILL CALL AND RUN THE FUNCTION
// console.log(fnc);    THIS WILL PRINT THE WHOLE FUNCTION LINE BY LINE 

// 3. Arrow Function ----------------------------------------------------
let function1 = () => {
    console.log("Arrow function");
}
// function1();                      THIS WILL CALL AND RUN THE FUNCTION
// console.log(function1);           THIS WILL PRINT THE WHOLE FUNCTION LINE BY LINE 
  


// PARAMETER AND ARGUMENT----------------------------------------------------

// function add(v1, v2){               v1, v2  -->> parameter
//     console.log( v1 + v2) ; 
// }

// add(1,2)                   (1, 2  are argument)
// add(3212,1412)
// add(1234,9087)




//  DEFAULT , REST AND SPREAD  PARAMETERS--------------------------------------------

// 1.    DEFAULT  ------------------------------
// function add(v1, v2){              NOTE:   AGR HUM FUNCTION CALL KRTE TIME KOI BHI ARGUMENT NA DE OR KOI  
    // console.log(v1, v2)                    DEFAULT VALUE BHI NHI DE RKHA PARAMETER ME TO V1 AND              
    // console.log(v1 + v2)                   V2 KI VALUE UNDEFINED RHEGI.  MEANS DONO CONSOLE KA ANSWER HOGA 
// }                                          UNDEFINED, UNDEFINED  AND NaN(SECOND KA) COZ UNDEFINED AND 
// add()                                      UNDEFINED KO ADD NHI KR SKTE. AGR 1 ARGUMENT DIA H TO 1 ME ARGUMENT KI VALUE AA JAYEGI AND DUSRA UNDEFINED HI REHGA



// function add(v1 = 25, v2= 30){         DEFAULT PARAMETER
    // console.log(v1 + v2)
// }
// add()



// 2.  REST --------------------------------------------

// function add(...val){                    ...val → saare numbers ek array me aa gaye
    // console.log(val)
// }
// add(1,2,3,4,5,6,7,8,9,10)


// NOTE:  Jab Arguments kai Saare Ho To Humein Utne Hi Parameter Banane PaymentMethodChangeEvent, Issey Bachne Ke Liye, Hum Rest Ka Use Karte Hai...  Agr..  Function Ke Parameter Space Mein Lage To Wo Rest Operator Hai And Agr Wo Arrays And Objects Mein Lage To Wo Spread Operator Hai  


// function add(a,b,c, ...val){            1,2,3  -->> a,b,c me jayenge baaki sb rest operator me array ki
    // console.log(a,b,c,val)                              tarah jayenge 
// }
// add(1,2,3,4,5,6,7,8,9,11)



// ----------------------------------------------------------------------------------------------
// FIRST CLASS FUNCTIONS    -->>>   JavaScript supports first-class functions, meaning functions can be assigned to variables, passed as arguments, returned from other functions, and stored in data structures. This enables higher-order functions and functional programming patterns. ------------------------------------


// 1. Assigning a function to a variable -----------------------------------------------

// let greet = function () {
//   console.log("Hello!");
// };
// greet();                    Function ko ek value ki tarah variable में store kiya → Valid!



// 2. Passing a function as an argument --------------------------------------------------

// function calculator(a, b, operation) {
//   return operation(a, b);
// }

// function add(x, y) {          add function ko kisi doosre function ke अंदर parameter की तरह भेज दिया
//   return x + y;                 → This is possible because of first-class functions.
// }

// console.log(calculator(10, 5, add)); // 15





// HIGHER ORDER FUNCTIONS  -->>    Wo functions jo dusre function ko accept karte hain ya return karte hain."


// function abcd(){
//     return function(){
//         console.log("Hello");
//     }
// }

// abcd()();




// PURE AND IMPURE FUNCTIONS-----------------------------------------------------------

// AISA FUNCTION JO KI VALUE KO NAA BADLE WO HAI PURE FUNCTION  --------------------

function add(a, b) {
  return a + b;
}
// add(3,7)               -->>  OUTPUT FOR ALL THREE CASES WILL REMAIN SAME NO MATTER HOW MANY TIME WE CALL IT 
// add(3,7)                            WITH SAME ARGUMENT
// add(3,7)


// NOTE:     1️⃣ Output depends ONLY on input values
// 2️⃣ Does NOT change anything outside the function
// 3️⃣ Does NOT modify global variables, DOM, files, etc.
// 4️⃣ Does NOT use Math.random(), Date(), API calls, etc.



//   AISA FUNCTION JO KI BAHAR KI VALUE KO BADAL DE WO HAI IMPURE FUNCTION -----------------------------

let count = 0;

function increase() {
  count++;  // modifies outside value ❌
}


// function getRandom() {
//   return Math.random();         -->>   Same input → different output every time → ❌ impure.
// }






// CLOSURES AND LEXICAL SCOPING--------------------------------------------------------------------------

// Ek inner function apne baahar wale function ke variables ko yaad rakhta hai, bhale hi baahar wala function execute ho chuka ho.


function createCounter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let counter = createCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// 1.createCounter() returns an inner function
// 2.Inner function remembers count
// 3Every call updates the same count even though outer function is done


// Example  2   -->>--------------------------------

function outer() {
    let count = 0;

    function inner() {
        console.log(count);
    }

    return inner;
}

// let fn = outer();  
// fn();   // prints 0

// 1.outer() returns inner
// 2.After outer() finishes, normally count should be gone
// 3.But inner() remembers count
// 4.That “remembering” = closure




// LEXICAL SCOPING--------------------------------------------------------------------------------------
// Jahan function likha gaya hai, wahan ke surrounding scope (variables) ko wo yaad rakhta hai."

// EXAMPLE   1 ----------------------------------------------------------

// let a = 10;

// function outer() {                                      inner() is written inside outer()
//     let b = 20;
//                                                         So it can access:
//     function inner() {
//         console.log(a, b);                              ✔ its own scope
//     }                                                   ✔ outer's scope    
//                                                         ✔ global scope
//     inner();
// }

// outer();


// EXAMPLE  2   --------------------------------------------

// let x = 100;

// function outer() {
//     let y = 200;
//     let a = 250;
//     function inner() {
//         let d = 25
//         console.log(a, x, y);
//         function innerinner(){
//             console.log(x,y,d)
//         }
//         return innerinner;
//     }

//     return inner;
// }

// let fn = outer()();

// fn(); // called outside





// IIFE ---------------------------------------------------------  An IIFE (Immediately Invoked Function Expression) is a function in JavaScript that runs immediately after it is defined.



// EXAMPLE 1 ---------------------------  

// (function() {
//     let x = 10;
//     console.log(x); // 10
// })();

// console.log(x); // ❌ Error, x is not defined



// EXAMPLE  2  -->> IIFE with parameter

// (function(name) {
//     console.log("Hello " + name);
// })("Ankit");




// Hoisting differences between declaration and expression---------------------------------------------------

// FUNCTION DECLARATION====================
// greet();    ALLOWED WILL GIVE OUTPUT AS HOISTING WILL TAKE PLACE 

// function greet(){
    // console.log("Hello")
// }



// FUNCTION EXPRESSION ==================

// greet1()             REFERENCE ERROR AS NO HOISTING
// let greet1 = function(){
    // console.log("Hello")
// }




// DISCOUNT CALCULATOR

// function discountCal(discount){
//     return function(price){
//         return price - price * (discount / 100)
//     }
// }

// let ten = discountCal(10)
// let twenty = discountCal(20)

// console.log(ten(1000))
// console.log(twenty(1000))

