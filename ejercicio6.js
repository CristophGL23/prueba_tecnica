const arreglo = [
    {
        id: 1, nombre: 'cristoph', apellido: 'rodriguez', day: 23, month: 12, year: 2003
    },
    {
        id: 1, month: 12, year: 2003
    },
    {
        id: 1, nombre: 'cristoph', apellido: 'rodriguez', day: 23
    },
    {
        id: 1, apellido: 'rodriguez', day: 23, month: 12, year: 2003
    },
]

function length_object_max(array) {
    let max_length = 0;
    let array_de_tamaños = [];
    let position_length_max = 0;
    array.forEach(e => {
        let tamaño_objeto = Object.keys(e).length;
        array_de_tamaños.push(tamaño_objeto);
    });
    
    array_de_tamaños.forEach((e, index) => {
        if (max_length < e) {
            max_length = e
            position_length_max = index
        }
    });

    return array[position_length_max]
}

console.log(length_object_max(arreglo))