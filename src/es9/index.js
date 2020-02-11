const data = {
    name : 'Jugo', 
    age : 29, 
    country : 'Mexico' 
}

let {
    name,
    ...all
} = data;

console.log("name", name);
console.log("all", all);
