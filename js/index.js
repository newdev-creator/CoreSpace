let turn = 0;



function handleOui() {
    turn++
    console.log(turn);
    if (turn === 1) {
        window.confirm ('Le PNJ effectue une action de Combat Rapproché contre la cible.');
        location.reload();
        //document.querySelector('.main__paragraphe').textContent = 'Le PNJ effectue une action de Combat Rapproché contre la cible.';
    }
    if (turn === 2) {
        document.querySelector('.main__paragraphe').textContent = ('Le PNJ a-t-il une statistique de tire ?')
    }
    if (turn === 3) {
        document.querySelector('.main__paragraphe').textContent = ('La statistique de Combat à Distance du PNJ est-elle supérieure à sa statistique de Combat Rapproché ?')
    }
    if (turn === 4) {
        document.querySelector('.main__paragraphe').textContent = ('Le PNJ effectue un Combat à Distance contre la cible.')
    }
    if (turn === 5) {
        window.confirm ('Le PNJ se déplace vers la cible par le chemin le plus court.')
        location.reload();
        //document.querySelector('.main__paragraphe').textContent = ('Le PNJ se déplace vers la cible par le chemin le plus court.')
    }
    if (turn === 6) {
        window.alert ('Le PNJ effectue un Combat à Distance contre la cible.')
        location.reload();
        //document.querySelector('.main__paragraphe').textContent = ('Le PNJ effectue un Combat à Distance contre la cible.')
    }
}




function handleNon() {
    turn++
    console.log(turn);
    if (turn === 1) {
        document.querySelector('.main__paragraphe').textContent = 'La cible est-elle en LdV du PNJ ?';
    }
    if (turn === 2) {
        window.confirm ('Le PNJ se déplace vers la cible par le chemin le plus court.')
        location.reload();
        //document.querySelector('.main__paragraphe').textContent = 'Le PNJ se déplace vers la cible par le chemin le plus court.';
    }

    if (turn === 3) {
        window.confirm ('Le PNJ se déplace vers la cible par le chemin le plus court.')
        location.reload();
        //document.querySelector('.main__paragraphe').textContent = 'Le PNJ se déplace vers la cible par le chemin le plus court.';
    }
    if (turn === 4) {
        document.querySelector('.main__paragraphe').textContent = 'Le PNJ peut-il atteindre ET attaquer la cible durant ce tour ?';
    }
    if (turn === 5) {
        document.querySelector('.main__paragraphe').textContent = 'Le PNJ s\'est-il déjà déplacé ce tour-ci ?';
    }
    if (turn === 6) {
        document.querySelector('.main__paragraphe').textContent = 'Le PNJ se déplace vers la cible par le chemin le plus court.';
    }
}

const btnOui = document.querySelector('.main__btnOui').addEventListener('click', handleOui);
const btnNon = document.querySelector('.main__btnNon').addEventListener('click', handleNon);

