
/***** Codechallenge III *****/

// ControlFlow / Funktionen

// Erstellen Sie ein JS-Programm, dass einen Bestellvorgang bei MD
// simuliert. Orientieren Sie sich dabei am Struktogramm in der Datei
// bestellung.json  - Datei bitte in den online-Editor STRUCTOG laden
// https://ddi.education/struktog/



// Zum Eingeben von Prompts
const prompt = require('prompt-sync')({sigint: true}); // Zum Eingeben von Prompts

// Variablen
let food = "";
let drink = "";
let auswahl

// Begrüßung als Funktion

console.log("Willkommen bei McDonald's! Ihre Bestellung bitte?");
console.log("1: Hamburger, 2: Cheeseburger, 3: Chilliburger");

// Bestellung Burger
auswahl = prompt("Welchen Burger möchten Sie? (1-3): ");

if (auswahl == "1")
{
    food = "Hamburger";
}
else if (auswahl == "2")
{
    food = "Cheeseburger";
}
else if (auswahl == "3")
{
    food = "Chilliburger";
}
else
{
    console.log("Ungültige Auswahl. Bitte starten Sie die Bestellung erneut.");
    process.exit(); // Beendet das Programm
}

// Frage nach Getränk
auswahl = prompt("Möchten Sie ein Getränk dazu? (j/n): ");

if (auswahl.toLowerCase() == "j")
{
    // Bestellung Getränk
    console.log("1: Cola, 2: Fanta, 3: Sprite");
    auswahl = prompt("Welches Getränk möchten Sie? (1-3): ");

    if (auswahl == "1")
    {
        drink = "Cola";
    }
    else if (auswahl == "2")
    {
        drink = "Fanta";
    }
    else if (auswahl == "3")
    {
        drink = "Sprite";
    }
    else
    {
        console.log("Ungültige Auswahl. Bitte starten Sie die Bestellung erneut.");
        process.exit(); // Beendet das Programm
    }
    console.log("Ihre Bestellung: " + food + " mit " + drink + ".");
}
else
{
    console.log("Ihre Bestellung: " + food);
}

// Verabschiedung ohne Funktion
console.log("Vielen Dank für Ihre Bestellung! Auf Wiedersehen");