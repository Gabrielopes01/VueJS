let comparaComThis = function(param) {
    console.log(this === param)
} 

comparaComThis(global)  //True

//O comando .bind() muda o this de uma função, por padrão ele veio global
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //False
comparaComThis(obj)  //True


//Em caso de aerrowFunction, o padrão é o modulo
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)


//O bind() não consegue mudar o this de uma arrowFunction
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)