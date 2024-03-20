let guest_list :string[]=['KAMRAN TESSORI','SIR AMEEN','KAMRAN TESSORI'];
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Mr.' +guest_list[i] + ' ,\n\nit is our pleasure to invite you in our party. \t\n\n thank You!')
}
    
let absent_Guest :string = 'KAMRAN TESSORI';

let new_Guest :string = "SIR ISFHAN AHMED";

guest_list[0]= new_Guest;

for (let i=0; i<guest_list.length; i++ ){

console.log('Dear Mr.'+ guest_list[i] + ' \n\nit is our pleasure to invite you in our party. \t\n\n thank you!' );

}

console.log(`Mr. ${absent_Guest} is not coming to the party.`)
