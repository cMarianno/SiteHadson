function PesquisaPorEmail(){
    let contasCriadas;
    let contaCerta;
    var email = document.getElementById("txtEmail2").value;
    var senha = document.getElementById("txtSenha2").value;

    if (localStorage.getItem("Contas") !== "null")
        if (localStorage.getItem("Contas") !== null)
            if (localStorage.getItem("Contas") !== "")
                contasCriadas = JSON.parse(localStorage.getItem("Contas"));

    contasCriadas.forEach(element => {
        if(email == element.email && senha == element.senha){
            window.location.href = "endereco.html";
            contaCerta++;
        }
    });
    if(contaCerta == null)
        alert("Deu ruim");
}
