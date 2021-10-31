total1=0;
total2=0;
var paso2='./paso2.html'
var pizarra='./pizarra.html'




function añadirArticulo(id_img){
    total1++;
    guardarItem(id_img);
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

function añadirArticulo2(id_img){
    
    total2++;
    guardarItem(id_img);
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

function guardarItem(id_img){
    if(total1==1){ 
        img1_1ruta= '/assets/botones y cotes restantes/'+id_img;
        img1_2ruta= '/assets/botones y cotes restantes/'+id_img;
        img1_3ruta= '/assets/botones y cotes restantes/'+id_img;
    }
    if(total1==2){        
        img2_1ruta= '/assets/botones y cotes restantes/'+id_img;
        img2_2ruta= '/assets/botones y cotes restantes/'+id_img;
        img2_3ruta= '/assets/botones y cotes restantes/'+id_img;
    }
    if(total2==1){        
        img3_1ruta= '/assets/botones y cotes restantes/'+id_img;
        img3_2ruta= '/assets/botones y cotes restantes/'+id_img;
        img3_3ruta= '/assets/botones y cotes restantes/'+id_img;
    }
    if(total2==2){        
        img4_1ruta= '/assets/botones y cotes restantes/'+id_img;
        img4_2ruta= '/assets/botones y cotes restantes/'+id_img;
        img4_3ruta= '/assets/botones y cotes restantes/'+id_img;
    }
}



function cargarItems(){
    img1=document.getElementsByClassName('item1_1');
    img1.src="img1_1ruta";
    img2=document.getElementsByClassName('item1_2');
    img2.src="img1_2ruta";
    img3=document.getElementsByClassName('item1_3');
    img3.src="img1_3ruta";
    img4=document.getElementsByClassName('item2_1');
    img4.src="img2_1ruta";
    img5=document.getElementsByClassName('item2_2');
    img5.src="img2_2ruta";
    img6=document.getElementsByClassName('item2_3');
    img6.src="img2_3ruta";
    img7=document.getElementsByClassName('item3_1');
    img7.src="img3_1ruta";
    img8=document.getElementsByClassName('item3_2');
    img8.src="img3_2ruta";
    img9=document.getElementsByClassName('item3_3');
    img9.src="img3_3ruta";
    img10=document.getElementsByClassName('item4_1');
    img10.src="img4_1ruta";
    img11=document.getElementsByClassName('item4_2');
    img11.src="img4_2ruta";
    img12=document.getElementsByClassName('item4_3');
    img12.src="img4_3ruta";
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