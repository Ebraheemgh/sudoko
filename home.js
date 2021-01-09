document.getElementById("easyButton").addEventListener("click", (event) => {
    localStorage.setItem('level', 'easy');
    if (!localStorage.getItem('suduku')) {
        localStorage.setItem('suduku', 0);
    } else {
        localStorage.setItem('suduku', localStorage.getItem('suduku') % easySudoko.length);

    }

    window.location.replace("game.html")
})
document.getElementById("mediumButton").addEventListener("click", (event) => {
    localStorage.setItem('level', 'medium');
    if (!localStorage.getItem('suduku')) {
        localStorage.setItem('suduku', 0);
    } else {
        localStorage.setItem('suduku', localStorage.getItem('suduku') % easySudoko.length);

    }

    window.open("game.html")
})
document.getElementById("hardButton").addEventListener("click", (event) => {
    localStorage.setItem('level', 'hard');
    if (!localStorage.getItem('suduku')) {
        localStorage.setItem('suduku', 0);
    } else {
        localStorage.setItem('suduku', localStorage.getItem('suduku') % easySudoko.length);

    }

    window.location.replace("game.html")
})