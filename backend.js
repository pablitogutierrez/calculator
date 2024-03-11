let i_ingreso = document.getElementById('ingreso');
let i_resultado = document.getElementById('resultado');
let b_suma = document.getElementById('sumar');
let b_multiplicar = document.getElementById('multiplicar');
let b_dividir = document.getElementById('dividir');
let b_restar = document.getElementById('restar');
let b_borrar = document.getElementById('borrar');


function sumar() {
    if(i_ingreso.value != ""){
        let ingreso = parseFloat(i_ingreso.value);
        let resultado;
        if(i_resultado.value == ""){
            resultado = 0;
        } else if (i_resultado.value != ""){
            resultado = parseFloat(i_resultado.value);
        }
        let suma = resultado + ingreso;
        i_resultado.value = suma.toString(); 
        i_ingreso.value = "";
    }
}

function restar() {
    if(i_ingreso.value != ""){
        let ingreso = parseFloat(i_ingreso.value);
        let resultado;
        if(i_resultado.value == ""){
            resultado = 0;
        } else if (i_resultado.value != ""){
            resultado = parseFloat(i_resultado.value);
        }
        let suma = resultado - ingreso;
        i_resultado.value = suma.toString(); 
        i_ingreso.value = "";
    }
}

function multiplicar() {
    if(i_ingreso.value != ""){
        let ingreso = parseFloat(i_ingreso.value);
        let resultado;
        if(i_resultado.value == ""){
            resultado = 0;
        } else if (i_resultado.value != ""){
            resultado = parseFloat(i_resultado.value);
        }
        let suma = resultado * ingreso;
        i_resultado.value = suma.toString(); 
        i_ingreso.value = "";
    }
}

function dividir() {
    if(i_ingreso.value != ""){
        let ingreso = parseFloat(i_ingreso.value);
        let resultado;
        if(i_resultado.value == ""){
            resultado = 0;
        } else if (i_resultado.value != ""){
            resultado = parseFloat(i_resultado.value);
        }
        let suma = resultado / ingreso;
        i_resultado.value = suma.toString(); 
        i_ingreso.value = "";
    }
}

function borrar() {
    i_resultado.value = "";
}


b_suma.addEventListener('click', () => {
    sumar();
})

b_restar.addEventListener('click', () => {
    restar();
})

b_multiplicar.addEventListener('click', () => {
    multiplicar();
})

b_dividir.addEventListener('click', () => {
    dividir();
})

b_borrar.addEventListener('click', () => {
    borrar();
})