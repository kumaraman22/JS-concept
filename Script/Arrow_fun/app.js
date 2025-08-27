const num = (a,b) => a+b;

console.log(num(2,5));

//The arrow function version is not only shorter but also eliminates the need for the function keyword and braces when there's a single expression.


//No paramenter
const greet = () => console.log('Hello world')
greet();

//Single parameter

const num1 = n => n * n;
console.log(num1(5))


// Multiple parameter

const multiply = (a, b) => (a*b);
console.log(multiply(3,6));


// Multiple lines

const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Division by zero.');
  }
  return a / b;
};
console.log(divide(4, 2))



// Using "this" keyword

function Person(){
    this.age = 0;

    this.in = setInterval(()=>{
        this.age++;
        console.log(this.age);
    }, 1000);

    setTimeout(() =>{
        console.log("done");
        clearInterval(this.in);
    }, 4000)
}

const p = new Person();

//In traditional function expressions, this could refer to a global object or undefined in strict mode, requiring workarounds like var self = this;. Arrow functions eliminate this confusion.

//Despite their advantages, there are scenarios where arrow functions may not be the best choice:


//Methods in Objects: When functions are used as methods in objects, using an arrow function can lead to issues with this:

//Arrow functions cannot be used as constructors. Therefore, they're not suitable for defining prototype methods.


//We can wrap an object with curly vraces

const getObject = () => ({ name: 'John', age: 30 });
console.log(getObject());


//Can direcly be used like this

((a, b) => {
  console.log(a + b); // Outputs: 3
})(1, 2);