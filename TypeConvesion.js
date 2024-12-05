"use strict"

//         ---------- implicit -----------         //

// let num = 24;
// console.log(typeof(num));//number
// console.log(typeof(num.toString()));//string

// let str = "123";
// console.log(Number(str)); // 123
// console.log(parseInt("123abc")); // 123
// console.log(parseFloat("123.45")); // 123.45

// console.log(Boolean(1)); // true
// console.log(Boolean(0)); // false
// console.log(Boolean("")); // false
// console.log(Boolean("Hello")); // true

// console.log(5 + "5"); // "55"
// console.log("5" - 2); // 3
// console.log("5" * "2"); // 10

//                        falsy value - false, 0, "" (empty string), null, undefined, NaN

// console.log(parseInt("10.5"));// 10
// console.log(Number("10.5"));// 10.5

// console.log(parseInt("123abc"));// 123
// console.log(Number("123abc"));// NaN


//         ---------- explicit -----------         //

// equality:
// console.log('5'== 5); //true;
// console.log(0 == false)//true
// console.log(null == undefined); //true


// strict equality:
// console.log(5 === '5'); // false
// console.log(0 === false); // false 
// console.log(null === undefined); // false


// inequality:
// console.log(5 != '5'); // false
// console.log(0 != false); // false
// console.log(null != undefined); // false


// strict inequality:
// console.log(5 !== '5'); // true
// console.log(0 !== false); // true
// console.log(null !== undefined); // true


//some case:
// console.log('Zoo'>'apple');// false
// console.log(NaN === NaN);// false nan is not equal to anything and itself too.
// console.log(" " == 0);// true