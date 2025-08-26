//JavaScript, essential for web development, has timing functions that run code at set times. Among these, setTimeout and setInterval are especially useful for scheduling tasks.

setTimeout(()=>{
    console.log("jrll")
}, 3000);

setInterval(()=>{
    console.log('hfrht')
}, 5000)

const timeoutId = setTimeout(() => {
  console.log("This won't run if clearTimeout() is called in time");
}, 3000);

// Cancel the setTimeout
clearTimeout(timeoutId);