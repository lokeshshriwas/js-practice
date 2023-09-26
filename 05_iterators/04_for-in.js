const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key);
}


// map is not iteratable using forin loop it is possible using for of loop 


// we can iterate map using for of loop but providing parameter as a array no as normal map function
const myMap = new Map([
["key1", "value1"],
["key2", "value2"],
["key3", "value3"]
]);

for (const key of myMap.keys()) {
    console.log(key ,myMap.get(key));
}