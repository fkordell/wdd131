document.addEventListener('DOMContentLoaded', function() {
    var menuButton = document.getElementById('menuToggle');
    var slidingMenu = document.getElementById('slidingMenu');
    var spans = menuButton.querySelectorAll('span');

    var toggleMenu = function () {
        slidingMenu.classList.toggle('open');  
  
        spans[0].classList.toggle('rotate-45');
        spans[0].classList.toggle('translate-y-1');
        spans[1].classList.toggle('opacity-0');
        spans[2].classList.toggle('rotate-45');
        spans[2].classList.toggle('translate-y-1');
    };
    menuButton.addEventListener('click', toggleMenu);
});

document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;