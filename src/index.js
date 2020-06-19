function setLocalStorage(id){
    let jProdutos = { products: [] };

    if (localStorage.getItem("carrinhoCompra") !== "null")
        if (localStorage.getItem("carrinhoCompra") !== null)
            if (localStorage.getItem("carrinhoCompra") !== ""){
                let carrinhoCompra = JSON.parse(localStorage.getItem("carrinhoCompra"));
                jProdutos = { products: carrinhoCompra };
            }
        var str = $("#price" + id).text();
        var res = str.split("R$");
                
        let ProdutosE = {
            "img": $("#img" + id).attr('src'),
            "title": $("#title" + id).text(),
            "subtitle": $("#sub" + id).text(),
            "price": res[1],
        };

        jProdutos.products.push(ProdutosE);
    localStorage.setItem("carrinhoCompra", JSON.stringify(jProdutos.products));
    document.getElementById("titulo").innerHTML +=  "<div class='alert alert-success alert-dismissible fade show' role='alert'> <strong>Que Otimo!</strong> Seu pedido foi inserido no Carrinho. <button type='button' class='close' data-dismiss='alert' aria-label='Close'> <span aria-hidden='true'>&times;</span> </button> </div>";
}

function carregaCarrinho(){

    let total = 0.0;
    let carrinhoCompra;
    if (localStorage.getItem("carrinhoCompra") !== "null")
        if (localStorage.getItem("carrinhoCompra") !== null)
            if (localStorage.getItem("carrinhoCompra") !== "")
                carrinhoCompra = JSON.parse(localStorage.getItem("carrinhoCompra"));
    
    if(carrinhoCompra != null){
        document.getElementById("carrinho").innerHTML = "";
        carrinhoCompra.forEach(element => {
            document.getElementById("carrinho").innerHTML += element.title + " -  R$" + element.price + "<hr>";
            total += parseFloat(element.price);
        });
    }

    document.getElementById("total").innerHTML = total;
}

function finalizarCompra(){

    let ProdutosFinal = {
        "comentario": $("#exampleFormControlTextarea1").val(),
        "price": $("#total").text(),
    };

    localStorage.setItem("finalizarCompra", JSON.stringify(ProdutosFinal));
}

$(document).ready(function () {    
    localStorage.setItem("carrinhoCompra", "");
    localStorage.setItem("finalizarCompra", "");
})