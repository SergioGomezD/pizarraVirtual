total1=0;
total2=0;
var paso2='./paso2.html'
var pizarra='./pizarra.html'


function añadirArticulo(){
    total1++;
    validarTotal();
    console.log(total1);
}

function validarTotal(){
    if (total1==2){
        document.location.href=paso2;
    }
}

function añadirArticulo2(){
    total2++;
    validarTotal2();
    console.log(total2);
}

function validarTotal2(){
    if (total2==2){
        document.location.href=pizarra;
    }
}




const $boton = document.querySelector("#ss"), 
  $objetivo = document.querySelector("#pizarra"), 
  $contenedorCanvas = document.querySelector("#contenedorCanvas"); 


function tomarSS() {
  html2canvas($objetivo)
    .then(canvas => {
      
        $contenedorCanvas.appendChild(canvas); 
        var img = canvas.toDataURL("image/png");
        window.open(img);
    });

    
};