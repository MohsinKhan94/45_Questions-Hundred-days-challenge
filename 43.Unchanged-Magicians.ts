let magicians: string[] = ["harry", "jack", "david"];

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}

function show_magicians(magicians: string[]): void {
    console.log(magicians);
}

// Make a copy of the original array
let magiciansCopy: string[] = [...magicians];

// Modify the copy
let modifiedMagicians: string[] = make_great(magiciansCopy);

// Display both arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Modified Magicians:");
show_magicians(modifiedMagicians);

