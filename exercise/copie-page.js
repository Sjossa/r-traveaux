//copie la page sur
document.addEventListener("DOMContentLoaded", function() {
    var elementToInclude = document.querySelector('#includedContent');
    var fileToInclude = 'base_exercise.html';  // Spécifiez le nom du fichier à inclure

    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileToInclude, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                elementToInclude.innerHTML = xhr.responseText;
            } else {
                console.error("Erreur lors du chargement de " + fileToInclude + " : " + xhr.status + " - " + xhr.statusText);
            }
        }
    };
    xhr.send();
});


