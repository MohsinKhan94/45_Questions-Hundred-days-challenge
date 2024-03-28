
function make_sandwich(item:string[]){
    console.log("making your sandwich with :");
item.forEach(Element => console.log("- "+ Element));
console.log("enjoy your sandwich!")

}

make_sandwich(["ham","lettuce","cheese"]);
make_sandwich(["peanut butter","turkey","bacon"]);
make_sandwich(["jelly","lettuce"]);

