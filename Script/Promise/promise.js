//When we create a promise, we pass a function called the executor. This function gets two arguments: resolve and reject.

//.then execution

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Done!"); }, 1000)
});

promise1.then(result => {
    console.log(result); // "Done!"
});

//.then(callback) attaches a function that will run only when the promise is fulfilled. It receives the value passed to resolve().


// .catch() - it handle the promise uf it gets rejected. It means either an error is thrown in the promise function block or the reject method is called. 


// for one error
const promise2 = new Promise(() =>{
    throw new Error('error!')
});

promise2.catch(error =>{
    console.log(error);
})


//for another error
const promise3 = new Promise((resolve, reject) =>{reject("another error")});

promise3.catch(error =>{
    console.log(error);
})

//.finally is used when the code work is fullfilled, as it execute code afte the promise is settled, regardless of it outcome.

const promise4 = new Promise(()=> {throw new Error("error!")});

promise4.catch(error =>{
    console.log(error);
    //error
}).finally(()=>{
    console.log("Cleanu can be performed here or our execution is successful")
})


//fetching data from API using promise

function getData(){
    return fetch()
    .then(response =>{
        if(!response.ok){
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }
        return response.json();
    })
    .catch(error => console.log('There was a problem with the fetch operation: ' + error.message))
}

getData()
    .then(data => console.log(data))
    .catch(error => console.log(error))



// Primise chaining

new Promise(function(resolve, reject) {
    setTimeout(() => resolve(1), 1000); // First, resolve with 1 after 1 second
})
.then(function(result) { // On the resolved value of the first promise
    console.log(result); // 1
    return result * 2;
})
.then(function(result) { // On the resolved value of the second promise
    console.log(result); // 2
    return result * 2;
})
.then(function(result) { // On the resolved value of the third promise
    console.log(result); // 4
    return result * 2;
});



//use of async--await

const successPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve('Operation Successful');
    }, 1000);
});

async function run() {
    const result = await successPromise;
    console.log(result);
}

run();