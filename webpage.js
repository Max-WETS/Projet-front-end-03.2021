window.onload = function() {

var triggeredAlert = false;
var introJeuPage = false;

var pageCont = document.getElementById('global-wrapper');
var CV = document.getElementById('preview-cv');
var maskCont = document.getElementById('mask');
var buttonGame = document.getElementById('button');

maskCont.addEventListener('mouseover', transitionJeu);

function transitionJeu() {

    if (!triggeredAlert) {
    
        alert('Oups, quelque chose cloche...');

        setTimeout(CV.style.opacity = 0.1, 1000);
        buttonGame.style.visibility = 'visible';

        triggeredAlert = true;
    }

    else {
        
        if (!introJeuPage) {
        

        window.location.hash = '#buffer-projects';

            buttonGame.addEventListener('click', function() {

            var divJeu = document.getElementById('divJeu');
            divJeu.style.opacity = "1.0";
            divJeu.style.display = "inherit";  

            introJeuPage = true;

            });
        }
    }

    
}

}