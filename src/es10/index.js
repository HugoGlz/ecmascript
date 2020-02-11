let array = [ 
                1,
                2,
                3,
                [
                    1,
                    2,
                    3,
                    [
                        1,
                        2,
                        3
                    ],
                ],
            ]

console.log(array.flat(0))
console.log(array.flat(1))
console.log(array.flat(2))

let array2 = [1,2,3,4,5];

let array3 = array2.flatMap( value => {
    return [value, value*2]
})

console.log(array3);


let extraBlankSpaces = "     jugo     ";

console.log({
    extraBlankSpaces,
    clean_start_version: extraBlankSpaces.trimStart(),
    clean_end_version: extraBlankSpaces.trimEnd(),
    clean_version: extraBlankSpaces.trim()
})

try{ 
    throw new Error("MORI")
}catch ( error ){
    console.log(error)
}


/* Todavia no lo soporta muy bien */
try{ 
    throw new Error("MORI 2")
} catch {
    console.log(error)
}


let jsonInArray = [
    [ "name", "jugo"],
    [ "age", 29],
    [ "country", "Mexico"]
]

let json = Object.fromEntries(jsonInArray);

console.log(jsonInArray,json);