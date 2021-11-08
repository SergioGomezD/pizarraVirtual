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
