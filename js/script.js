let bigImg = document.querySelector('.big-img img');

function showImg(pic) {
    bigImg.src = pic

}

// mostra foto grande
const fotoGrande = document.getElementById('fotogrande')
const nome = document.getElementById('nome')

function mostrarfoto(parametro) {
    fotoGrande.src = `imagen/${parametro}.png`
    nome.innerHTML = parametro.toUpperCase()
}