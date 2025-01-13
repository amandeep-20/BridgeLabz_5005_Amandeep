function square(data){
    return new Promise(function(resolve,reject){
        if(data<0){
            reject("number less then 0");
        }
        else{
            resolve(data*data);
        }
    })
}
square(5)
.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})
square(-5)
.then((data)=>{
    console.log(data);
})
.catch((data)=>{
    console.log(data);
})

const done = new Promise((resolve,reject)=>{
    let flag = true;
    if(flag){
      resolve("done!");
    }
    else{
      reject("not done");
    }
  })
  done
  .then((data)=>{
    // console.log(data);
  })
  .catch((data)=>{
    // console.log(data);
  })
  
  const promise1 = Promise.resolve("1");
  const promise2 = Promise.reject("2");
  const promise3 = Promise.resolve("3");
  
  Promise.all([promise1,promise2,promise3])
  .then((data)=>{
    // console.log(data);
  })
  .catch((data)=>{
    // console.log(data);
  })
  
  let ans = function yo(){
    return new Promise((resolve,reject)=>{
      resolve(2);
    })
  }
  
  ans()
  .then((data)=>{
    // console.log(data);
    return data*2;
  })
  .then((data)=>{
    // console.log(data);
  })
  
  const p1 = Promise.resolve("1");
  const p2 = Promise.reject("2");
  const p3 = Promise.resolve("3");
  
  Promise.allSettled([p1,p2,p3])
  .then((data)=>{
    // console.log(data);
  })
  .catch((data)=>{
    // console.log(data);
  })
  
  
  const result = new Promise((resolve)=>{
    resolve("done!")
  })
  result
  .then((data)=>{
    // console.log(data);
    throw new Error("wrong");
  })
  .catch((error)=>{
    // console.log(error.message); 
  })
  
  class CustomError extends Error {
    constructor(message) {
      super(message);
      this.name = "CustomError";
      this.message = "shhhhhhhhh"
    }
  }
  
  const fetchData = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("Data fetched successfully!");
    } else {
      reject(new CustomError());
    }
  });
  
  fetchData
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
        console.log(error.message);
    });