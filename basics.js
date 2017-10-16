console.log( 'Hello, world!' );

var favoriteFood = 'Pizza';

console.log( favoriteFood );

favoriteFood = 'Broccoli';

console.log( favoriteFood );

// camelCase
var myFavoritePizzeria = 'Lucali';
var pizzeria = 'Lucali';

// snake_case
var my_favorite_pizzera = 'Lucali';
var pizzeria = 'Lucali';

// dynamic types means that variables can hold any type
var myContainer = 42;

myContainer = 'hello';


console.log(2 + 2);
// console.log(  4  );
console.log(4 - 2);
console.log(3 * 2);
console.log(6 / 2);


console.log( 2 ** 10 );
console.log( 10 ** 5 );

console.log( 71271683 % 7 === 0 );

var someNumber = 12178931;
console.log( someNumber % 2 === 0 );

var x = 0;

x++;

++x;

// i use this the most
x += 1;

x = x + 1;

console.log( x );


var i = 10 + 5 * 2 ** 3 / 4 - 6;
// var i = 10 + 5 *    8   / 4 - 6;
// var i = 10 +     40     / 4 - 6;
// var i = 10 +          10    - 6;
// var i =       20            - 6;
// var i =               14       ;

console.log( i );


var expressionOne = ((2 * 2) + 5) * 6;
// var expressionOne = (  (4)   + 5) * 6;
// var expressionOne = (     9     ) * 6;
// var expressionOne = 54;
console.log(expressionOne);

var expressionTwo = ((2 * 2) + (5 * 3)) - 5;
// var expressionTwo = (  (4)   + (5 * 3)) - 5;
// var expressionTwo = (  (4)   +   (15) ) - 5;
// var expressionTwo = (       19        ) - 5;
// var expressionTwo = 14;
console.log(expressionTwo);

// console.log(expressionTwo);

var expressionThree = (5 * 5) / (5 * 5);
// var expressionThree =   (25) / (5 * 5);
// var expressionThree =   (25) / (25);
// var expressionThree = 1;
console.log(expressionThree);

var expressionFour = 5 * 5 - 5 * 4;
// var expressionFour = 25    - 5 * 4;
// var expressionFour = 25    -   20;
// var expressionFour = 5;
console.log(expressionFour);
