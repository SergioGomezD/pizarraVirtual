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
function tomarSS(){

}



function cambiarTamaño(idimg){
    imgTam=document.getElementById(idimg);
    imgTam.onwheel=zoom;


    console.log('moviendose');
}
function zoom(event){
    width=imgTam.width;
    height=imgTam.height;
    
    if (event.deltaY < 0) {
        width=width+10;
        height=height+10
        imgTam.setAttribute("width",width+'px');
        imgTam.setAttribute("heigth",height+'px');
      }
      else {
        width=width-10;
        height=height-10;
        imgTam.setAttribute("width",width+'px');
        imgTam.setAttribute("heigth",height+'px');
      }
}



function dibujar(){
    var pixelSize = 16

interact('.rainbow-pixel-canvas')
  .draggable({
    max: Infinity,
    maxPerElement: Infinity,
    origin: 'self',
    modifiers: [
      interact.modifiers.snap({
        // snap to the corners of a grid
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize })
        ]
      })
    ],
    listeners: {
      // draw colored squares on move
      move: function (event) {
        var context = event.target.getContext('2d')
        // calculate the angle of the drag direction
        var dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI

        // set color based on drag angle and speed
        context.fillStyle =
          'hsl(' +
          dragAngle +
          ', 86%, ' +
          (30 + Math.min(event.speed / 1000, 1) * 50) +
          '%)'

        // draw squares
        context.fillRect(
          event.pageX - pixelSize / 2,
          event.pageY - pixelSize / 2,
          pixelSize,
          pixelSize
        )
      }
    }
  })
  // clear the canvas on doubletap
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d')

    context.clearRect(0, 0, context.canvas.width, context.canvas.height)
    resizeCanvases()
  })

function resizeCanvases () {
  [].forEach.call(document.querySelectorAll('.rainbow-pixel-canvas'), function (
    canvas
  ) {
    delete canvas.width
    delete canvas.height

    var rect = canvas.getBoundingClientRect()

    canvas.width = rect.width
    canvas.height = rect.height
  })
}

resizeCanvases()

// interact.js can also add DOM event listeners
interact(window).on('resize', resizeCanvases)
}


function descargar(){
    const canvas = document.querySelector("#miCanvas");
    let enlace = document.createElement('a');
      // El título
      enlace.download = "Canvas como imagen.png";
      // Convertir la imagen a Base64 y ponerlo en el enlace
      enlace.href = canvas.toDataURL();
      // Hacer click en él
      enlace.click();
}