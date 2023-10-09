class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
 }

//  The "extends" keyword is used in class declarations or class expressions to create a class that is a child of another class.
 class Teacher extends User {
    constructor(username, email, password){
        super(username); // similar working as call(this, --) but this "super" is used when we use class a keyword 
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`)
    }
 }

const userOne = new Teacher("lokesh", "lokesh@example.com", 1234)
userOne.addCourse()

const chai = new User("chaisahab")
chai.logMe()
// chai.addCourse() 

// this will through an error because inhertance occurs through parent to child not from child to parent

