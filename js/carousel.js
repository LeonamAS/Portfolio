

//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {
    constructor(image, title, url){
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        let sequencia = this._sequence;
        let itemCarrossel = carouselArr[sequencia];

        let carrossel = document.getElementById("carousel");
        let tituloCarrossel = document.getElementById("carousel-title");

        let imagem = `<a href="${itemCarrossel.url}"><img src=${itemCarrossel.image}></a>`;
        
        carrossel.innerHTML = imagem;
        tituloCarrossel.innerHTML = itemCarrossel.title;        

        this._sequence++;

        if (this._sequence >= this._size) {
            this._sequence = 0;
        } 
    }
}
