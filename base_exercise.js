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

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai"); // Choisissez un thème
editor.getSession().setMode("ace/mode/javascript"); // Choisissez un mode


