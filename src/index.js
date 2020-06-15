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
}

function carregaCarrinho(){

    if (localStorage.getItem("carrinhoCompra") !== "null")
        if (localStorage.getItem("carrinhoCompra") !== null)
            if (localStorage.getItem("carrinhoCompra") !== "")
                carrinhoCompra = JSON.parse(localStorage.getItem("carrinhoCompra"));

    carrinhoCompra.forEach(element => {
        document.getElementById("carrinho").innerHTML += element.title + " -  R$" + element.price + "<hr>";
    });
}

$(document).ready(function () {    
    localStorage.setItem("carrinhoCompra", "");
})