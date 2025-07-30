const myList = document.querySelector("#myList");
const myTable = document.getElementById('mytable');
const nname = document.getElementById('nname');
const lastName = document.getElementById('lastname');
const result = document.getElementById('result');
const people =['Mike Dev', 'John Makenzie', 'Léa Grande', 'michelle torr']

listeNomPrenom(); //pour la premiere liste
createTable(); // creation du tableau et remplissage


function addNomPrenom() {
  // récupérer la valeur du champ input
  let newNameValue = nname.value;
  let newLastnameValue = lastName.value;

  /*let verifLetter = new RegExp("^[a-zA-Z]*$","g");*/
  let verifLetter = new RegExp("^[a-zA-Z]*$");
  if (!verifLetter.nname){
    alert("que des lettres s'il vous plaît !")
  }
  let newFirstLast = mynameValue+" "+ firstnameValue;

  people.push(newFirstLast);

  refreshUi();
}
function deleteTab(event){
  let btn = event.target; // récupérer le bouton qui a déclenché l'évènement
  let position = btn.dataset.position;
  people.splice(position, 1); // supprimer un élément à partir de sa position. (voir aussi filter())
  listeNomPrenom();
  createTable();
}

  function listeNomPrenom() {
  
    myList.innerHTML = "";

    for (let i=0; i < people.length; i++){
      let li = document.createElement("li"); // créer une balise <li>
      li.textContent = people[i]; // ajoute la valeur courante du tableau dans la balise <li>
      myList.append(li); // insère la balise <li> dans la <section id="myList">
    }
    
  }

  function createTable() {

    mytable.innerHTML = "";

    let headers = ["Nom", "Prenom", "Email", "Supprimer"];
    let table = document.createElement("table"); 
        
    for(let i = 0; i < people.length; i++) {
        let row = table.insertRow(i);
        let btn = document.createElement("button");

        btn.textContent = "X";
        btn.type = "button";
        btn.dataset.position = i;
        btn.addEventListener("click", deleteTab);

        row.insertCell(0).innerHTML = people[i].split(" ")[0];
        row.insertCell(1).innerHTML = people[i].split(" ")[1];
        row.insertCell(2).innerHTML = people[i].split(" ")[0]+"."+people[i].split(" ")[1]+"@exemple.com";
        row.insertCell(3).append(btn);

      }

    let header = table.createTHead();
    let headerRow = header.insertRow(0);
    for(let i = 0; i < headers.length; i++) {
        headerRow.insertCell(i).innerHTML = headers[i];
    }

    mytable.appendChild(table);
}
