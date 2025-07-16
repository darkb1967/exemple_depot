var menuToggle = document.getElementById('menuToggle');

var menu = document.getElementById('menu');
var menuHead = document.getElementById('menu-head');

menuToggle.addEventListener('click', function(event) {

    if(menu.style.display == 'none') {
        menu.style.display = 'block';
        menuHead.style.display = 'block';
    } else {
        menu.style.display = 'none';
        menuHead.style.display = 'none';
    }

});