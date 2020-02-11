const printData = ({name, age, country}) => {
	console.log( `DATA\n name:${name} age:${age} country: ${country}  ` );
}

const loadData = function  ( name, age, country  ){
	var name = name || 'Jugo';
	var age = age || 29;
	var country = country || 'Mexico';
	
	printData ( { name, age, country } );
}

const loadData2 = function ( name = 'Jugo', age = 29, country = 'Mexico' ) {
	printData ( { name, age, country } );
}

loadData();
loadData2();

const hello = require('./module');

hello();

function* helloWorld ( name ) {
	if ( true ) yield `Hello, ${name}`

	if ( true ) yield 'World.'
}

const generatorHello = helloWorld('jugo');

console.log(generatorHello.next());
console.log(generatorHello.next().value);
console.log(generatorHello.next());