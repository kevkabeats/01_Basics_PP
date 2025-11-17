/***** Erinnerung: Arrays *******/

/* let arr;
arr = ["Ich","bin","Max"];
output(arr);
output(arr[0]);
output("------------"); */

// nested arrays - Prinzip: [[[]]]
// nested arrays  - hier: [[],[]]
/* arr =   [
            ["Ich","bin","Max"],
           ["Ich","bin","Moritz"]
        ];
      
 output(arr);
 output(arr[0]);
 output(arr[0][0]+ " " + arr[1][2]);
 output(arr[1][0]);
 output("------------");

// nested loop
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        output("Index i: " + i + " Index j: " + j);
        output(arr[i][j]);       
    }
} */


/***** Objekte 1 Daten/Funktionen *******/

/* let person = 
            {
                firstName: "Max",
                familyName: "Mustermann",
                salary:[1500,1600],
                permission: true,
                sayHello: function()
                {   
                    return "Hallo";
                },
                sayHello2: function()
                {   
                    return "Hallo, ich bin " + this.firstName + " " + this.familyName;
                }
            };
output(person);
output("------------");
output(person.firstName);
output(person.familyName);
output("------------");
output(person.salary[1]);
output("------------");
output(person.permission);

const txt = person.sayHello() + ", ich bin " + person.firstName +
            " und verdiene " + person.salary[1] + " p.a.";

output(txt);
output("------------");

const txt2 = person.sayHello2() + " und verdiene " + person.salary[1] + " p.a.";
output(txt2); */



/***** Objekte 2 - Hierarchie *******/
// Tiefer, tiefer - Irgendwo in der  gibt es ein Licht // K.Bush
// Der Baikalsee ist mit 1642 m der tiefste See der Erde. ...
// deep - deeper - deepest
// nested object {{}}

let baikal = {
    value:"10m",
    deep: {
        deeper: {
            temperature:"4 Grad Celsius",
            deepest:"Das Licht - auf 1642m!"
        }
    }
}

output(baikal);
output(baikal.value);
output(baikal.deep.deeper.temperature);
output(baikal.deep.deeper.deepest);



// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}