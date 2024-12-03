// const arr = [1,2,3,4,5];
// const [,,b,...rest] = arr;//skip the elements
// const {3:a} = arr; //array is also object this is way to find the data at particuler index;
// // console.log(b,rest);
// console.log(a);

// default parameter...
const [c=10, d=20] = [100];
// console.log(c,d);



const [aa, bb = "default", cc] = ["x"]; // aa=x, bb=default, cc=undefined..

// const numbers = [10, 20, 30, 40];
// const [a,b,...rest] = numbers;
// // console.log(a,b,rest);

const fruits = ["apple"];
const [fruits1 , fruits2="orange"] = fruits
// console.log(fruits1,fruits2);

const colors = ["red", "blue", "green", "yellow"];
const [color1,,color2] = colors;
// console.log(color1,color2);

const nested = [1, [2, 3], 4];

// const [a,[b,...rest]] = nested
// console.log(a,b,rest);

// const input = [10, 20, 30, 40];
// function get (input){
//     const [first, second, ...rest] = input;
//     return {first,second,rest};
// }
// console.log(get(input));

// const pairs = [[1, 2], [3, 4], [5, 6]];

// for(const [x,y] of pairs){
//     console.log(x+y);
// }
