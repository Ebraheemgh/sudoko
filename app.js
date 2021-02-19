const asnwersSquare = document.getElementById("answerSquare");
const borderCells = document.querySelectorAll(".gameCell");
const answerCells = document.querySelectorAll(".answerCell");
const timer = document.querySelector(".timer");
var selectedCell;
var theSudoko;
var theAnswer;
var theCorrectAnswer;
//comment
function generateGame(level) {

    if (level === "easy") {
        theSudoko = easySudoko[0].sudoku;
        theAnswer = easySudoko[0].sudoku;
        theCorrectAnswer = easySudoko[0].asnswer;
    }
    if (level === "medium") {
        theSudoko = mediumSudoku[0].sudoku;
        theAnswer = mediumSudoku[0].sudoku;
        theCorrectAnswer = easySudoko[0].asnswer;
    }
    if (level === "hard") {
        theSudoko = hardSudoku[0].sudoku;
        theAnswer = hardSudoku[0].sudoku;
        theCorrectAnswer = easySudoko[0].asnswer;
    }
    for (let i = 0; i < borderCells.length; i++) {
        if (theSudoko.charAt(i) != '-') {
            borderCells[i].textContent = theSudoko.charAt(i);
            borderCells[i].style.color = "black";

        } else {
            borderCells[i].style.color = "blue";
            borderCells[i].addEventListener("click", (event) => {
                asnwersSquare.style.display = "inline";
                selectedCell = i;
            })

        }

    }
    for (let i = 0; i < answerCells.length; i++) {
        answerCells[i].addEventListener("click", (event) => {
            asnwersSquare.style.display = "none";
            if (i == 9) {
                borderCells[selectedCell].textContent = "";
                theAnswer = theAnswer.substring(0, selectedCell) + "-" + theAnswer.substring(selectedCell + 1);
            } else {
                borderCells[selectedCell].textContent = i + 1;
                theAnswer = theAnswer.substring(0, selectedCell) + (i + 1) + "" + theAnswer.substring(selectedCell + 1);

            }
            console.log(theAnswer);
        })
    }
    time();
}
generateGame(localStorage.getItem('level'));

function time() {
    let t = 1;
    var startTimer = setInterval(function() {
        timer.textContent = "Time=> " + parseInt(t / 60) + ":" + t % 60;
        t += 1;
    }, 1000);

}

function clear() {
    for (let i = 0; i < theSudoko.length; i++) {
        if (theSudoko.charAt(i) == "-") {
            borderCells[i].textContent = "";
        }
    }
    theAnswer = theSudoko;
}
document.getElementById("clearButton").addEventListener("click", (event) => {
    clear();

})

function submit() {
    if (theAnswer == theCorrectAnswer) { alert("you Win"); } else {
        alert("you lose");
    }
}

document.querySelector(".submit").addEventListener("click", (event) => {
    submit();
})

function hint() {

    let i = 0;
    while (theAnswer.charAt(i) != '-') {
        i++;

    }
    theAnswer = theAnswer.substring(0, i) + theCorrectAnswer.charAt(i) + "" + theAnswer.substring(i + 1);
    borderCells[i].textContent = theCorrectAnswer.charAt(i);


}

document.getElementById("hintButton").addEventListener("click", (event) => {
    hint();
})
document.getElementById("homeButton").addEventListener("click", (event) => {
    window.location.replace("index.html")
})