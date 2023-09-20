const newString = new String("lokesh shriwas")
const stringTwo = `what is you name by the way my name is ${newString}`
const local1 = "lokesh"
const local2 = "lokesh"
const newArray = [1,2,3, 1, 15 , 1,1,1,1,6,70]
const newArrayTwo = [1,2,3,4,5,6,70]
console.log(newString)
const icons = '☃★♲'

        console.log(stringTwo.includes('shriwas')) // this shows that does the given string is in the data or not basically it'll check for it.
        
        console.log(stringTwo)
        
        console.log(newArray.at(3)) // returns the value in the given index
        
        console.log(stringTwo.charAt(5)) // provide the value of the given  index
        
        console.log(stringTwo.charCodeAt(1)) // representing the UTF-16 code of the given index's value
        
        console.log(stringTwo.codePointAt(1)) // same representation but mainly for the icons (non-negative in nature)
        
        console.log(newArray.concat(newArrayTwo)) // concates arrays with each other
        
        console.log(stringTwo.endsWith('shriwas')) // if the string is ending with the given value as parameter then it'll return boolean
        
        console.log(stringTwo.lastIndexOf("shriwas")) //returns the index last occurrence of a value in a string
        
        console.log(stringTwo.length) //returns the length of the string
        
        console.log(local1.localeCompare(local2)) // compares and matches the strings with each other

        console.log(newString.replaceAll("lokesh" , "shriwas")) // act like replace but it act for each and every matching string replace them all

        console.log(stringTwo.search("name")) //returns the index were the string is been find

        console.log(stringTwo.split()) //convert string into array

        console.log(stringTwo.substring(0 ,4)) //Extracts characters from a string, between two specified indices (positions)