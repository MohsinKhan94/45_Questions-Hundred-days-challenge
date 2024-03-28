// Array containing favorite pizza names
const pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Printing pizza names using a for loop
console.log("Pizza Choices:");
for (let pizza of pizzas) {
    console.log(pizza);
}

// Printing sentences using pizza names
console.log("\nFavorite Pizza Statements:");
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

// Additional sentence expressing love for pizza
console.log("\nI really love pizza!");

