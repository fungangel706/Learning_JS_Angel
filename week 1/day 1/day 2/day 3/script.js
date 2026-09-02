let fruits = ["Apple", "Banana",  "orange", "mango" ];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[2]);

fruits.push("pineaple");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

let someFruits = fruits.slice(1, 3);
console.log(someFruits);
console.log(fruits);

fruits.splice(1, 1);
console.log(fruits);

let cart =["Shoes", "Bag"];
console.log("My cart:", cart);
cart.push("Watch");
console.log("Added Watch:", cart);
cart.pop();
console.log("Removed last item:", cart);
cart.unshift("shirt");
console.log("Added to beggining:", cart);

let newCart = cart.slice(0, 2);
console.log("First two items:", newCart);

cart.splice(1, 1);
console.log("After splice:", cart)



