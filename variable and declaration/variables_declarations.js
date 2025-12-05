// var, let, const

// DECLARATIONS & INITIALISATION ->  THESE ARE THE DIFFERENT WAYS OF DECLARING A VARIABLE, CONST ALWAYS NEED A VALUE, WE JUST CAN'T DECLARE IT. IT ALWAYS NEED TO BE INITITLISE
// var a;                      -> DECLARATION
// var a = 12;                 -> DECLARATION AND INITIALISATION
// let a;                      -> DECLARATION
// let a = 39;                 -> DECLARATION AND INITIALISATION
// const a = 65;                -> DECLARATION AND INITIALISATION FOR CONST


// var a = 12;    //WINDOW ME ADD HOTA HAI, FUNCTION SCOPED HOTA HAI, FIR SE DECLARE KR SKTE HAI SAME NAME SE
// var a = 13;
// console.log(a)
// let b = 12;
// console.log(b)
// let b = 15;    //FIR SE DECLARE NHI KR SKTE SAME NAME SE,
// b = 14;       //  BUT VALUE CHANGE KR SKTE H
// console.log(b)

// const a = "Ankit"
// a = "Kumar"    //NHI KR SKTE CONST SE BSS EK BAAR DECLARE AND INITIALISE HOTA HAI, ISKA VALUE CHANGE NHI KR SKTE
// console.log(a)







// SCOPE -->  (GLOBAL, BLOCK, FUNCTIONAL)


// GLOBAL
// var a = 12;



//BLOCK
// {
//     var a = "59"
//     var b = "Ankit"
// }
// console.log(b)  -->> VAR KEYWORD BLOCK SCOPE KO NHI MAANTA, IT ONLY OBEYS FUNCTIONAL SCOPE
// console.log(a)       -->  O/P  59    BLOCK SCOPE NE VALUE CHANGE KIA FROM 12 TO 59
// console.log(b)      -->  O/P  "Ankit"   BLOCK ME DEFINE THA BUT USKE BAHAR BHI VALUE ACCESS KR SKTE H





// NOTE -->  LET BLOCK HOTA H MEANS LET KI VALUE BLOCK SCOPE KE BAHAR ACCESS NHI KR SKTE




// let a = 25;
// console.log(a)
// {
//     let name = "Ankit"
//     console.log(name)
//     a = 30
// }
// console.log(name)  -->  block ke bahar no access
// console.log(a)    O/P  -> 30 A KI VALUE CHANGE HO SKTI HAI






// REASSIGN AND REDECLARATION  -->> (var se redeclare and reassign possible hai, but let se re assign possible hai, re declaration with same name not possible and const me bss ek baar declare hota hai)



// var a = 25;
// console.log(a)
// var a = "Ankit"                        -->>  REDECLARE KIA HAI IS STEP ME SAME NAME SE
// console.log(a)
// a = "Shrivastav"                       -->> REASSIGN KIA H IS STEP ME
// console.log(a)                         -->>  AT LAST A KI VALUE SHRIVASTAV HAI




// let a = 25;
// console.log(a)
// let a = "Ankit"       -->>  YE ALLOWED NHI HAI LET USE KRNE SE FIR SE SAME NAME SE REDECLARE NHI KR SKTE
// a = "aNKIT"          -->>  LEKIN RE ASSIGN KR SKTE HAI VALUE KO
// console.log(a)




// const a = "Ankit"
// console.log(a)
// a = "Shrivastav"        -->>  POSSIBLE NHI HAI
// const a = "Shrivastav"     -->> POSSIBLE NHI HAI
// console.log(a)





// TEMPORAL DEAD ZONE



// | Situation                                 | var       | let            | const          |
// | --------------------------------------    | --------- | -------------- | -------------- |
// | 1. Access variable before init            | undefined | ReferenceError | ReferenceError |
// | 2. Access function expression before init | undefined | ReferenceError | ReferenceError |
// | 3. Call function expression before init   | TypeError | ReferenceError | ReferenceError |
// | 4. Call function declaration before init  | Works     | Works          | Works          |

// 1. Access variable before initialization

// console.log(a); // undefined
// var a = 10;

// console.log(a); // ❌ ReferenceError (TDZ)      FOR LET AND CONST BOTH
// let a = 10;


// 2. Access function expression before initialization

// console.log(fun); // undefined
// var fun = function(){}

// console.log(fun); // ❌ ReferenceError (TDZ)    FOR LET AND CONST BOTH
// let fun = function(){}


// 3. Call function expression before initialization

// fun(); // ❌ TypeError: fun is not a function
// var fun = function(){}

// fun(); // ❌ ReferenceError (TDZ)           FOR LET AND CONST BOTH
// let fun = function(){}


// 4. Call function declaration before initialization

// greet(); // ✔ works
// function greet() {}




// HOISTING     -->>  Ek variable ko jab js mein banate hai to wo variable do hisso mein toot jaata hai (declare and initialization) and uska declaration part top pe chala jaata hai and uska initialization part neeche reh jaata hai

//  HOISTING BSS var pe applicable hai. let and const pe nahi
// var  -->> hoist  -->>  undefined
// let  -->> hoist  -->>  Reference Error
// const  -->> hoist  -->>  Reference Error


// Examples

// console.log(nm);     O/P  ->  UNDEFINED
// var nm = "Ankit"

// console.log(age);    O/P  ->  REFERENCE ERROR     ISME TDZ ME JAYEGA
// let age = 25;


// var x = 1;               GLOBAL VARIABLE
// {
// var x = 2                GLOBAL VARIABLE
// }
// console.log(x)     O/P  -- >  2


// let a = 10;                       //BLOCK SCOPE // GLOBAL
// {
    // let a = 25;
    // console.log("Inside:", a)       //       O/P  -> INSIDE: 25
// }
// console.log("Outside:", a)             //   O/P  -> OUTSIDE: 10



// NOTE  :  VAR BS FUNCTION KI RESPECT KRTA H BUT LET AND CONST CURLY BRACES KI RESPECT KRTE HAI

// if (true){
//     var a = 2;
//     let b = 25;
// }
// console.log(a)          O/P  -->   2
// console.log(b)          O/P  -->   REFERENCE ERROR  




// NOTE:   Const use krte type hum reassign nhi kr skte kisi bhi variable ko,  but variable ki propert ko update kr skte hai

// const person = {name: "Ankit"}
// console.log(person)
// person.name = "Shrivastav"         
// person.age = 25
// console.log(person)
// delete person.age
// console.log(person)

// person = {}  NOT ALLOWED

