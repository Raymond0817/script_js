

//carousel

//Array storage class
let carouselArr = [];


//class Carousel
class Carousel {
constructor(imagem, texto, link){
    this.imagem = imagem;
    this.texto = texto;
    this.link = link;
}
    
     
    static Start(arr){
        if(arr){
            console.log(carouselArr);

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        const item = Carousel._sequence;
        document.getElementById("carousel-title").innerHTML =`<a href="${carouselArr[item].link}">${ carouselArr[item].texto}</a>`
        document.getElementById("carousel").innerHTML = `<img src="${carouselArr[item].imagem}" style="height: 100%; display: block; margin:auto;">`
        Carousel._sequence++

    if (Carousel._sequence == Carousel._size){
        Carousel._sequence = 0;
    }
    }
};
class carro{
    constructor(modelo, preço, imagem){
        this.modelo = modelo;
        this.preco = preco;
        this. imagem = imagem;
    }
}


  


