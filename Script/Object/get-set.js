//Getters and Setters

let person = {
    firstName: 'Aman',
    lastName: 'Soni',

    get fullName(){
        return `${this.firstName} ${this.lastName}`;

    },

    set fullName(value){
        [this.firstName, this.lastName] = value.split('');
    }
};

console.log(person.fullName);
person.fullName = "Aman Kumar"
console.log(person.firstName);


// Why Ojject is imporant in js?
//Objects help you keep related data together, making your code cleaner and easier to understand. Instead of having many separate variables, you can group related data into a single object.

let book = {
   title: "JavaScript: The Good Parts",
   author: "Douglas Crockford",
   pages: 176
};

console.log(book)

// Once you create an object, you can reuse it throughout your code. This simplifies the management of common data and functionality.

function displayUserInfo(user) {
   console.log(`Name: ${user.name}, Age: ${user.age}`);
}

let user = {
   name: "Alice",
   age: 25
};

displayUserInfo(user)


//Object can also contain fun

let personns ={
    name: 'Aman',
    greeting: function(){
        console.log(`Helloe, my name is $(this.name)`);
    }
    
};
personns.greeting();

