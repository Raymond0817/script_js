function comparar() {
    let modelo = "XLS";
    let resultado = document.getElementById("resultado");
let paragrafo = document.getElementById("mensagem")
paragrafo.innerText = "texto modificado!";
}
function comparar() {
    let modelo = "XLS";
    let resultado = document.getElementById("resultado");
    switch (modelo) {
        case "Storm":
            resultado.innerText = "Modelo completo com todos os opcionais.";
            break;
            case "XLS":
            resultado.innerText = "Modelo intermediario com bom custo-benefício.";
            break;
        case "XL":
            resultado.innerText = "Modelo básico, ideal para cidade.";
            break
         default
            resultado.innerText = "Modelo não reconhecido.";    
    }
}        
function avaliar (){
    let preco = 145000;
    let aviso = document.getElementById("aviso")
    if (preco >= 150000){
        aviso.innerText = "carro muito caro.";
    }else if (preco >= 130000) {
        aviso.innerText = "preço razoavel.";
    } else {
        aviso.innerText = "preço razoável."
    }

}