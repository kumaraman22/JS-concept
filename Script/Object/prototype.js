// Every JavaScript object has a prototype. A prototype is a template object from which the object inherits methods and properties. This allows for powerful inheritance model

let animal = {
    isAlive: true
};

let dog = Object.create(animal);
dog.bark = function(){
    console.log("woof");
};

console.log(dog.isAlive);
dog.bark();