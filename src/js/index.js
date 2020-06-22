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
    
    spop({
        autoclose: 3000,
        template: 'Produto Adicionado com Sucesso',
        group: 'submit-satus',
        style: 'success',
        //style: 'error'
    });
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

    let carrinhoCompra;
    if (localStorage.getItem("carrinhoCompra") !== "null")
        if (localStorage.getItem("carrinhoCompra") !== null)
            if (localStorage.getItem("carrinhoCompra") !== "")
                carrinhoCompra = JSON.parse(localStorage.getItem("carrinhoCompra"));

    if(carrinhoCompra != null){
        let ProdutosFinal = {
            "comentario": $("#exampleFormControlTextarea1").val(),
            "price": $("#total").text(),
        };

        localStorage.setItem("finalizarCompra", JSON.stringify(ProdutosFinal));
        window.location.href = "src/html/finalizar.html";
    }else{
        spop({
            autoclose: 3000,
            template: 'Não Possui Nenhum Item No Carrinho',
            group: 'submit-satus',
            style: 'error',
            //style: 'success'
        });
    }
    
}

$(document).ready(function () {    
    localStorage.setItem("carrinhoCompra", "");
    localStorage.setItem("finalizarCompra", "");
})