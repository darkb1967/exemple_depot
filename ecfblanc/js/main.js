
const credits = document.getElementById('credits');

credits.textContent = 'Banor Olivier';

const username = document.getElementById('username');
const result = document.getElementById('result');
const button = document.getElementById('validate');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


function Traitement(event){
    result.textContent ="";  
    let userCaracLenght = (username.value.length);
    let passLenght = (password1.value.length);
    let pass = (password1.value);
    let pass2 = (password2.value);

    if (userCaracLenght < 3) {
        
        result.textContent ="Nom d'utilisateur trop court (3 caractères minimum)";

    } else {
        if (passLenght < 12){
        result.textContent ="le mot de passe est trop court (12 caractères minimum)";
        } else {
            if (pass !== pass2){
            result.textContent ="les mots de passe ne correspondent pas";
            } else {
                document.body.style.backgroundColor = "green";
                result.textContent ="le formulaire est valide !";
            }
        
        }

    }


    event.preventDefault();   
}

button.addEventListener('click', Traitement)


