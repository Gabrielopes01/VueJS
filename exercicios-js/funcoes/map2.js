const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Lápis", "preco": 5.50 }',
    '{ "nome": "Caderno", "preco": 15.90 }',
]


//Retornar array com preços apenas
const paraobjeto = json => JSON.parse(json)
const getPreco = e => e.preco

let resultado = carrinho.map(paraobjeto).map(getPreco)

console.log(resultado)