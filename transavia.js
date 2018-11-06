/* ------------------- Form uitklappen -----------------*/
// selecteer het element uit html
var button = document.querySelector('main section button');
// button direct na main

function klapOpen() {
    // console.log('hoi');

    var formulier = document.querySelector('form[name=filter]');
    // selecteert form uit html

    formulier.classList.toggle('active');
}

// het oor luistert aanroepen
button.addEventListener('click', klapOpen);
// aanroepen



/* -------------- MICRO INTERACTIE OPSLAAN/LIJST ------------*/

var opslaanknop = document.querySelector('img[alt=opslaangroen]');

function Opslaan() {

    var blauwkleuren = document.querySelector('opslaanknop');
    opslaanknop.src = "iconen/mijnlijsticoon2blauw.png";
    opslaanknop.classList.add('fadeIn');

    var toevoegenLijst = document.querySelector('li:nth-child(3) a img');
    /* id geven */
    toevoegenLijst.id = "opslaanPlus";
    opslaanPlus.src = "iconen/mijnlijsticoonPlus.png";
}

opslaanknop.addEventListener('click', Opslaan);


/* ---------------- MICRO INTERACTIE DOWNLOADEN ---------------- */

var downloadknop = document.querySelector('img[alt=downloadgroen]');

function Downloaden() {

    var laden = document.querySelector('downloadknop');
    downloadknop.src = "iconen/Downloadenversie2.gif";

    var toevoegenDownload = document.querySelector('li:nth-child(2) a img');
    toevoegenDownload.id = "downloadPlus";
    downloadPlus.src = "iconen/Mijnlijst.gif";

}

downloadknop.addEventListener('click', Downloaden);












