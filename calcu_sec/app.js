var result=0;

function suma (a,b){
    return a + b;
}

function resta (a,b){
    return a - b;
}

function multiplicacion (a,b){
    return a * b;
}

function division (a,b){
    return a / b;
}

function getOperandoA(){
    return parseInt(document.getElementById("operandoA").value);
}

var ResultadoSuma = () => {
    if((document.getElementById("operandoA").value == "")){
        document.getElementById("resultado").innerHTML = "Error: Operando vacío";
    }else{
        result = suma(result,getOperandoA());
        document.getElementById("operandoA").value = "";
    }    
}

var ResultadoResta = () => {
    if((document.getElementById("operandoA").value == "") ){
        document.getElementById("resultado").innerHTML = "Error: Operando vacío";
    }else{
        result = resta(result,getOperandoA());
        document.getElementById("operandoA").value = "";
    }
}

var ResultadoMulti = () => {
    if((document.getElementById("operandoA").value == "")){
        document.getElementById("resultado").innerHTML = "Error: Operando vacío";
    }else{
        result = multiplicacion(result,getOperandoA());
        document.getElementById("operandoA").value = "";
    }
}

var ResultadoDivi = () => {
    if((document.getElementById("operandoA").value == "")){
        document.getElementById("resultado").innerHTML = "Error: Operando vacío";
    }else{
        result = division(result,getOperandoA());
        document.getElementById("operandoA").value = "";
    }
}

var ResultadoResul = () => {
        document.getElementById("resultado").innerHTML = result;
}

document.getElementById("boton-suma").addEventListener("click",ResultadoSuma);
document.getElementById("boton-resta").addEventListener("click",ResultadoResta);
document.getElementById("boton-multiplicacion").addEventListener("click",ResultadoMulti);
document.getElementById("boton-division").addEventListener("click",ResultadoDivi);
document.getElementById("boton-resultado").addEventListener("click",ResultadoResul);



