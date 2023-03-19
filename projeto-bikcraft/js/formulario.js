// simular resposta ao usuario para o envio de formulario
let form = document.querySelector('form')
let button = form.querySelector('button')

function formResponse(response) {
    let p = document.createElement('p')
    p.setAttribute('class', 'message font-1-s')
    if (response.ok) {
        p.innerHTML = 'Mensagem enviada com sucesso.'
        p.classList.add('success')
    } else {
        p.innerHTML = 'Erro ao enviar mensagem. Tente novamente mais tarde.'
        p.classList.add('error')
    }
    button.after(p)
}

form.addEventListener('submit', event => {
    // prevenir ação padrão do formulário para manter as validações de campos 'required'
    event.preventDefault()
    button.disabled = true
    button.innerText = 'Enviando'

    let data = new FormData(form)
    // simular o envio do formulário
    fetch('./', {
        method: 'post',
        body: data
    }).then(formResponse)
})