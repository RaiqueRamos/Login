function Entrar(){
    let Email = document.querySelector('#Email');
    let Senha = document.querySelector('#Senha');

    let msgError = document.querySelector('#msgError');
    let msgSuccess = document.querySelector('#msgSuccess');

    let listaUser = [];

    userValid = {
        Email: '',
        Senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if( Email.value == item.EmailCad && Senha.value == item.SenhaCad ){
            userValid = {
                Email: item.EmailCad,
                Senha: item.SenhaCad
            }
        }
    });

    if(Email.value == userValid.Email && Senha.value == userValid.Senha){

        setTimeout(()=>{
            window.location.href = 'file:///D:/NavBar/Tela.html';
        }, 2000)

        
        msgSuccess.setAttribute('style', 'display: flex');
    }else{
        msgError.setAttribute('style', 'display: flex');
        Email.focus()
    }
}