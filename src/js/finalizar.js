function Salvar(){
    debugger;
    let erros;
    var nome = document.getElementById("txtNome").value;
    var email = document.getElementById("txtEmail").value;
    var datanasc = document.getElementById("txtData").value;
    var celular = document.getElementById("txtNumber").value;
    var senha = document.getElementById("txtSenha").value;
    var senha2 = document.getElementById("txtSenhaConfir").value;
    
    if (nome == "")
        erros++;

    if (email == "")
        erros++;
    
    if (datanasc == "")
        erros++;
    
    if (celular == "")
        erros++;

    if (senha == "" || senha2 == "")
        erros++;

    if(senha != senha2){
        erros++;
    }

    if(erros == null){
        let jContas = { contas: [] };

        if (localStorage.getItem("Contas") !== "null")
            if (localStorage.getItem("Contas") !== null)
                if (localStorage.getItem("Contas") !== ""){
                    let contasCriadas = JSON.parse(localStorage.getItem("Contas"));
                    jContas = { contas: contasCriadas };
                }
                    
            let ContasC = {
                "nome": nome,
                "email": email,
                "datanasc": datanasc,
                "celular": celular,
                "senha": senha ,
            };
    
            jContas.contas.push(ContasC);
        localStorage.setItem("Contas", JSON.stringify(jContas.contas));

        spop({
            autoclose: 3000,
            template: 'Cadastrado com sucesso !',
            group: 'submit-satus',
            style: 'success',
            //style: 'success'
        });

        window.location.href = "/src/html/login.html";
    }else{
        spop({
            autoclose: 3000,
            template: 'Complete Todos Os Campos Corretamente',
            group: 'submit-satus',
            style: 'error',
            //style: 'success'
        });
    }
}

$(document).ready(function () {    
    localStorage.setItem("Contas", "");
})