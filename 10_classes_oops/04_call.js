function setUserName(username){
    // complex DB calls
    this.username = username
}

function createUser(username, email, password){
    setUserName.call(this, username) // this is just a reference of the function it is not called yet
    // .call is the function which explicity calls the function in the current context and this, is used so that it can be said or applied for the current context without it the code is incorrect

    this.email = email;
    this.password = password;
}

const user = new createUser("lokesh", "lokesh@example.com", 1234)
console.log(user)