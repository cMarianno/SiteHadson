function Enviar(){
    let endereco = document.getElementById("txtEndereco").value;

    if(endereco != null){
        spop({
            autoclose: 3000,
            template: 'Seu Pedido Será Enviado',
            group: 'submit-satus',
            style: 'sucess',
            //style: 'success'
        });
        window.location.href = "../../index.html";
    }else{
        spop({
            autoclose: 3000,
            template: 'Complete Todos Os Campos',
            group: 'submit-satus',
            style: 'warning',
            //style: 'success'
        });
    }
}

$(document).ready(function () {    
    dadosConta = JSON.parse(localStorage.getItem("finalizarCompra"));
    document.getElementById("total").innerHTML = dadosConta.price
})