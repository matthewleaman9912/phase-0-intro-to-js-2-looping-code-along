// Code your solutions in this file

const stringNames = ["Guadalupe", "Ollie", "Aki"];
const eventName = "surprise";

function writeCards(stringNames, eventName) {
    const newArray = [];
    for(let i = 0; i < stringNames.length; i++) {
        newArray.push("Thank you, " + stringNames[i] + ", for the wonderful " + eventName + " gift!");
    }
    return newArray;
}

function countDown(number) {
    let i = number;
    while (i > 0 - 1) {
        console.log(i);
        i--;
    }
}