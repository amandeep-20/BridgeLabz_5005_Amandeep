async function fetchData() {
    const pages = [ 
        Promise.resolve("1"),
        Promise.resolve("2")
    ]
    for await (let page of pages){
        // console.log(page);
    }
}
fetchData();

const asyncIterable = {
    [Symbol.asyncIterator]() {
        let i = 0;
        return {
            next() {
                if (i < 5) {
                    return new Promise((resolve) =>
                        setTimeout(() => resolve({ value: i++, done: false }), 1000)
                    );
                } else {
                    return Promise.resolve({ done: true });
                }
            },
        };
    },
};

(async function () {
    for await (const num of asyncIterable) {
        console.log(num); // Logs 0, 1, 2, 3, 4 (one per second)
    }
})();