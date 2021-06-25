const alunos = [
    { nome: 'Jorge', nota: 8.9, bolsista: false},
    { nome: 'Ana', nota: 8.9, bolsista: false},
    { nome: 'Ricardo', nota: 9.5, bolsista: true},
]

//Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

//Temos algum bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
