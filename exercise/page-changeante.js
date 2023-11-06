//fonctionnnement page
window.addEventListener('DOMContentLoaded', function () {
    openPage('Accueil', document.querySelector('.exercise'), 'darkslateblue');
});
function openPage(pageName, elmnt, color) {
    var contenue, exercise ;
    contenue = document.getElementsByClassName("contenue");
    exercise = document.getElementsByClassName("exercise");
    for (var i = 0; i < contenue.length; i++) {
        contenue[i].style.display = "";
        exercise[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}