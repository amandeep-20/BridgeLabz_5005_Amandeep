function display(data){
    console.log(data);
}

function notDisplay(error){
    console.log(error.message);
}
let url = 'https://jsonplaceholder.typicode.co/posts/1';
fetchData(url,display,notDisplay);

function fetchData(url,display,notDisplay){
    fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        display(data);
    })
    .catch((error)=>{
        notDisplay(error);
    })
}


function fetchData1(url){
    return new Promise((resolve,reject)=>{
        fetch(url)
        .then((respone)=>{
            if(!respone.ok){
                throw new Error("error found");
            }
            return respone.json();
        })
        .then((data)=>{
            resolve(data);
        })
        .catch((error)=>{
            reject(error);
        })
    })
}

fetchData1(url)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error.message);
})