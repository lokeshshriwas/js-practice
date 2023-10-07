const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username; //this. is written so that it can be defined as a variable (so that there is no collapse between parameter name and variable name)
    this.loginCount = loginCount; 
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("hitesh", 12, true) // adding new (a constructor function) make a new instance every time new constructor function is used
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// constructor function new (multiple instances)// 

// step 1: empty object created
// step 2: constructor function called due to new keyword pack the parameters into itself
// step 3: inject the arguments into new keyword object
// step 4: displayed to us



// instanceof

function Car(make, model, year) {
this.make = make;
this.model = model;
this.year = year;
}

const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true

// In this example, `auto` is an instance of `Car` and `Object`. Therefore, `auto instanceof Car` and `auto instanceof Object` both return `true`.