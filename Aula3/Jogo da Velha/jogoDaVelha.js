var play = 1;
var player = play % 2 == 0 ? 2 : 1;

function jogada(id) {
    player = play % 2 == 0 ? 2 : 1;
    if (document.getElementById(id).innerHTML === "") {
        if (player == 1) {
            let img = document.createElement("img");
            img.src = "x.png";
            document.getElementById(id).appendChild(img);
        }
        else if (player == 2) {
            let img = document.createElement("img");
            img.src = "o.png";
            document.getElementById(id).appendChild(img);
        }
    }
    if (play >= 5) {
        verificaPosicao();
    }
    play++;
}

function verificaPosicao() {
    let pos1 = document.getElementById("1").innerHTML;
    let pos2 = document.getElementById("2").innerHTML;
    let pos3 = document.getElementById("3").innerHTML;
    let pos4 = document.getElementById("4").innerHTML;
    let pos5 = document.getElementById("5").innerHTML;
    let pos6 = document.getElementById("6").innerHTML;
    let pos7 = document.getElementById("7").innerHTML;
    let pos8 = document.getElementById("8").innerHTML;
    let pos9 = document.getElementById("9").innerHTML;

    if ((pos1 === pos2 && pos2 === pos3 && pos1 !== '') ||
        (pos4 === pos5 && pos5 === pos6 && pos4 !== '') ||
        (pos7 === pos8 && pos8 === pos9 && pos7 !== '') ||
        (pos1 === pos4 && pos4 === pos7 && pos1 !== '') ||
        (pos2 === pos5 && pos5 === pos8 && pos2 !== '') ||
        (pos3 === pos6 && pos6 === pos9 && pos3 !== '') ||
        (pos1 === pos5 && pos5 === pos9 && pos1 !== '') ||
        (pos3 === pos5 && pos5 === pos7 && pos3 !== '')) {
        gameOver(1);
    }
}

function gameOver() {
    alert("Game Over. O jogador " + player + " venceu!");
}

function limpaTela() {
    location.reload();
}