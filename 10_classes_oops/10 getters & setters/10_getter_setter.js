class user{
    constructor(email, password){
        this.email = email 
        this.password = password
    }

    // prefered to user _email in the constructor function to because using that js ingnore the _ property and don't give error regarding to the exceed override situation

    get password(){
        return `${this._password}lokesh`.toUpperCase()
    } 
    set password(ps){
        this._password = ps 
    }
    get email(){
        return `${this._email}`.toUpperCase()
    } 
    set email(em){
        this._email = em 
    }
}

// ++++++++++++++++++++++ discovered ++++++++++++++++++++++++++++  //

// to set the value of what will user get we havve to provide the same name to set and fet because if we give set a different var then it will not going to pass the value setted to the getter means it will print undefined in this case

// when writing any getter and setter the return var must be different from the parameter passed due to exceed override sitution we should declar var different from the name of parameter and the property of the object 

// method name will be similar to the parameters and properties name but the return property of the getters and setters must be different

const lokesh = new user("lokesh@example.com", "abc")
console.log(lokesh.password);
console.log(lokesh.email);
