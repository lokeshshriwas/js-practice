// singleton
// Object.create

        // object literals

        const mySym = Symbol("key1") // this is how we declare any symbol

        const JsUser = {
            name: "Hitesh",
            "full name": "Hitesh Choudhary",
            [mySym]: "mykey1", // if we want to put any symbol in object then we must have to use [] to declare the same
            age: 18,
            location: "Jaipur",
            email: "hitesh@google.com",
            isLoggedIn: false,
            lastLoginDays: ["Monday", "Saturday"]
        }

        console.log(JsUser.email)
        console.log(JsUser["email"])
        console.log(JsUser["full name"])
        console.log(JsUser[mySym])  

        JsUser.email = "hitesh@chatgpt.com"

        // Object.freeze(JsUser) // function freeze is used to avoid further changes in the object it restricts to update or to change the object 

        JsUser.email = "hitesh@microsoft.com"
        // console.log(JsUser);

        JsUser.greeting = function(){
            console.log("Hello JS user");
        }
        JsUser.greetingTwo = function(){
            console.log(`Hello JS user, ${this.name}`); // backticks are also known as string interpolation
        }

        console.log(JsUser.greeting());
        console.log(JsUser.greetingTwo());