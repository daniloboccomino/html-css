// ativar links do menu
let links = document.querySelectorAll('.header-menu a')
links.forEach(function (link) {
    // verifica para cada link se a url contem o href do link
    let url = location.href
    let href = link.href
    if (url.includes(href)) link.classList.add('ativo')
})

// ativar itens do orçmento
// recupera os parametros da url para definir qual opção vir selecionada
let params = new URLSearchParams(location.search)
params.forEach(param => {
    let element = document.getElementById(param)
    if (element) element.checked = true
})

// mostrar/esconder perguntas ao evento de 'click'
let perguntas = document.querySelectorAll('.perguntas button')
perguntas.forEach(pergunta => pergunta.addEventListener('click', event => {
    let resposta = document.getElementById(pergunta.getAttribute('aria-controls'))
    resposta.classList.toggle('ativa')
    pergunta.setAttribute('aria-expanded', resposta.classList.contains('ativa'))
}))

// alterar a ordem de visualização das imagens de acordo com a imagem clicada
let bikcraftGallery = document.querySelector('.bicicleta-imagens')
let bikcraftImages = document.querySelectorAll('img')
bikcraftImages.forEach(img => img.addEventListener('click', event => {
    let media = matchMedia('((min-width: 460px) and (max-width: 800px)) or (min-width: 920px)')
    // colocar a imagem clicada na primeira posição em destaque
    if (media.matches) bikcraftGallery.prepend(img)
}))

// ativar SimpleAnime aos elementos que possuem as configurações do plugin
if (window.SimpleAnime) new SimpleAnime()