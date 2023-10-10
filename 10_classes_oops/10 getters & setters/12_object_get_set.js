const user = {
    _email: "lokeh@lokesh.com",
    _password : "12345",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    },
}

const Lokesh = Object.create(user)
console.log(Lokesh.email)
console.log(Lokesh.password)