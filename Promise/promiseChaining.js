// const fetch = (data) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(data);
//         }, 1000);
//     });
// };
// fetch("hy i am aman")
// .then((result)=>{
//     console.log(result);
//     return fetch("bye");
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((Error)=>{
//     console.error(Error);
// });
const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 1 completed"), 1000);
    });
};

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Step 2 completed"), 1000);
    });
};

step1()
    .then((result) => {
        console.log(result); // "Step 1 completed"
        return step2();
    })
    .then((result) => {
        console.log(result); // "Step 2 completed"
    })
    .catch((error) => {
        console.error(error);
    });
