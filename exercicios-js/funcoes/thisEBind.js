const pessoa = {
    saudacao: 'Bom Dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()  //Ira dar um conflito entre o objeto e a constante

//Para resolver o comflito usamos o bind
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()