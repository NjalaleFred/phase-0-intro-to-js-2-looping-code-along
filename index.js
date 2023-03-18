const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event){
    const messages = []
    for (let i = 0; i < names.length; i++){
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messages.push(message);
    }
    return messages;
}

console.log(writeCards(names, "graduation"));

function countDown(){
    let countdown = 10;
    while (countdown > -1){
        console.log(countdown--);
    }
}
