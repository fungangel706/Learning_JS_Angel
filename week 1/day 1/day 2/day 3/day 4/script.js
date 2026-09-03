// Day 4 Objects 
let student = {
    name: "Angel",
    age: 20,
    course: "software Engineering"
};

console.log(student);
console.log (student.name);
console.log(student.course);
console.log(student.age);

student.greet = function() {
    return "Hello, my name is " + this.name;
};

console.log(student.greet());

let contacts = [
    {
        name: "Angel",
        phone: "677000000",
        email: "angel@example.com"
    },
    {
        name: "precious",
        phone: "678000000",
        email: "precious@example.com"
    }
];

console.log(contacts);

console.log(contacts[0].name);
console.log(contacts[1].phone);