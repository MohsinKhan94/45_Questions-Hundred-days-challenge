
let magicians: string[] = ["harry", "jack", "david"];

function make_great():void{
    for(let i = 0; i < magicians.length; i++){
        magicians[i] = "the Great " + magicians[i];
    }
}

function show_magicians(magicians: string[]): void {
    console.log(magicians);
}

make_great();
show_magicians(magicians);
