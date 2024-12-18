let arr=[1,2,3,4,5,6,7,8,9];

//toString
// console.log(arr.toString()); /// return new string

//length
// console.log(arr.length);

//push method
// arr.push(199);
// console.log(arr);

//pop method
// arr.pop();
// console.log(arr);

//at  --- give value at particular index
// console.log(arr.at(7));


//join -- return value in form of string
// console.log(arr.join("->"));


//shift() -- change in orignal array  remove first ele
// let ans=arr.shift();
// console.log(arr);


//unshift() -- change in orignal array add ele at 0 index ele
// let ans=arr.unshift(1);
// console.log(arr);


///delete delet vale but it set to undefined
// delete(arr[3]);
// console.log(arr);


//concat()   return new array and merge two array
// let ans=[98,76,54,12345];
// arr=arr.concat(ans);
// console.log(arr);


// copy within  take three arguement start index to copied,where to start copy, how much to vopy
// console.log(arr);
// arr.copyWithin(2,0,6);
// console.log(arr);


// flat  convert bidimensional array to singlwed

// const myArr = [[1,2],[3,4],[5,6]];
// const newArr = myArr.flat();
// console.log(newArr);

//flatmap   map ele to another 
// let myarr = [1,2,3,4,5,6];
// let newarr=myarr.flatMap(num=>
//     [num,num*2]
//     // [num*2]
// );
// console.log(newarr);


//slice return subarray but return new array

// myarr=myarr.slice(0,3);
// console.log(myarr);


//splice   remove and insert ele  ite take three arguement  start,no of ele to remove, ele to added
// myarr.splice(1,0,23423,98765);
// console.log(myarr);



///tospliced  
// let arr=[12,3,4,5,6,7,8,9,10];
// let ans=arr.toSpliced(0,6);
// console.log(arr);