   // const tinderUser = new Object()
   const tinderUser = {}

   tinderUser.id = "123abc"
   tinderUser.name = "Sammy"
   tinderUser.isLoggedIn = false

   // console.log(tinderUser);

   const regularUser = {
       email: "some@gmail.com",
       fullname: {
           userfullname: {
               firstname: "hitesh",
               lastname: "choudhary"
           }
       }
   }

   // console.log(regularUser.fullname.userfullname.firstname);

   const obj1 = {1: "a", 2: "b"}
   const obj2 = {3: "a", 4: "b"}
   const obj4 = {5: "a", 6: "b"}

   // const obj3 = { obj1, obj2 }
   // const obj3 = Object.assign({}, obj1, obj2, obj4)  

   // **** used {} so that the new object must be generated in any empty new object because if we don't assign target the 1st source becomes the default target  object.assign({target, source}) ****//

   const obj3 = {...obj1, ...obj2}  // most used to merge the object and array is to use spread operators using ...object1, ...object2
   // console.log(obj3);


   const users = [
       {
           id: 1,
           email: "h@gmail.com"
       },
       {
           id: 1,
           email: "h@gmail.com"
       },
       {
           id: 1,
           email: "h@gmail.com"
       },
   ]

   users[1].email
   // console.log(tinderUser);

   // console.log(Object.keys(tinderUser)); // returns keys of the given object in array formate
   // console.log(Object.values(tinderUser)); // returns values in the given object in array formate
   // console.log(Object.entries(tinderUser)); // returns key value pairs in a seperate array 

   // console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // use hasOwnProperty function to identify do the following object includes the given parameter


   const course = {
       coursename: "js in hindi",
       price: "999",
       courseInstructor: "hitesh"
   }

   // course.courseInstructor

   const {courseInstructor: instructor} = course 
   //***** this is called object destructuring using this syntatic sugar we prevent our time writing the full code like course.courseInstructor by destructuring if we just use instructor as we assigned above we'll get the same result. *******//

   // console.log(courseInstructor);
   console.log(instructor);


   // ******* about JSON notation and api calls **********//

   // {
   //     "name": "hitesh",
   //     "coursename": "js in hindi",
   //     "price": "free"
   // }

   [
       {},
       {},
       {}
   ]
