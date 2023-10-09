  // class User{
        //     constructor(username, email, password){
        //         this.username = username
        //         this.email = email
        //         this.password = password
        //     }

        //     encryptPassword(){
        //         return `${this.password}abc`
        //     }

        //     changeUserName (){
        //         return `${this.username.toUpperCase()}`
        //     }
        // }

        // const userOne = new User("lokesh", "lokesh@example.com", 123)
        // console.log(userOne.encryptPassword())
        // console.log(userOne.changeUserName())

        // behind the seen

        function User(username, email, password){
            this.username = username
            this.email = email
            this.password = password
    }

    User.prototype.encryptPassword = function(){
        return `${this.password}abc`
    }

    User.prototype.changeUserName = function (){
        return `${this.username.toUpperCase()}`
    }

    const userOne = new User("lokesh", "lokesh@example.com", 123)
    console.log(userOne.encryptPassword())
    console.log(userOne.changeUserName())
