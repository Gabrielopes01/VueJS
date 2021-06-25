{
    const a = 10
    let b = 20
    console.log(b) //O let tem escopo local
}
console.log(a)  //O const tem escopo global


//Template String
const produtro = 'iPad'
consolee.log(`${produto} é caro!`)


//Destructure
const[l, e, ...tras] = 'Teste'  //l = T, e = e, tras = ste


const [x, , y] = [1, 2, 3] //[1, 3]
console.log(x, y)


//Object
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj)) //Pega só os valores em forma de array [1, 2, 3] 
console.log(Object.entries(obj)) //Pega o nome dos atributos em forma de string e junta dentro de um array com seu valor [['a', 1], ['b', 2], ['c', 3]]


//Spread (...)
const grupoA = ['Ana', 'Julio', 'Emilia']
const grupoFinal = ['Roberto', ...grupoA, 'Maicon']
console.log(grupoFinal)