/* scripts para la calculadora */
//Declaracion de variables
let num1 = 0;
let num2 = 0;
let opera ='';

function darNumero(numero){
    if(num1 == 0 ){
        num1 = numero;
    }else{
        num1 += numero;
    }
    refrescar();
}

//funcion limpia la pantalla al presionar C 
function darC(){
    num1 = 0;
    num2 = 0;
    refrescar();
}

function operar(valor){
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

function esIgual(){
    num1 = parseFloat(num1);
    switch(opera){
        case 1:
            num1 += num2;
        break;
        case 2:
            num1 = num2 - num1;
        break;
        case 3:
            num1 *= num2;
        break;
        case 4:
            num1 = num2 / num1;
        break;
        case 5:
            num1 = Math.pow(num2, num1);
        break;
    }
    refrescar();
}

function refrescar(){
    document.getElementById("valor_numero").value = num1;
}
