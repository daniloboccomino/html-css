let links = document.querySelectorAll('.header-menu a')
links.forEach(function (link) {
    let url = location.href
    let href = link.href
    if (url.includes(href)) link.classList.add('ativo')
})

let params = new URLSearchParams(location.search)
params.forEach(param => {
    let element = document.getElementById(param)
    if (element) element.checked = true
})

let perguntas = document.querySelectorAll('.perguntas button')
perguntas.forEach(pergunta => pergunta.addEventListener('click', event => {
    let resposta = document.getElementById(pergunta.getAttribute('aria-controls'))
    resposta.classList.toggle('ativa')
    pergunta.setAttribute('aria-expanded', resposta.classList.contains('ativa'))
}))