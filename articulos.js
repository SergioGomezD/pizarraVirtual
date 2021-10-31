total1=0;
total2=0;
var paso2='./paso2.html'
var pizarra='./pizarra.html'


function añadirArticulo(rojo_id){
    if(total==0){
        
    }
    total1++;
    validarTotal();
}

function validarTotal(){
    if(total1==1){
        
    document.getElementById('cont_roja').src='./assets/roja-1.png';
    }
    if (total1==2){
        
    document.getElementById('cont_roja').src='./assets/roja-2.png';
        document.location.href=paso2;
    }
}

function añadirArticulo2(){
    total2++;
    validarTotal2();
    console.log(total2);
}

function validarTotal2(){
    if(total2==1){
        document.getElementById('cont_negro').src='./assets/negra-1.png';
    }
    if (total2==2){
        
    document.getElementById('cont_negro').src='./assets/negra-2.png';
        document.location.href=paso2;
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