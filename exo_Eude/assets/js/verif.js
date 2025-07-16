
window.addEventListener("load", () => {

  const form = document.querySelector("#myform");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let nom = document.querySelector('#nom').value;
    let prenom = document.querySelector('#prenom').value;
    const age = document.querySelector('#age').value;
    const email = document.querySelector('#email').value;
    let exp = document.querySelector('textarea[name="exp"]').value;

    // Échapper les caractères spéciaux pour éviter XSS
    nom = nom.match(/([a-zA-Z- àâÂäÄéÉèÈêÊëËîÎïÏôÔöÖ]){3,20}/g);
    /*nom = nom.replace(/</g, "").replace(/>/g, "");*/
    /*prenom = prenom.replace(/</g, "&lt;").replace(/>/g, "&gt;");*/
 
    /*const pass = document.querySelector('#mdp').value;*/
    let pass = document.getElementById("mdp").value;  // Récupère la valeur du mot de passe
    /*let genre = document.getElementById('homme').value;*/

    if (document.getElementById('homme').checked ){
        localStorage.setItem('genre', "homme");
    } else if (document.getElementById('femme').checked ){
        localStorage.setItem('genre', "femme");
    }

    let checkboxes = document.querySelectorAll('input[name="competences"]:checked');
    let output = [];
    checkboxes.forEach((checkbox) => {
        output.push(checkbox.value);
    });
    localStorage.setItem('competences', JSON.stringify(output));  


    localStorage.setItem('nom', nom);
    localStorage.setItem('prenom', prenom);
    localStorage.setItem('age', age);
    localStorage.setItem('email', email);
    localStorage.setItem('exp', exp);

   /* localStorage.setItem('nom', JSON.stringify(nom));
    localStorage.setItem('prenom', JSON.stringify(prenom));
    localStorage.setItem('age', JSON.stringify(age));
    localStorage.setItem('email', JSON.stringify(email));*/

    if (pass != "yes"){
          alert('pas le bon mot de passe !')
    } else
      {
        if(confirm('Validez le formulaire et voir le résultat ?')){
          window.location.href="./resultat.html";
        }
          
      }
  
  });

});

document.getElementById('myForm').addEventListener(
    'submit', function(e) { 
    var email = document.getElementById('email').value;
    if (!email.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$")) 
    { e.preventDefault(); alert('Email invalide'); } });


function togglePwd(id)
      {
      var x = document.getElementById(id);
          if (x.type === "password") 
        {
            x.type = "text";
        } else 
        {
              x.type = "password";
        }
      }
    

  
            
