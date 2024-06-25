const Person  = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    hobbies: ['movies','music','dance'],
    address: {
        city: 'Boston',
        street: '50 Main street',
        state: 'MA'
    }
}

console.log(Person);
console.log(Person.hobbies[1]);
console.log(Person.address.street);

const { firstname, lastname, address: {city} } = Person;
console.log(firstname);
console.log(city);

Person.email = 'JohnDoe@gmail.com';
console.log(Person)