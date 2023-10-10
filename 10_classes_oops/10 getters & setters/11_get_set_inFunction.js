function User(email, username){
    this._email = email
    this._username = username

    Object.defineProperty(this, 'email', {
        get: function(){
            return `${this._email}`.toUpperCase()
        },
        set: function (value){
            this._email = value;
        }
    })
    Object.defineProperty(this, 'username', {
        get: function(){
            return `${this._username}`.toUpperCase()
        },
        set: function (value){
            this._username = value;
        }
    })
}

const lokesh = new User("amit@amit.com", 'amit')
console.log(lokesh.username)