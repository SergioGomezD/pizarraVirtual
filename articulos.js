total1=0;
total2=0;
totalimg=0;
var paso2='./paso2.html'
var pizarra='./pizarra.html'
var img1='';
var img2='';
var img3='';
var img4='';
var imgs=[];


function añadirArticulo(id_img){
    
    if(total1==0){
        imgs.push(id_img);
        localStorage.setItem('myArray', JSON.stringify(imgs));
        
        total1++;
    }
    else {
        //localStorage.setItem(img2, id_img);
        imgs.push(id_img);
        localStorage.setItem('myArray', JSON.stringify(imgs));
        total1++;
    }

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
    console.log(total1)
    if(total2==0){
        var array = localStorage.getItem('myArray');
        array = JSON.parse(array);
        imgs.push(array[0]);
        imgs.push(array[1]);
        imgs.push(id_img);
        localStorage.setItem('myArray', JSON.stringify(imgs));        
        total2++;
    }
    else {
        imgs.push(id_img);
        localStorage.setItem('myArray', JSON.stringify(imgs));        
        total2++;
    }

    validarTotal2();
}

function validarTotal2(){
    if(total2==1){
        document.getElementById('cont_negro').src='./assets/negra-1.png';
    }
    if (total2==2){
        
    document.getElementById('cont_negro').src='./assets/negra-2.png';
        document.location.href=pizarra;
    }
}

function guardarItem(){
        var array = localStorage.getItem('myArray');
        array = JSON.parse(array);
        img1_1ruta= './assets/'+array[0]+'.png';
        img1_2ruta= './assets/'+array[0]+'.png';
        img1_3ruta= './assets/'+array[0]+'.png';
            
        img2_1ruta= './assets/'+array[1]+'.png';
        img2_2ruta= './assets/'+array[1]+'.png';
        img2_3ruta= './assets/'+array[1]+'.png';

        img3_1ruta= './assets/'+array[2]+'.png';
        img3_2ruta= './assets/'+array[2]+'.png';
        img3_3ruta= './assets/'+array[2]+'.png';
    
        img4_1ruta= './assets/'+array[3]+'.png';
        img4_2ruta= './assets/'+array[3]+'.png';
        img4_3ruta= './assets/'+array[3]+'.png';
}



function cargarItems(){
    guardarItem();
    
    img1=document.getElementById('item1_1');
    img1.src=img1_1ruta;
    img2=document.getElementById('item1_2');
    img2.src=img1_2ruta;
    img3=document.getElementById('item1_3');
    img3.src=img1_3ruta;
    img4=document.getElementById('item2_1');
    img4.src=img2_1ruta;
    img5=document.getElementById('item2_2');
    img5.src=img2_2ruta;
    img6=document.getElementById('item2_3');
    img6.src=img2_3ruta;
    img7=document.getElementById('item3_1');
    img7.src=img3_1ruta;
    img8=document.getElementById('item3_2');
    img8.src=img3_2ruta;
    img9=document.getElementById('item3_3');
    img9.src=img3_3ruta;
    img10=document.getElementById('item4_1');
    img10.src=img4_1ruta;
    img11=document.getElementById('item4_2');
    img11.src=img4_2ruta;
    img12=document.getElementById('item4_3');
    img12.src=img4_3ruta;
}


function cambiarFondo(){
    fondo= document.getElementById('pizarra');
    fondomin=document.getElementById('fondomin')
    
    console.log(totalimg    )
    if(totalimg==0){
        console.log(fondo)
        fondo.setAttribute("style", "background-image:url('./assets/fondos/entorno1.png')")  ;
        fondomin.src='./assets/fondos/en1.png';
        totalimg++;
    }
    else if(totalimg==1){
        fondo.setAttribute("style", "background-image:url('./assets/fondos/entorno2.png')")  ;
        fondomin.src='./assets/fondos/en2.png';
        totalimg++;
    }
    else if(totalimg==2){
        fondo.setAttribute("style", "background-image:url('./assets/fondos/entorno3.png')")  ;
        fondomin.src='./assets/fondos/en3.png';
        totalimg++;
    }
    else if(totalimg==3){
        fondo.setAttribute("style", "background-image:url('./assets/fondos/entorno4.png')")  ;
        fondomin.src='./assets/fondos/en5.png';
        totalimg++;
    }
    else if(totalimg==4){
        fondo.setAttribute("style", "background-image:url('./assets/fondos/entorno5.png')")  ;
        fondomin.src='./assets/fondos/en4.png';
        totalimg=0;
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