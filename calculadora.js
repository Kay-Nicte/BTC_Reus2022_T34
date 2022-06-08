var num1 = 0;
var num2 = 0;
var opera;

function asignarNum(numero) {
    if (num1 == 0 && num1 !== '0.') {
        num1 = numero;
    } else {
        num1 += numero;
    }
    refrescar();
}

function coma() {
    if (num1 == 0) {
        num1 = '0.';
    } else if (num1.indexOf('.') == -1) {
        num1 += '.';
    }
    refrescar();
}

function c() {
    num1 = 0;
    num2 = 0;
    refrescar();
}

function operar(valor) {
    if (num1 == 0) {
        num1 = parseFloat(document.getElementById("valor_numero").value);
    }
    num2 = parseFloat(num1);
    num1 = 0;
    opera = valor;
}

function igual() {
    num1 = parseFloat(num1);
    switch (opera) {
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
    num2 = parseFloat(num1);
    num1 = 0;
}

function refrescar() {
    document.getElementById("valor_numero").value = num1;
}