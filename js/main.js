document.querySelector('#dodaj').onclick = function () {
    let paragraph = document.querySelector('#tekst');
    paragraph.textContent = 'Zmiana treści po kliknięciu "DODAJ"';
}

document.querySelector('#usun').onclick = function () {
    let paragraph = document.querySelector('#tekst');
    paragraph.textContent = ' ';
}