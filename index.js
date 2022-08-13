// Code your solutions in this file
for (let age =30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
}
function writeCards(names, event) {
    let message = [];
    for (let i =0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return message;
}
console.logwriteCards(["Ada", "Brendan", "Ali"], "birthday");
function countDown(number) {
         while (number >=0) {
                 console.log(number);
                 number--;
         }
}