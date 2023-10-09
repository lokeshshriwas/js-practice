let descriptor = Object.getOwnPropertyDescriptor(Math, "PI") // throught this getOwnPropertyDescriptor method we can check why some constant hard coded values are not changable and why

console.log(descriptor)

// ++++++++++ this code will not work because pi is a hard coded constant value ++++++++++++++++ //

// console.log(Math.PI)
// Math.PI = 5;
// console.log(Math.PI)

let info = {
    name: "lokesh",
    lastName: "shriwas",
    education: "graduated"
}

console.log(Object.getOwnPropertyDescriptor(info, "name"))

info = Object.defineProperty(info, "name", {
    // writable: false,
    enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(info, "name"))

for (const [key, value] of Object.entries(info)) {
        console.log(`${key}: ${value}`)
}