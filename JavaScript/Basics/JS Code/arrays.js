/* Multi 
   line comment 
*/

// Arrays- variables that hold multiple values

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['Apple','Oranges','Banana','Mangoes'];
fruits[4]='Pear';
fruits.push('Strawberry');
fruits.unshift('Grapes');
fruits.pop();

console.log(fruits);
console.log(fruits[1]);
console.log(Array.isArray(fruits));
console.log(Array.isArray('Hello'));
console.log(fruits.indexOf('Oranges'));

