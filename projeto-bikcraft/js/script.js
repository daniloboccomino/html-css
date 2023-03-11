let links = document.querySelectorAll('.header-menu a')
links.forEach(function (link) {
    let url = location.href
    let href = link.href
    if (url.includes(href)) link.classList.add('ativo')
})