// Ejercicio 1

function numerosSiguientes(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(n + i);
    }
};

numerosSiguientes(5);

// Ejercicio 2

for (let i = 5; i <= 20; i += 3) {
    console.log(i);
};

// Ejercicio 3

let sumatoria = 0;

for (let i = 0; i <= 100; i++) {
    sumatoria += i;
};

console.log(`La sumatoria de los números entre 0 y 100 es: ${sumatoria}`);

// Ejercicio 4

function factorial(n) {

    if (n < 0) {
        return "El número debe ser positivo.";
    }

    let resultado = 1;

    for (let i = 1; i <= n; i++) {
        resultado *= i;
    }
    return resultado;
}

console.log(factorial(5));

// Ejercicio 5

function fibonacciHasta(n) {

    let a = 0, b = 1;

    while (a <= n) {
        console.log(a); 
        [a, b] = [b, a + b]; 
    }
};

fibonacciHasta(21);