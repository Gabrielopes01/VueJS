const alunos = [
    { nome: 'Jorge', nota: 8.9, bolsista: false},
    { nome: 'Ana', nota: 8.9, bolsista: false},
    { nome: 'Ricardo', nota: 9.5, bolsista: true},
]

//A Reduce esta pegando os valores anteriores e somando com os próximos aré só sobrar 1 valor
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual) {
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)  //Pode passar um valor inicial


console.log(resultado)