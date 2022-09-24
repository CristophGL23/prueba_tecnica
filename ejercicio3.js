function generar_multiplicaciones(numero, inicio, fin, ciclo) {
    switch (ciclo) {
        case 'for':
            let numero_m = 0;
            for (let i = inicio; i < 1000; i++) {
                numero_m =  numero * i;
                if (numero_m > fin) {
                    break;
                }
                console.log(`${numero} x ${i} = ${numero_m}`)
            }   
            break;   
        
        case 'while':
            let numero_multiplo = 0;
            let i = 1;
            while (numero_multiplo < fin) {
                numero_multiplo = numero * i;
                console.log(`${numero} x ${i} = ${numero_multiplo}`);
                i++
            }
            break;

        case 'do-while':
            let numero_multiplo_do = 0;
            let index = 1;
            do {
                numero_multiplo_do = numero * index;
                console.log(`${numero} x ${index} = ${numero_multiplo_do}`);
                index++
            } while (numero_multiplo_do < fin);
            break;
    
        default:
            break;
    }
}

console.log(generar_multiplicaciones(4, 0, 200, 'do-while'))