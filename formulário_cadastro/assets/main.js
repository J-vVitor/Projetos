const formulario = document.querySelector('#formu');
const nomeInput = document.querySelector('#nome')
const sobrenomeInput = document.querySelector('#sobrenome')
const cpf = document.querySelector('#cpf')
const senha = document.querySelector('#senha')

const textName = document.querySelector('.textName')
const textSobrenome = document.querySelector('.texSobrenome')
const textcpf = document.querySelector('.textcpf')
const textUsuario = document.querySelector('.textUsuario')
const textSenha = document.querySelector('.textSenha')
const textRsenha = document.querySelector('.textRsenha')

const campos =document.querySelector('.campos')




formulario.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Formuário não enviado')
})

formulario.addEventListener('submit',() =>{

    if(campos.value === ''){
        alert('Preencha os campos!')
        
    }
    //NOME:

    if(nomeInput.value === ''){
            textName.innerHTML = 'invalido';
            nomeInput.style.border = '1px solid red';

        }else if(nomeInput.value.length >= 3 ){
            nomeInput.style.border = '1px solid black';
            textName.innerHTML = '';

        }
        else if(nomeInput.value.length < 3){
            textName.innerHTML = 'pequeno'
            nomeInput.style.border = '1px solid red';
            
        }
        else{
            textName.innerHTML = 'off';
        }

        //SOBRENOME:

        if(sobrenomeInput.value === ''){
            sobrenomeInput.style.border = '1px solid red';

        }else if(sobrenomeInput.value.length >= 3 ){
            sobrenomeInput.style.border = '1px solid black';
            textSobrenome.innerHTML = '';

        }
        else if(sobrenomeInput.value.length < 3){
            textSobrenome.innerHTML = 'pequeno';
            sobrenomeInput.style.border = '1px solid red';
            
        }
        else{
            textSobrenome.innerHTML = '';
        }

        //CPF:
        if(cpf.value.length < 11){
            alert('pe')
        }
        
    })
        
        

    

       