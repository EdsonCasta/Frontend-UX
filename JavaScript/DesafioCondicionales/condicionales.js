// CONDICIONALES

// Total a Pagar

function totalAPagar(vehiculo, litrosConsumidos) {
    let precioLitro = 0;

    if (vehiculo === "coche") {
        precioLitro = 86;
    } else if (vehiculo === "moto") {
        precioLitro = 70;
    } else if (vehiculo === "autobus") {
        precioLitro = 55;
    }

    let totalAPagar = precioLitro * litrosConsumidos;

    if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
        totalAPagar = totalAPagar + 50;
    } else if (litrosConsumidos > 25) {
        // totalAPagar = totalAPagar + 25;
        totalAPagar += 25;
    }

    return totalAPagar;
};

// Local de sándwiches 

function valorSandwiches() {

    let tipoSandwiches = prompt(`
        ¿Qué tipo de sándwich desea? 
        1. pollo 
        2. carne 
        3. veggie
        `);

    let precioBase = 0;

    switch (tipoSandwiches) {
        case "pollo":
            precioBase = 150;
            break;
        case "carne":
            precioBase = 200;
            break;
        case "veggie":
            precioBase = 100;
            break;
        default:
            console.log("ese tipo de sandwiche no lo hay")
            return NaN;
    }

    let tipoPan = prompt(`
    Que tipo de pan desea:
        1. Blanco c/orégano y parmesano = $50 (“blanco”) 
        2. Negro c/avena = $60 (“negro”) 
        3. Sin gluten = $75 (“s/gluten”)
    `)

    let precioPan = 0;

    switch (tipoPan) {
        case "blanco":
            precioPan = 50
            break;
        case "negro":
            precioPan = 60
            break;
        case "s/gluten":
            precioPan = 75
            break;
        default:
            return "ese tipo de pan no lo tenemos";
    }

    let queso = prompt("¿Desea agregar queso? (+$20) (true/false)") === "true";
    let tomate = prompt("¿Desea agregar tomate? (+$15) (true/false)") === "true";
    let lechuga = prompt("¿Desea agregar lechuga? (+$10) (true/false)") === "true";
    let cebolla = prompt("¿Desea agregar cebolla? (+$15) (true/false)") === "true";
    let mayonesa = prompt("¿Desea agregar mayonesa? (+$5) (true/false)") === "true";
    let mostaza = prompt("¿Desea agregar mostaza? (+$5) (true/false)") === "true";

    let adiciones = 0;

    if (queso) {
        adiciones += 20
    }
    if (tomate) {
        adiciones += 15
    }
    if (lechuga) {
        adiciones += 10
    }
    if (cebolla) {
        adiciones += 15
    }
    if (mayonesa) {
        adiciones += 5
    }
    if (mostaza) {
        adiciones += 5
    }

    let totalAPagar = precioBase + precioPan + adiciones;
    
    return `El total a pagar es: $${totalAPagar}`;
};

// Extra bonus 

// Numero Secreto

function numeroSecreto(numero) {

    let NumSecret = Math.floor(Math.random() * 10) + 1;

    if (numero === NumSecret) {
        return `Felicitaciones has acertado el numero secreto ${numero}`
    } else {
        return `No te desanimes sigue intentando, numero secreto ${NumSecret}`
    }
};

// Abrir Paracaidas

function abrirParacaidas(velocidad, altura) {

    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        return `Paracaidas Abierto a una velocidad de ${velocidad} km/h y una altura de ${altura} m`
    } else {
        return `Advertecia la velocidad debe ser menor a 1000 Km/h y la altura mayor o igual a 2000 m y menor a 3000 m.`
    }
};

// Estructura switch 

// Traductor condicional 

function traductorCondicional(palabra) {

    let enIngles;

    switch (palabra) {
        case "casa":
            enIngles = "house";
            break;
        case "perro":
            enIngles = "dog";
            break;
        case "pelota":
            enIngles = "ball";
            break;
        case "arbol":
            enIngles = "tree";
            break;
        case "genio":
            enIngles = "genius";
            break;
        default:
            return "La palabra ingresada es incorrecta";
    }
    return `La traduccion de "${palabra}" es "${enIngles}"`;
};

// Valoración de películas 

function valoracionPeliculas(valor) {

    let mensaje;

    switch (valor) {
        case "muy mala":
            mensaje = "Calificaste la película como Muy Mala. Lo lamentamos mucho";
            break;
        case "mala":
            mensaje = "Calificaste la película como Mala. Lo sentimos.";
            break;
        case "mediocre":
            mensaje = "Calificaste la película como Mediocre. Esperamos que la próxima sea mejor.";
            break;
        case "buena":
            mensaje = "Calificaste la película como Buena. ¡Nos alegra que te haya gustado!";
            break;
        case "muy buena":
            mensaje = "Calificaste la película como Muy Buena. ¡Qué alegría que la hayas disfrutado tanto!";
            break;
        default:
            mensaje = "Ingresaste un valor inválido.";
            break;
    }
    return `${mensaje} Gracias por tu visita`;
};