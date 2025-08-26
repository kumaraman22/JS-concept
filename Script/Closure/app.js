//Closures allow for data encapsulation and the creation of private variables

//They enable functions to retain access to variables from their containing (enclosing) scope even after that scope has finished executing


function outerFunction() {
    let outerVariable = 'I am from outer scope';

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closure = outerFunction();
closure();