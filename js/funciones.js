function click(){
    let lista=document.querySelectorAll("#principal td");
    for(let i=0; i<lista.length;i++){
        lista[i].addEventListener("click",mostrar,false);
        //alert(lista)
    }
}

let operador=1;
let operacion="";
let operando1="";
let operando2="";

function mostrar(evt){
    this.style.background="rgb(192, 218, 248)";
    let dato=this.innerHTML;
    //alert(dato);
    let numero=isNaN(dato);

    //alert(numero);

    if(operador==1 && dato!="+" && dato!="-" && dato!="/" && dato!="*" && dato!="CE" && dato!="C" && dato!="="){
        
        operando1=operando1+dato;
        //operador=2;

        console.log("1 "+operando1);
        console.log("1 "+dato);

    }else if(operador==2 && dato!="+" && dato!="-" && dato!="/" && dato!="*" && dato!="CE" && dato!="C" && dato!="="){
        operando2=operando2+dato;
        //operador=1;

        console.log("2 "+operando2);
        console.log("2 "+dato);
    }

    if(numero && dato!="=" && dato!="C" && dato!="CE" && dato!="."){
        
        console.log("3 "+operacion);
        console.log("3 "+dato);

        operacion=dato;
    }

    if(dato=="C"){
        if(operador==1) {
            operando1=operando1.substring(0, operando1.length-1)
            console.log("4 "+operando1);
        }
        if(operador==2) {
            operando2=operando2.substring(0, operando2.length-1)
            console.log("4 "+operando2);
        }
    }

    if(dato=="CE"){
        if(operador==1) {
            operando1=0
            console.log("5 "+operando1);
        }
        if(operador==2) {
            operando2=0
            console.log("5 "+operando2);
        }
    }

    /*if(dato=="."){
        if(operador==1) {
            operando1=parseFloat(operando1) +dato;
            console.log("6 "+operando1);
        }
        if(operador==2) {
            operando2=parseFloat(operando2) +dato;
            console.log("6 "+operando2);
        }
    }*/

    if (operacion=="+" || operacion=="-" || operacion=="/" || operacion=="*"){
        operador=2;
    }else{
        operador=1;
    }
    

    if(dato=="="){
        let resultado=0;
        
        if(operacion=="+") {
            resultado= parseFloat(operando1)+parseFloat(operando2);
        }
        
        if(operacion=="-") { 
            resultado= parseFloat(operando1)-parseFloat(operando2);
        }

        if(operacion=="*") { 
            resultado= parseFloat(operando1)*parseFloat(operando2);
        }
        
        if(operacion=="/") { 
            resultado= parseFloat(operando1)/parseFloat(operando2);
        }
        console.log("Resultado"+resultado);
        document.getElementById("resultado").innerText="Resultado: "+resultado;

        operador=1;
        operacion="";
        operando1=0;
        operando2=0;

        resultado=0;

        limpiar();

    }
}

function limpiar(){
        var lista2=document.querySelectorAll("#principal td");
        var lista3=document.querySelectorAll("#principal td.operador");
        console.log(Object.values(lista3))
        for(let i=0; i<lista2.length;i++){
            lista2[i].style.background="white"
            lista2[i].style.color="black" 
        }
        for(let i=0; i<lista3.length;i++){
            lista3[i].style.background="rgb(47, 119, 202)";
            lista3[i].style.color="white"
        }
    }
window.onload=click();