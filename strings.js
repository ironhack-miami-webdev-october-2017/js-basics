var myName = 'Nizar';

var myName = "Nizar";


console.log( "Nizar's favorite pizzeria is Lucali" );
console.log( 'Nizar\'s favorite pizzeria is Lucali' );

console.log( 'And then he went "sup" and gave me $5');
console.log( "And then he went \"sup\" and gave me $5" );

var myName = 'Student';
console.log( 'Hello ' + myName );
// console.log( 'Hello ' - myName );

myName += 's';

console.log(myName);

console.log( myName.length );
console.log( myName[0] );
console.log( myName[1] );
console.log( myName[2] );
console.log( myName[3] );

// console.log( myName[-1] );


var favoritePhrase = "Don't be evil";

// gives you the position of a piece of a string
console.log( favoritePhrase.indexOf('evil') );
console.log( favoritePhrase.indexOf('EVIL') );
console.log( favoritePhrase.indexOf('Don') );
console.log( favoritePhrase.indexOf('pizza') );

// tells you whether a piece is in the string or not (true/false)
console.log( favoritePhrase.includes('evil') );
console.log( favoritePhrase.includes('EVIL') );
console.log( favoritePhrase.includes('Don') );
console.log( favoritePhrase.includes('pizza') );


var myString = 'pizza ';
// repeats the string that many times
console.log(myString.repeat(5));
// doesn't change the original
console.log(myString);

console.log( '*'.repeat(5) );
