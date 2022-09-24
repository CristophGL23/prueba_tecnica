const array1 = [1,2,1,5,4,67,3,6,6,1,2,10,13,22];

function array_no_repetidos(mi_array = array1) {
    const nuevo_array = [];
    for (let i = 0; i < mi_array.length; i++) {
        const element = mi_array[i];
        
        if (!nuevo_array.includes(mi_array[i])) {
            nuevo_array.push(element);
        }
    }
    return nuevo_array
}

console.log(this.array_no_repetidos());