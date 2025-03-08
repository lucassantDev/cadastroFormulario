var nome = []
var sobrenome = []
var email = []

// if(nomeInformado == '' && sobrenome == '' && emailInformado === ''){
//     alert('Informe dados válidos ou faça login');
// }else{
//     addEventListener('click', verificarInformacao());
// }

addEventListener('click', verificarInformacao());


function cadastrarDados(){
    nomeInformado = document.getElementById('nomeUsuario').value;
    sobrenomeInformado = document.getElementById('sobrenomeUsuario').value;
    emailInformado = document.getElementById('emailUsuario').value;

    // condição para verificar se os inputs não estão vazios
    if(nomeInformado == '' && sobrenome == '' && emailInformado == ''){
        alert('Informe dados válidos!');     
    }else{
        // adicioando dados em seus respectivos arrays
        nome.push(nomeInformado);
        sobrenome.push(sobrenomeInformado);
        email.push(emailInformado)

        alert(`Usuário ${nomeInformado} cadastrado(a)`);

        console.log(nome, sobrenome, email);
    }
}


