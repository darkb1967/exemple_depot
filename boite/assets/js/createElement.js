const newItem = document.getElementById("newItem");
const addItem = document.getElementById("addItem");
const clearItems = document.getElementById("clearItems");
const myList = document.querySelector("#myList");

const myIdeas = ['Element ref1', 'Element Ref', 'Element ref+1'];

/*
myIdeas.push('Element Push'); // push = ajoute un élément à la fin du tableau
myIdeas.unshift('Element Unshift'); // unshift = ajoute un élément au début du tableau
myIdeas.shift();// supprimer le premier du tableau
myIdeas.pop(); // Supprimer le dernier élément du tableau
console.log(myIdeas);
*/


/**
* Ajoute la valeur saisie dans le champ texte à la section myList
* */
function addIdea() {
  // récupérer la valeur du champ newItem
  let newItemValue = newItem.value;
  myIdeas.push(newItemValue);

  refreshUi();
}

/**
 * supprimer un element tableau données
 * @param {PointerEvent} event 
 */
function deleteIdea(event){
  let btn = event.target; // récupérer le bouton qui a déclenché l'évènement
  let position = btn.dataset.position;
  myIdeas.splice(position, 1); // supprimer un élément à partir de sa position. (voir aussi filter())

  refreshUi();
}

/**
 * pour vider entierement la liste
 */
function viderList() {
  myList.innerHTML = '';
  myIdeas.length = 0;
  console.log(myIdeas);
}


function  refreshUi() {
  
  myList.innerHTML = "";

  for (let i=0; i < myIdeas.length; i++){
          let p = document.createElement("p"); // créer une balise <p>
          p.textContent = myIdeas[i]; // ajoute la valeur courante du tableau dans la balise <p>
          myList.append(p); // insère la balise <p> dans la <section id="myList">

          let btn = document.createElement("button");
          btn.textContent = "Supprimer";
          btn.type = "button";
          btn.dataset.position = i;
          btn.addEventListener("click", deleteIdea);
          p.append(btn);
  }
  clearItems.addEventListener('click', viderList);

}

    /**
  * valider champs addIdeas avec la touche "entrée"
  * */
  newItem.addEventListener("keydown", (event) => {
    // (event.key === "Enter" ou )
    if (event.key === 'Enter') {
      event.preventDefault();
      addItem.click(); }       
  });








