
function make_shirt(size:string = "large",text:string = "i love typescript."){
    console.log(`Printing ${size} shirt with message: "${text}"`);
}
// Printing large shirt with default message
make_shirt();

// Printing medium shirt with default message
make_shirt("medium");


// Printing shirt of any size with a custom message
make_shirt("small","typescript rocks!")


