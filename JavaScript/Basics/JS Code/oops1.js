// Constructor Function
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear(); 
}


Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}
    




// Instantiate object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Smith', '3-6-1970');
// console.log(person1);
// console.log(person2.firstName);
// console.log(person2.dob); 
// console.log(person2.dob.getFullYear());
// console.log(person1.getBirthYear());
// console.log(person1.getFullName());
console.log(person2.getFullName);
console.log(Person);