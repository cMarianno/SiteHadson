function Enviar(){
    let endereco = document.getElementById("txtEndereco").value;

    if(endereco != null){
        alert("Pedido enviado, entraremos em contato com você!")
        window.location.href = "../../index.html";
    }else
        alert("Digite sua rua para finalizar o pedido")
}

$(document).ready(function () {    
    dadosConta = JSON.parse(localStorage.getItem("finalizarCompra"));
    document.getElementById("total").innerHTML = dadosConta.price
})