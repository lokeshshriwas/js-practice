
        // every thing in javascript is an object like function is also a function and a object it can be functional like function or an object if we want to

        function multipleBy5(num){
            return num*5
        }

        multipleBy5.power = 2 // we can treat any function as a oject also because all the things in the javascript follows the same path of becoming an object then interpreted

        console.log(multipleBy5(5))
        console.log(multipleBy5.power)
        console.log(multipleBy5.prototype) // expected retur {}

        function createUser (username, score){
            this.username = username
            this.score = score
        }

        createUser.prototype.increment = function(){
            this.score++
        }

        createUser.prototype.printMe  = function (){
            console.log(`score is ${this.score}`)
        }

        const lokesh = new createUser("lokesh2802", 100)
        const amit = new createUser("amit", 90)

        lokesh.printMe()

        /*

        Here's what happens behind the scenes when the new keyword is used:

        A new object is created: The new keyword initiates the creation of a new JavaScript object.

        A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

        The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

        The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

        */