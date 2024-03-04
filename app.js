let numeroSecreto=0;
let intentos=0;
let listaNumerosSorteados=[];
let numeroMaximo=10;
let intentosMax=4;

// console.log(numeroSecreto);

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valor-usuario").value);
    // console.log(typeof numeroDeUsuario);
    // console.log(typeof numeroSecreto);
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);
    // console.log(numeroDeUsuario===numeroSecreto);
    // console.log(intentos);
    if(intentos==intentosMax){
        asignarTextoElemento("p", "Perdiste. superaste la cantidad maxima de intentos");
        document.getElementById("reiniciar").removeAttribute("disabled");
        document.getElementById("intentar").setAttribute("disabled","true");
    }else{

        if(numeroDeUsuario===numeroSecreto){
            asignarTextoElemento("p",`Acertaste el numero en ${intentos} ${(intentos===1)?"vez":"veces"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            document.getElementById("intentar").setAttribute("disabled","true");
        }else{
            //El usuario no acerto
            if(numeroDeUsuario>numeroSecreto){
                asignarTextoElemento("p","El numero secreto es menor");
            }else{
                asignarTextoElemento("p","El numero secreto es mayor");
            }
    }
            intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valor-usuario").value="";
}

function generarNumeroSecreto(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length==numeroMaximo){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    }else{
    //Si el numero generado esta includio esta en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
             return generarNumeroSecreto();
         }else{
              listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
         }
    }   
}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
    // console.log(numeroSecreto);
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();

    //indicar mensaje de intevalo de numeros
    condicionesIniciales();

    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
    document.querySelector("#intentar").removeAttribute("disabled");
}

condicionesIniciales();
