var a = document.getElementById("area")
a.addEventListener("click",clicar)
a.addEventListener("mouseenter",entrar)
a.addEventListener("mouseout",sair)

function clicar() {
    a.innerHTML = "Clicou!"
    a.style.background = "green"
}
function entrar() {
    a.innerHTML = "Entrou!"
    a.style.background = "blue"
}
function sair() {
a.innerHTML = "Saiu!"
a.style.background = "red"
}
