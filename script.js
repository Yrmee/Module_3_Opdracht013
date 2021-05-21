console.log("Guess the number game!");

const vraagOmNaam = prompt("Welkom! Wat is je naam?");
    alert("Hey " + vraagOmNaam + "! Zullen we beginnen?");

const ditGetalRaden = Math.floor(Math.random() * 25);
    // output to the console for debugging
    console.log(ditGetalRaden);

let pogingen = 0;
let correct = false;
let getalInvullen = 0;

while (pogingen < 5 && correct == false) {

    // Vraag om getal tussen 0 en 25 in te vullen
    getalInvullen = prompt("Voer een getal in tussen 0 en 25 om te beginnen met raden!");
    // Gekozen getal in console
    console.log("Gekozen getal: " + getalInvullen);

    if (getalInvullen == ditGetalRaden) {
        alert("Proficiat! Je hebt gewonnen!");
        correct = true;
    } else if (pogingen < 4) {
        alert("Helaas! " + getalInvullen + " is niet juist. Probeer het nog keer!");
    } else {
        alert("Helaas, niet gewonnen! Het juiste getal moest " + ditGetalRaden + " zijn.");
    }

    pogingen++;
    console.log("Aantal pogingen over: " + pogingen)
}

alert("Dit is het einde van het spel! Dag " + vraagOmNaam + ", tot de volgende keer!");