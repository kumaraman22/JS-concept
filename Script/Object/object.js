let user = {
    name: 'Aman',
    age: 30
};

user.isAdmin = true; //Add new props
console.log('isAdmin added: ', user)

user.name = 'Akshay'; //Add new user
console.log('name: ', user)

delete user.age; //remove age props
console.log('age deleted :', user);

//destructuring a object

const person = {firstName: 'john', lastName: 'Doe' ,age: 30};
const{firstName, lastName, age} = person;

console.log(firstName, lastName, age);

// rest operator or spread syntax (...)

const persons = {firstName: 'john', lastName: 'Doe' ,ages: 30};
const{ages, ...nameDetails} = persons;

console.log(nameDetails);