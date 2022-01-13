let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false 
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width= '100%'

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3){
       txt.innerHTML = "Nome inválido!"
       txt.style.color = "red"
    } else {
        txt.innerHTML = ""
        nomeOk = true
    }
}

function validaEmail () {
    let txtEmail = document.querySelector("#txtEmail")
    
    if(email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido!"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = ""
        emailOk = true
    }
}

function validaAssunto () {
    let txtAssunto = document.querySelector("#txtAssunto")
    
    if(assunto.value.length >=100) {
        txtAssunto.innerHTML = "Máximo 100 caracteres"
        txtEmail.style.color = "red"
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar () {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha formulário corretamente antes de enviar!")
    }
}