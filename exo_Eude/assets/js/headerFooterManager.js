
//<script scr="headerFooterManager.js"></script>

//        <header>
//            <special-header></special-header>
  //      </header>

 //               <special-footer></special-footer>

 /*
         <section id="contact">
            
            <form method="GET" action="">

                <p ><label>Sujet*</label><br><input type="text" name="subject" placeholder="ex: Titre" required /></p>
                <p><label>Message :</label><br>

                    <textarea placeholder="blabla" name="message"></textarea>
                </p>

                <p><label>nature de votre demande:</label><select>
                        <option>Inscription</option>
                        <option>Newsletter</option>
                </select></p>

                <button type="submit">Envoyer</button>

            </form>

        </section>
        
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="assets/style.css">
    <script defer src="./assets/js/custom-elements.js"></script>
    <title>Rando_Alsace</title>
</head>
        
        */

Document.write('This is written from JavaScript');
alert("coucou !");

class SpecialHeader extends HTMLElement {
    connectedCallBack(){
        this.innerHTML=`

            <div class="bg-img">
                    <div class="container">
                        <div class="topnav">
                                <a href="#home">Home</a>
                                <a href="page2.html">Page2</a>
                                <a href="#contact">Contact</a>
                                <a href="#copyright">Copyright</a>
                        </div>
                    </div>
            </div>
        <h1>Randonnées Alsace</h1>

        `        
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallBack(){
        this.innerHTML=`
           <footer>
                <p id="copyright">Copyright 2025 by Olivier</p>
            </footer>
        `       
    }
}

window.customElements.define('special-header', SpecialHeader)
window.customElements.define('special-footer', SpecialFooter)