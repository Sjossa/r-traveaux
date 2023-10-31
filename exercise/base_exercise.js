//idem
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


//page
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

//monaco Editor
require.config({ paths: { 'vs': 'https://cdn.jsdelivr.net/monaco-editor/0.24.0/min/vs' }});
require(['vs/editor/editor.main'], function () {
    var editor = monaco.editor.create(document.getElementById('editor'), {
        value: [
            '<html>',
            '<head>',
            '\t<title>My HTML Page</title>',
            '</head>',
            '<body>',
            '\t<h1>Hello, Monaco Editor!</h1>',
            '</body>',
            '</html>'
        ].join('\n'),
        language: 'html'
    });
});

function runCode() {
    var userCode = monaco.editor.getModels()[0].getValue();
    // Vous pouvez traiter le code ici, par exemple l'exécuter ou le sauvegarder.
    // userCode contiendra le code que les élèves ont saisi.
}






