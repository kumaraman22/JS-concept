// Promise is the tool in js which is not available yet but will be resolved in some sort time in future

// We use promise in the better replacement in callback, as it con handle asynchrionous code well as Callback often leads to deploy nested code.
// This nested code gives an error, call as "callback hell"

getUser(id, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      //  You get the idea...
    });
  });
});

// Sencondly promise is the fundation of the async/await.

// To use promise we use "Promise" constructor, whicj takes a function known as executer function.

const promise = new Promise((resolve, reject) =>{
    //Asynchronous activity...
})

console.log(promise);


// The promise in js have threes state - pending , fullfill and reject.


/*
pending: initial state, not yet completed

fulfilled: operation completed successfully

rejected: operation failed

*/ 

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