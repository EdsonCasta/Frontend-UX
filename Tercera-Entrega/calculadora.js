// calculadora

// Calculadora - Nivel I (Funciones)

function sumar(num1, num2) {
    return num1 + num2;
};

function restar(num1, num2) {
    return num1 - num2;
};

function multiplicar(num1, num2) {
    return num1 * num2;
};

function dividir(num1, num2) {  

    if (num2 === 0) {
        return "Error: División por cero no permitida.";
    }

    return num1 / num2;
};


// Calculadora - Nivel II

console.log("-------------- Testeo de Operaciones / Calculadora --------------");

const numero1 = parseFloat(prompt("Ingrese el primer número:"));
const numero2 = parseFloat(prompt("Ingrese el segundo número:"));

const suma = sumar(numero1, numero2);
const resta = restar(numero1, numero2);
console.log(`Suma: ${numero1} + ${numero2} = ${suma}`);
console.log(`Resta: ${numero1} - ${numero2} = ${resta}`);

const multiplicacion = multiplicar(numero1, numero2);
console.log(`Multiplicación: ${numero1} * ${numero2} = ${multiplicacion}`);

const division = dividir(numero1, numero2);
console.log(`División: ${numero1} / ${numero2} = ${division}`);

const divisionPorCero = dividir(numero1, 0);
console.log(`División: ${numero1} / 0 = ${divisionPorCero}`);

// Calculadora - Nivel III - Funciones extras

function cuadradoDeUnNumero(numero) {
    return multiplicar(numero, numero); 
}

function promedioDeTresNumeros(num1, num2, num3) {
    const suma = sumar(sumar(num1, num2), num3);
    return dividir(suma, 3);
}

function calcularPorcentaje(numTotal, porcentaje) {
    return dividir(multiplicar(numTotal, porcentaje), 100);
}

function GeneradorDePorcentaje(primero, segundo) {
    return dividir(primero, segundo) * 100;
}

console.log("-------------- Testeo de Funciones Extras --------------");

const numeroCuadrado = parseFloat(prompt("Ingrese un número para calcular su cuadrado:"));
const cuadrado = cuadradoDeUnNumero(numeroCuadrado);
console.log(`El cuadrado de ${numeroCuadrado} es: ${cuadrado}`);

const num1 = parseFloat(prompt("Ingrese el primer número para calcular el promedio:"));
const num2 = parseFloat(prompt("Ingrese el segundo número para calcular el promedio:"));
const num3 = parseFloat(prompt("Ingrese el tercer número para calcular el promedio:"));
const promedio = promedioDeTresNumeros(num1, num2, num3);
console.log(`El promedio de ${num1}, ${num2}, y ${num3} es: ${promedio}`);

const total = parseFloat(prompt("Ingrese el número total:"));
const porcentaje = parseFloat(prompt("Ingrese el porcentaje a calcular:"));
const resultadoPorcentaje = calcularPorcentaje(total, porcentaje);
console.log(`${porcentaje}% de ${total} es: ${resultadoPorcentaje}`);

const parte = parseFloat(prompt("Ingrese el primer valor:"));
const totalGenerador = parseFloat(prompt("Ingrese el segundo valor para calcular el porcentaje:"));
const porcentajeGenerado = GeneradorDePorcentaje(parte, totalGenerador);
console.log(`El porcentaje que ${parte} representa de ${totalGenerador} es: ${porcentajeGenerado}%`);

// Calculadora - Nivel IV - Condicionales y Bucles

// Verificar si un número es par o impar

function verificarParidad(numero) {
    if (numero % 2 === 0) {
        return `El número ${numero} es par.`;
    } else {
        return `El número ${numero} es impar.`;
    }
};

// Sumar una secuencia de números

function sumarSecuencia(inicio, fin) {
    let suma = 0;
    for (let i = inicio; i <= fin; i++) {
        suma += i;
    }
    return suma;
};

console.log("-------------- Testeo de Condicionales y Bucles --------------");

const numero = parseFloat(prompt("Ingresa un número para verificar si es par o impar:"));

const inicio = parseFloat(prompt("Ingresa el número inicial de la secuencia:"));
const fin = parseFloat(prompt("Ingresa el número final de la secuencia:"));

console.log(verificarParidad(numero));

console.log(`La suma de la secuencia desde ${inicio} hasta ${fin} es: ${sumarSecuencia(inicio, fin)}`);