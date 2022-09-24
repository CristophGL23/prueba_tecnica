const numero = 80

let numero_ingresado = prompt('Ingresa número limite para imprimir en pares: ');

if (numero_ingresado == '') {
    alert('Ingresa un numero correcto.')
}

for (let i = 0; i <= numero_ingresado; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}