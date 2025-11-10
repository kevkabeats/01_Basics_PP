/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

-->zB: "Max trinkt Cola."

/* Getränke-Challenge */


const prompt = require('prompt-sync')({sigint: true});

let userName = prompt("Name?: ");
let userAge = parseInt(prompt("Alter?: "));

if (userAge >=0 && userAge <=5)
{
    console.log(userName + " trinkt Milch.");
}

else if (userAge >=6 && userAge <=12)
{
    console.log(userName + " trinkt Saft.");
}

else if (userAge >=13 && userAge <=17)
{
    console.log(userName + " trinkt Cola.");
}

else
{
    console.log(userName + " trinkt Wein.");
}