function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase)
            //reject('Erro') //Erro, rejeição
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Ola')
    .then(frase => frase.concat('!'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))