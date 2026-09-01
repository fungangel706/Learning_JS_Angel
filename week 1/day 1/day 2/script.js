function greet() {
    console.log( "Hello Angel" );
}

greet();

function greetUser(name) {
    console.log("Hello " + name);
}

greetUser("Angel");

function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result);

function rectangleArea(length, width) {
    return length * width;
}

function circleArea(radius) {
    return Math.PI * radius * radius;
}

function triangleArea(base, height) {
    return (base * height) / 2;
}

console.log("Rectangle:", rectangleArea(10, 5));
console.log("Circle:", circleArea(7));
console.log("Triangle:", triangleArea(8, 4));

let outside = "I am outside";

function testScope() {
    let inside = "I am inside";
    
    console.log(outside);
    console.log(inside);
}

testScope();

function counter() {
    let count = 0;

    return function() {
        count++;
        return count;
    };
}

let myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());