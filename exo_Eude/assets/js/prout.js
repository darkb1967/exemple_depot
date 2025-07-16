let inc=0;

const result = document.getElementById('result');
const tailleplus = document.getElementById('tailleplus');
const taillemoins = document.getElementById('taillemoins');
const an = document.getElementById('an');
const button = document.getElementById('button');
const nbtext = document.getElementById('nbtext');
const stext = document.getElementById('stext');
const input = document.querySelector("input");
const fsize = document.getElementById("fsize");


input.addEventListener("input", (event) => {
    let fsizenb = parseInt(document.getElementById("fsize").valueAsNumber);


        if(fsizenb >= 48){
            fsizenb = 16;
            nbtext.innerHTML=fsizenb;
            input.value=16;
        }else if(fsizenb <=8){
            fsizenb = 16;
            nbtext.innerHTML=fsizenb;
        };

        /*fsize.value=fsizenb;*/
        nbtext.innerHTML=fsizenb;
        stext.style.fontSize = fsizenb +"px";
 });

tailleplus.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = parseInt(nbtext.innerHTML);

    nbtext.innerHTML=++nombre;

    if(nombre >= 48 || fsize >= 48){
        nombre = 16;
        nbtext.innerHTML=nombre;
       
    }
    
    stext.style.fontSize = nombre +"px";
     input.value=nombre;

});

taillemoins.addEventListener('click', function(event) {
    event.preventDefault();
    let nombre = parseInt(nbtext.innerHTML);

    nbtext.innerHTML=--nombre;

       if(nombre <= 8 || fsize <= 8){
        nombre = 16;
        nbtext.innerHTML=nombre;

    }
    
    
    stext.style.fontSize = nombre +"px";
     input.value=nombre;

});

an.addEventListener('click', function(event) {

    event.preventDefault();
    result.innerHTML = ++inc;

});

button.addEventListener('click', function(event) {
        event.preventDefault();
        inc=0;
        result.innerHTML = inc;
});
