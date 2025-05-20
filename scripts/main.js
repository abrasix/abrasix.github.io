const _imagem = document.querySelector("img");
let _carrossel = [
    "dados/imagens/fundo-site0.jpg",
    "dados/imagens/fundo-site1.jpg",
    "dados/imagens/fundo-site2.jpg",
    "dados/imagens/fundo-site3.jpg",
    "dados/imagens/fundo-site4.jpg"
]
let _numCarrossel = 0

let _botãoUsuario = document.querySelector("button");
let _subtitulo = document.querySelector("h2");

_imagem.onclick = () => {
    _numCarrossel++
    _imagem.setAttribute("src", _carrossel[_numCarrossel]);
    if (_numCarrossel > 3) { _numCarrossel = 0 };
    _numCarrossel;
};

_botãoUsuario.onclick = () => {
    setUserName();
};

function setUserName() {
    const _usuario = prompt("Por favor digite o seu nome.");
    if (!_usuario) {
        setUserName();
    } else {
        localStorage.setItem("name", _usuario);
        _subtitulo.textContent = `Olá ${_usuario}, seja bem vindo(a) ao primeiro site Abrasix`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const _usuarioGuardado = localStorage.getItem("name");
    _subtitulo.textContent = `Olá ${_usuarioGuardado}, seja bem vindo(a) ao primeiro site Abrasix`;
}
