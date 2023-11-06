var myTextarea = document.getElementById("myCode");
var languageSelect = document.getElementById("languageSelect");
var myCodeMirror = CodeMirror.fromTextArea(myTextarea, {
    lineNumbers: true,
    mode: "javascript", // Mode par défaut (JavaScript)
});

function changeLanguage() {
    var selectedLanguage = languageSelect.value;
    myCodeMirror.setOption("mode", selectedLanguage);
}

function runCode() {
    var userCode = myCodeMirror.getValue(); // Récupère le code de CodeMirror
    var codeOutput = document.getElementById("codeOutput"); // Récupère l'élément où le code sera affiché
    codeOutput.textContent = userCode; // Affiche le code dans l'élément
}

