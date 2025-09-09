//Both these property  is used to manage objecct properties effectively.

// help us to set or get the value of an object's properties.

// get and set keyword is used

let obj = {
    get propName(){
        // it will execute when obj.propName us read
    },
    set propName(value){
        //we need to give value to this
    }
};


/*Getters and setters offer several benefits, including:

Encapsulation: They help encapsulate object properties, protecting them from unwanted external modification.

Validation: You can add validation rules to ensure the property values meet certain criteria before setting them.

Computed Properties: They allow the creation of properties that are computed based on other property values.*/ 

let rectangle = {
    width: 4,
    height: 5,

    get area(){
        return this.width * this.height;
    }
};

console.log(rectangle.area);



//User Object with Age Validation 

let user = {
  _age: 30,

  get age() {
    return this._age;
  },

  set age(value) {
    if (value < 0 || value > 100) {
      console.log("Please enter a valid age.");
      return;
    }
    this._age = value;
  }
};

console.log(user.age); // 30
user.age = 35;
console.log(user.age); // 35
user.age = -10; // Please enter a valid age.