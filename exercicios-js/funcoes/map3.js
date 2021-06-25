Array.prototype.map2 = function(callback) {  //Muda a forma como algo é executado e cria funções
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i.toFixed, this))
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Lápis", "preco": 5.50 }',
    '{ "nome": "Caderno", "preco": 15.90 }',
]


//Retornar array com preços apenas
const paraobjeto = json => JSON.parse(json)
const getPreco = e => e.preco

let resultado = carrinho.map2(paraobjeto).map(getPreco)

console.log(resultado)