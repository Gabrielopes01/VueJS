new Vue({
    el:'#app',
    data: {
        valor: '',
        valor2: '',
    },
    methods: {
        exibirAlerta() {
            alert('Alerta!')
        },
        armazenaValor(e) {
            this.valor = e.target.value;
        }
    },
});