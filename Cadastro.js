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

Email.addEventListener('keyup', ()=>{
    if(Email.value.length <= 5){
        Email.setAttribute('style', 'color: red')
        validEmail = false;
    }else{
        Email.setAttribute('style', 'color: black')
        validEmail = true;
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
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push({
            NomeCad: Nome.value,
            EmailCad: Email.value,
            SenhaCad: Senha.value,
        })

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgSuccess.setAttribute('style', 'display: flex');

        setTimeout(()=>{
            window.location.href = 'file:///D:/NavBar/Logar.html';
        }, 2000)

        
    }else{
        msgError.setAttribute('style', 'display: flex');
    }
}
