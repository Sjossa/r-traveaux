function openPage(pageName, elmnt, color) {
    var contenue, exercise;
    contenue = document.getElementsByClassName("contenue");
    exercise = document.getElementsByClassName("exercise");
    for (var i = 0; i < contenue.length; i++) {
        contenue[i].style.display = "none";
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






