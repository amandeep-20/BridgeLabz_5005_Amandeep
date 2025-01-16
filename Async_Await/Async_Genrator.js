function* genrator(){
    yield "1";
    yield "2";
}
const greet = genrator();
// console.log(greet.next());
// console.log(greet.next());
// console.log(greet.next());

async function * Agenrator(){
    yield await Promise.resolve("1");
    yield await Promise.resolve("2");
}

(async()=>{
    for await (const value of Agenrator()){
        // console.log(value);
    }
})();


function* syncGenerator() {
    yield "Sync 1";
    yield "Sync 2";
}

async function* asyncGenerator() {
    yield "Async 1";
    yield "Async 2";
}

async function* combineGenerators(syncGen, asyncGen) {
    for (const value of syncGen) {
        yield value;
    }
    for await (const value of asyncGen) {
        yield value;
    }
}

(async function () {
    const syncGen = syncGenerator();
    const asyncGen = asyncGenerator();

    for await (const value of combineGenerators(syncGen, asyncGen)) {
        console.log(value);
    }
})();