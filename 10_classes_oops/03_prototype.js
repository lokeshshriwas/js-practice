let myName = "lokesh     "
let lastName = "shriwas     "

// console.log(nyName.trueLength) // we are going to create this further in the code

let myHeros = ["thor", "CaptianA", "Ironman"]

let heroPowers ={
    thor : "hammer",
    CaptianA : "sheild",
    Ironman : "suit",

    getThorPower: function (){
        console.log(`thor's power is ${this.thor}`)
    }
}


Object.prototype.lokesh = function(){
    console.log("i am every were")
}

Array.prototype.heyLokesh = function(){
    console.log("i am also in array")
}

// heroPowers.heyLokesh()  // expected an error because prototypal inheritance occurs from parent to child means (null -> object -> array,function,string etc) not from child to parent its like "genes"

heroPowers.lokesh()
myHeros.heyLokesh()
myHeros.heyLokesh() 

// the above all three code will run because of the prototypal inheritance object will be executed in array,string,function etc but the function "heyLokesh" is exclusively defined for array so it can only be used in array


// +++++++++++++++ INHERITANCE +++++++++++++++ //

const  User = {
    name: "lokesh",
    email: "lokesh.example.com"
}

const teacher = {
    makeVideos : true
}

const teachingSupport ={
    isAvailable : false
}

const TAsupport ={
    makeAssignments : "js-assignments",
    fulltime: false,
    __proto__ :teachingSupport // this means we are giving the assess of the value of teachingSupport to TAsupport

}

teacher.__proto__= User // this means we are giving the access of the value of user object to teacher object using .__proto__ this all are old syntax of giving prototypal access


// ++++++++++++ MODERN SYNTAX OF GIING ACCESS USING PROTOTYPES ++++++++++++// 

Object.setPrototypeOf = (teachingSupport, TAsupport)


String.prototype.trueLength = function (){
    console.log(this)
    console.log(`true of value of the string is ${this.trim().length}`)
}

 myName.trueLength()
 lastName.trueLength()