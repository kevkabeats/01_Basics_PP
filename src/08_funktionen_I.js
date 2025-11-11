
/***** Funktionen 01 *****/
// 1. Kapselung von Codeblöcken


// Funktionsaufruf | call
/* test();

// Funktionsrumpf | callee
// Funktionsdeklaration
function test()
{
    console.log("Hallo, Kevin!");
} */
// Es ist sinnvoller zuerst die Funktion zu deklarieren und dann aufzurufen.



/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

// call
// ausgabeNamen();

// Funktion
/* function ausgabeNamen()
{
    // interne Variable
    let firstName = "Steffen"
    console.log("Hallo " + firstName + "!");
} */

// console.log(firstName); // SCOPE!!



/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

/* ausgabeNamen2("Bruno") // Argument --> Daten für Parameter
ausgabeNamen2("Katrin")
ausgabeNamen2("Lena")

function ausgabeNamen2(firstName) // Parameter
{
    console.log("Hallo " + firstName + "!");
} */



/***** Funktionen 02c *****/
// 2c. Mehrere Parameter / Argumente

/* ausgabeNamen3("Bruno","Stonz") // Argument --> Daten für Parameter
ausgabeNamen3("Katrin","Hammer")
ausgabeNamen3("Lena","Schmandt")

// Argumente werden von prompt() geliefert --> Input
const prompt = require('prompt-sync')({sigint: true});
ausgabeNamen3(prompt("Vorname: "),prompt("Name: "));


function ausgabeNamen3(firstName, familyName) // Parameter
{
    console.log("Hallo " + firstName + " " + familyName + "!");
} */



/***** Funktionen 03a *****/
// 03a. Vorbereitung -Trennen der Verantwortlichkeiten
// Postulat: one function = one job (uncle Bob)
// SRP single responsibility principle

ausgabeNamenSRP("Bruno","Stonz")

function ausgabeNamenSRP(firstName, familyName)
{
    // 1. Verantwortlichkeit: String composing
    const GAP = " ";
    let outputSTR = "Hallo" + GAP + firstName + GAP + familyName + "!";
    
    // 2. Verantwortlichkeit: Ausgabe
    console.log(outputSTR);
}