

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
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        document.getElementById("carousel-title").innerHTML = carouselArr[2].texto
        document.getElementById("image").src = carouselArr[2].imagem
    }
};
