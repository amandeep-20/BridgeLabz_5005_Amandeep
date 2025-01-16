async function example() {
    return "hello!";
}
example()
// .then(console.log);


function fetchDa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function getDa() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.error("Error:", err);
    }
}
getDa();


async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    // console.log(data);
}
fetchData();

async function f() {
    try{
        const response = await fetch("invalid");
        const data = await response.json();
        // console.log(data);
    }
    catch(error){
        // console.error(error.message);
    }
}
f();

//without async/await

// fetch("https://jsonplaceholder.typicode.com/posts/1")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.error(error.message));


// parallel executions
async function fetchMultipleData() {
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2"
    ];
    const data = urls.map(url => fetch(url).then(res => res.json()));
    const result = await Promise.all(data);
    console.log(result);
}

fetchMultipleData();