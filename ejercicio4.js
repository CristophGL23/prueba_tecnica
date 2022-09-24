function contar_palabras_repetitivas(cadena, palabra) {
    palabra = palabra.toLocaleLowerCase()
    const nuevo_array = [];
    if (cadena.constructor != String || palabra.constructor != String) {
        throw TypeError('Ambos argumentos deben de ser de tipo String.')
    }

    let palabras = cadena.split(' ').map(p => p.toLocaleLowerCase());

    // return palabras.indexOf(palabra.toLocaleLowerCase()) != -1;
    for (let i = 0; i < palabras.length; i++) {
        const element = palabras[i];
        if (element.includes(palabra)) {
            nuevo_array.push(element);
        }
    }
    return nuevo_array.length
}

console.log(contar_palabras_repetitivas('Hola mundo mundo mundo', 'Mundo'))



