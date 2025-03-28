function lerNum1(){
    var num1 = parseFloat(document.getElementById('num1').value);
    return num1;
}

function lerNum2(){
    var num2 = parseFloat(document.getElementById('num2').value);
    return num2;
}

function somar(){
    let resultado = lerNum1() + lerNum2();
    document.getElementById('resultado').innerText = resultado;
}

function subtrair(){
    let resultado = lerNum1() - lerNum2();
    document.getElementById('resultado').innerText = resultado;
}

function multiplicar(){
    let resultado = lerNum1() * lerNum2();
    document.getElementById('resultado').innerText = resultado;
}

function dividir(){
    let resultado = lerNum1() / lerNum2();

    if(lerNum2() !== 0){
        document.getElementById('resultado').innerText = resultado;
    } else{
        document.getElementById('resultado').innerText = "!!!";
    }

    
}

