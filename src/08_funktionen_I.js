
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
ausgabeNamen();

// Funktion
function ausgabeNamen()
{
    // interne Variable
    let firstName = "Steffen"
    console.log("Hallo " + firstName + "!");
}

console.log(firstName); // SCOPE!!