class User{
    constructor (username){
        this.username = username
    }

    logMe(){
        console.log(`i am ${this.username} and i am loggedin`)
    }

    static createId(){   // static keyword is used t
        return (Math.random())
    }
}

// console.log(User.createId())   // only this will work when we use static "Static in JavaScript is a keyword that defines static methods and properties for a class. Static methods are called directly on the class itself, without creating an instance/object of the class. Static properties are accessed on the class, not on an instance of the class."

const lokesh = new User("lokesh")
// console.log(lokesh.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const lokesh2 = new Teacher("lokesh" , "lokesh@example.com")
// console.log(lokesh2.createId()) 