const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // it basically make a single array if there'll be any nested array
console.log(real_another_array);



console.log(Array.isArray("lokesh"))
console.log(Array.from("lokesh"))  // make an array using the string given in the parameter section
console.log(Array.from({name: "lokesh"})) // interesting (this will return an empty array)

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // merges all the variables given in the parameter and make a single array

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]  Array.from() to create a new array by applying a mapping function (x) => x + x to each element of the original array [1, 2, 3]. This mapping function effectively doubles each element's value, resulting in the expected output: Array [2, 4, 6].