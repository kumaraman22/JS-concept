//JavaScript's memory management is primarily handled through garbage collection, which operates behind the scenes. The primary goal is to find data objects in the application's memory that are no longer accessible or needed and free up that memory.

//The main concept behind JavaScript's garbage collection is reachability. An object is considered reachable if it is accessible or usable somehow, meaning there's a way to access it starting from the root (global objects) through a series of references.

let user = {
    name : 'john',
} //user is the root

let admin = user;
user = null; //admin is only reference

console.log("user:", user);
console.log("admin name:", admin.name);


