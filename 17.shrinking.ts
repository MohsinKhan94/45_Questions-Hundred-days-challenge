let guests: string[] = [
    "adnan",
    "ali",
    "azam khan",
    "abdullah",
    "mursaleen",
];
let removing_Guest:string[] = ["adnan","ali","azam khan"];

console.log(`Sorry, ${guests}, I can't invite you to dinner.`);

guests.splice(0,3);

console.log(guests);




