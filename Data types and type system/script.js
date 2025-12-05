// primitives  -->> aisi saari values jinko copy krne par ek real copy milti hai 
// primitive  -->> String, number, boolean, null, nudefined, symbol, bigint 

// reference  -->> inko copy krne par real copy nahi milegi nut aapko reference milega parent ka 
// reference  -->> Object, arrays, function 



// let a = 12;
// let b = a;          IS LINE KE BAAD A KE PAAS KHUD KA 12 HAI AND B KE PAAS KHUD KA 12 HAI
// a = a + 2;          AFTER THIS LINE VALUE OF A WILL BE 14 BUT VALUE OF B WILL REMAIN 12. 



// NULL -->> iska mtlb hamne jaan bhooj kar koi value nhi di 
// let a = null;)
// console.log(a)

// UNDEFINED  --> iska mtlb hmne ek variable bnaya but usko koi value nhi di 
// let a;
// console.log(a)


//   BigInt  -->>   let a = 9007199254740991n;




// --------------------------------------------REFERENCE TYPES----------------------------------------

// let a = [1,2,3,4,5,6,7]
// let b = a           THIS WILL STORE THE REFERENCE OF A NOT THE VALUE OF A MEANS AGR B ME KOI CHANGE KRTE HAI TO WO A BHI REFLECT HOGA
// b.pop()                 
// console.log(a)             O/P  -->  [1,2,3,4,5,6]
// console.log(b)             O/P  -->  [1,2,3,4,5,6]


let obj = {
    name: "Ankit",
    age : 23,
    gender: "Male"
}
// console.log(obj)
// let obj1 = obj;
// obj1.name = "Kishu"
// console.log(obj1)             value of both obj and obj1 will change (name = kishu)
// console.log(obj)




// --------------------------------DYNAMIC TYPING-------------------------------
// JS ME DYNAMIC TYPING HAI, MEANS AAP DATA KO CHANGE KR SKTE HO MEANS DATA TYPE DEFINE NHI KRTE YHA. COMPARE TO JAVA LIKE int a = 12; 
// example
// let a = 12;                   BAAR BAAR DATA KA TYPE CHANGE KR SKTE HAI
// a = true;
// a = "Ankit"
// a = [];
// a = null;





// ----------------------------------TYPE COERSION-----------------------------

// IT MEANS JS AAPKA EK TYPE KO AUTOMATICALLY DUSRE TYPE ME CONVERT KR SKTA HAI 

// let a = "4";
// let b = 5;
// console.log(a+b)             O/P --> '45' AS a STRING qki java script me + symbol bss 2 operation kr skta hai addition and concatenation and agr kisi bhi line me string hai to wo usko cancatenate krega na ki addition  


// let c = "5"
// let d = 2 
// console.log(c-d)  O/P--> 3  qki - symbol bss subtract ke liye use hota hai isliye js c ko number bna deta hai 
 




// ---------------------------TRUTHY AND FALSY VALUES-----------------------------------------------
// falsy values ---  0, false, null, "", undefined, NaN, document.all    REST ALL VALUES ARE TRUTHY



// type of NaN === number  -->> true







