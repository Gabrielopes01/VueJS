const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//Callback é quando uma função é chamada uando um evento ocorrer
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricant => console.log(fabricante))