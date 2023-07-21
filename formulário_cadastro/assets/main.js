const formulario = document.querySelector('#formu');
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const usuario = document.querySelector('#usuario')
const cpf = document.querySelector('#cpf')
const senha = document.querySelector('#senha')
const repetirSenha = document.querySelector('#repetirSenha')

const textName = document.querySelector('.textName')
const textSobrenome = document.querySelector('.textSobrenome')
const textcpf = document.querySelector('.textcpf')
const textUsuario = document.querySelector('.textUsuario')
const textSenha = document.querySelector('.textSenha')
const textRsenha = document.querySelector('.textRsenha')

const campos = document.querySelector('.campos')




formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Formuário não enviado')
})

formulario.addEventListener('submit', () => {

    if (campos.value === '') {
        alert('Preencha os campos!');
        campos.style.border = '1px solid red';
    }
    //NOME:

    if (nomeInput.value === '') {
        textName.innerHTML = 'Nome invalido';
        nomeInput.style.border = '1px solid red';

    } else if (nomeInput.value.length >= 3) {
        nomeInput.style.border = '1px solid darkgrey';
        textName.innerHTML = '';

    }
    else if (nomeInput.value.length < 3) {
        textName.innerHTML = 'pequeno'
        nomeInput.style.border = '1px solid red';

    }
    else {
        textName.innerHTML = 'off';
    }

    //SOBRENOME:

    if (sobrenomeInput.value === '') {
        sobrenomeInput.style.border = '1px solid red';
        textSobrenome.innerHTML = 'Sobrenome invalido'

    } else if (sobrenomeInput.value.length >= 3) {
        sobrenomeInput.style.border = '1px solid darkgrey';
        textSobrenome.innerHTML = '';

    }
    else if (sobrenomeInput.value.length < 3) {
        textSobrenome.innerHTML = 'pequeno';
        sobrenomeInput.style.border = '1px solid red';

    }
    else {
        textSobrenome.innerHTML = '';
    }

    //CPF:
    if (cpf.value.length < 14) {
        cpf.style.border = '1px solid red';
        textcpf.innerHTML = 'CPF invalido';
    }else if (cpf.value.length ===14){

    }


    //SENHA:
    if (senha.value === '') {
        senha.style.border = '1px solid red';
        textSenha.innerHTML = 'Senha invalida'
    } else if (senha.value < 8) {
        textSenha.innerHTML = 'Senha muito curta'
    } else if (senha.value != repetirSenha.value) {
        senha.style.border = '1px solid red'
        textRsenha.innerHTML = 'senhas não coincidem'
    }
    else if (senha.value === repetirSenha.value) {
        senha.style.border = '1px solid darkgrey';
        repetirSenha.style.border = '1px solid darkgrey'
    }


    //usuário:
    if (usuario.value === '') {
        usuario.style.border = '1px solid red';
        textUsuario.innerHTML = 'Usuário invalido'
    }
})

cpf.addEventListener('keypress', () => {
    let cpflength = cpf.value.length

    if (cpflength === 3) {
        cpf.value += '.'
    } else if (cpflength === 7) {
        cpf.value += '.'
    } else if (cpflength === 11) {
        cpf.value += '-'
    }
})





