// Declaração de variáveis
const btnFormulario = document.querySelector(".btn-formulario");
const conteudoFormulario = document.querySelector(".btn-formulario .formulario-solicitacao");
const btnSolicitacao = document.querySelector(".btn-solicitacao");
const limpeInputNome = document.querySelector(".form-nome");
const limpeInputEmail = document.querySelector(".form-email");
const limpeInputCondominio = document.querySelector(".form-condominio");
const limpeInputCepCondominio = document.querySelector(".form-cep-condominio");

// Variável de escopo especifíco, realocada para ser reutilizada
const btnFormularioAberto = conteudoFormulario.classList.contains("ativo");

// Função que identifica se o botão para abrir o formulário foi clicado
btnFormulario.addEventListener("click", () => {
   
    //  conteudoFormulario.classList.toggle("ativo");

    if(btnFormularioAberto == 0){
        conteudoFormulario.classList.add("ativo");
        console.log(btnFormularioAberto);
    }

    /*
    if(btnAberto){
        conteudoFormulario.classList.remove("ativo");
        console.log(btnAberto);
    }else{
        conteudoFormulario.classList.add("ativo");
        console.log(btnAberto);
    }
    */
})

// Função que identifica se o botão para "enviar" o formulário foi clicado
btnSolicitacao.addEventListener("click", () => {

    alert("Sua solicitação foi realizada");

    // Limpando os valores dos inputs
    limpeInputNome.value = "";
    limpeInputEmail.value = " ";
    limpeInputCondominio.value = "";
    limpeInputCepCondominio.value = " ";

})  