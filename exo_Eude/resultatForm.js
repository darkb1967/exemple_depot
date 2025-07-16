    window.onload = function(event) {
        event.preventDefault();
        document.getElementById('nom').innerText = localStorage.getItem('nom');
        document.getElementById('prenom').innerText = localStorage.getItem('prenom');
        document.getElementById('age').innerText = localStorage.getItem('age');
        document.getElementById('email').innerText = localStorage.getItem('email');
        document.getElementById('genre').innerText = localStorage.getItem('genre');
        document.getElementById('competences').innerText = localStorage.getItem('competences');
        document.getElementById('exp').innerText = localStorage.getItem('exp');

    };

  function clickEvent(){

    if(confirm('Effacer les données et retouner au formulaire ?')) {
        localStorage.clear();
        window.location.href="./formulaire.html";
        /*window.location.reload();*/
    }
    

  };