
/* Berechnung Alter */

// Deklaration
let ageJohn, ageMark;
const birthYearJohn = 1990;
const birthYearMark = 1990;

// Berechnung Alter Iteration 1
/* let year = 2025;
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;
 */
// Berechnung Alter Iteration 2
/* let date = new Date();
let year = date.getFullYear();

console.log("Datum: " + date);
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark; */

// Berechnung Alter Iteration 3
let year = new Date().getFullYear();
console.log("Jahr: " + year);
ageJohn = year - birthYearJohn;
ageMark = year - birthYearMark;

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);

// Deklaration
let isJohnOlder;

// Vergleich
isJohnOlder = ageJohn > ageMark; // Test auf Ungleichheit
isJohnEqual = ageJohn == ageMark; // Test auf Gleichheit

// Ausgabe
console.log("Ist John älter als Mark? " + isJohnOlder);
console.log("Ist John genau so alt wie Mark? " + isJohnEqual);