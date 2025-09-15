// Handle assynchronouos task
// They are functions passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// A callback helps in maintaining the flow of operations, especially when dealing with operations that might take an unknown amount of time (like fetching data from a server).

function completeTask(message, callback){
    console.log("Starting task...")
    callback(message);
}

function finishTask(message){
    console.log("Task completed: ", + message);

}

completeTask("Fetching data complete", finishTask)