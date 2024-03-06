let personName : string = '';

personName = prompt('what is your name ?') || '';

let lowerCase : string = personName.toLowerCase();
let upperCase : string = personName.toUpperCase();
let titlecase : string = personName.split(' ').map(word  => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
if( personName !== null && personName !== ''){  
let lowerCase : string = personName.toLowerCase();
alert(`hello ${personName}, here your name in :lowerCase:${lowerCase}
upperCase : ${upperCase}
titlecase : ${titlecase}`)}
else{
    alert(' please fill your name !')
}
