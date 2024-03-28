//  An array containing numbers from 1 to 9.

const Numbers:number[] = [1,2,3,4,5,6,7,8,9];

for( const number of Numbers){
let ordinal:string;
if(number == 1){
    ordinal = "1st"
}else if (number == 2){
ordinal = "2nd"
}else if (number == 3){
    ordinal = "3rd"
}else {
    ordinal = `${number}th `;
}
console.log(ordinal)

}



