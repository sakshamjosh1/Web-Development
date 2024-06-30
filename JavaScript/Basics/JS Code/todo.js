todos = [
    {
        id:1,
        text: 'Take out the Trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist Appt',
        isCompleted: false
    }
];

// for(let i=0; i< todos.length; i++) {
//     console.log(todos[i].text);
// }

// //another way

// for(let todo of todos){
//     console.log(todo.text);
// }


//ForEach, map, filter

todos.forEach(function(todo) {
    console.log(todo.next);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText);

const todoCompleted = todos.filter(function(todo){
    return todos.isCompleted == true;
});
console.log(todoCompleted);

//revise map,foreach,filter.....