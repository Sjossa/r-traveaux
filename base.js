document.addEventListener("DOMContentLoaded", function() {
    var elementToInclude = document.querySelector('#includedContent');
    var fileToInclude = 'base.html';  // Spécifiez le nom du fichier à inclure

    var xhr = new XMLHttpRequest();
    xhr.open('GET', fileToInclude, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            elementToInclude.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});
