// Equality with strings
console.log("Tests for equality and inequality with strings");
console.log("TEA"=="TEA"); //TRUE 
console.log("TEA"!="TEA"); //FALSE

// Tests using the lower case function

let city = "karachi";
let lowercase_city = city.toLowerCase();
console.log("Tests using the lower case function");
console.log(city == lowercase_city); //TRUE
console.log(city != lowercase_city);// FALSE

//Numerical tests involving equality and inequality

let a = 49;
let b = 39;
console.log("numerical test");
console.log(a > b); // TRUE
console.log(a < b );// FALSE


// Tests using "and" and "or" operators

// Using "and" operator
console.log("Using & operator")
let c = 7;
console.log(c < 10 && c > 5); // TRUE
console.log(c > 8 && c > 0); // FALSE



// Using "or" operator
console.log("Using || operator")
let d = 3;
console.log(d < 0 || d > 10); // FALSE
console.log(d < 8 || d <  1 ); // TRUE


// Test whether an item is in a array
console.log("test whether an item is in a array");
let color = ["black","blue","red"];
console.log(color.includes("black"));// TRUE


// Test whether an item is not in a array
console.log("test whether an item is not in a array");
let color2 = ["black","blue","red"];
console.log(color.includes("green"));// FALSE