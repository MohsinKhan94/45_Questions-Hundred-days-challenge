
let guests:string[] = ["adnan","ali","azam khan"];
console.log("great i have found a bigger dinnrer table");

// lets add more guests

guests.push("alam khan");
guests.splice(guests.length / 3, 0, "abdullah");
guests.unshift("mursaleen");


guests.forEach(guests => {
    console.log(`dear ${guests}, would you like to join my party!`)
});




