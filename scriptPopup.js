function openPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function participarSorteio() {
    const cupons = [
        "ROMANCE60",
        "AVENTURA50",
        "FICCAO45",
        "SUSPENSE55",
        "DRAMA40",
        "COMEDIA30",
        "ACAO35",
        "FANTASIA25",
        "TERROR50",
        "HISTORIA55",
        "MISTERIO45",
        "NOVELA40"
    ];

    const cupomSorteado = cupons[Math.floor(Math.random() * cupons.length)];

    document.getElementById("cupomResultado").innerHTML = `Seu cupom: ${cupomSorteado}`;
}