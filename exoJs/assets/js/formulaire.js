/*const prenom = document.getElementById('prenom');
const age = parseInt(document.getElementById('age').valueasNumber);
const valider = document.querySelector('valider');

valider.addEventListener() */

/************************************ */

const myDate = document.getElementById('myDate');
const calculate = document.getElementById('calculate');
const result = document.getElementById('result');
let today;

function calculateAge(){

    result.textContent="";

    let userDate = myDate.value;
    userDate = Date.parse(userDate);
    userDate = new Date(userDate);
    today = new Date();

    if(userDate >= today){
        result.textContent ="Erreur : Sélectionnez une date dans le passé.";
        return;
    }

    let dateFr = userDate.toLocaleDateString('fr-FR');
    let timeFr = userDate.toLocaleTimeString('fr-FR');

    /*const date = new Date();
    const options = { timeZone: 'Europe/Paris', timeZoneName: 'short' };
    const formatter = new Intl.DateTimeFormat('fr-FR', options);
    console.log(formatter.format(date));*/
    
    console.log(timeFr);
    
    
    result.innerHTML = "vous etes née le <span>"+dateFr+"</span> à <span>"+ timeFr+"</span>";

    let dateDiff = today - userDate;
    dateDiff = dateDiff / 1000/ 60 / 60 / 24 / 365.25;
    dateDiff = Math.floor(dateDiff);

    result.innerHTML += "<br><br> Il s'est écouler "+dateDiff+" année(s) depuis votre naissance";

};

calculate.addEventListener('click', calculateAge);
