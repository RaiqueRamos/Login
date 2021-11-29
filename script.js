let Nome = document.querySelector('#Nome');
let validNome = false;
let Email = document.querySelector('#Email');
let validEmail = false;
let Senha = document.querySelector('#Senha');
let validSenha = false;
let CorfirmSenha = document.querySelector('#CorfirmSenha');
let validCorfirmSenha = false;

Nome.addEventListener('keyup', ()=>{
    if(Nome.value.length <= 1){
        Nome.setAttribute('style', 'color: red')
        validNome = false;
    }else{
        Nome.setAttribute('style', 'color: black')
        validNome = true;
    }
});
Senha.addEventListener('keyup', ()=>{
    if(Senha.value.length <= 5){
        Senha.setAttribute('style', 'color: red')
        validSenha = false;
    }else{
        Senha.setAttribute('style', 'color: black')
        validSenha = true;
    }
});
CorfirmSenha.addEventListener('keyup', ()=>{
    if(CorfirmSenha.value != Senha.value){
        CorfirmSenha.setAttribute('style', 'color: red')
        validCorfirmSenha = false;
    }else{
        CorfirmSenha.setAttribute('style', 'color: black')
        validCorfirmSenha = true;
    }
});

let msgError = document.querySelector('#msgError');

let msgSuccess = document.querySelector('#msgSuccess');

function Cadastrar(){
    if(validNome && validSenha && validCorfirmSenha){
        msgSuccess.setAttribute('style', 'display: flex');
        msgError.setAttribute('style', 'display: none');
    }else{
        msgError.setAttribute('style', 'display: flex');
        msgSuccess.setAttribute('style', 'display: none');
    }
}