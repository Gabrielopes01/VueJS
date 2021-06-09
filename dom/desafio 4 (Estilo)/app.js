new Vue({
    el:'#app',
    data() {
        return {
            aplicaDestaque: true,
            classeDigitada: '',
            classeDigitada2: '',
            encolher: false,
            cor: '',
            width: '0',
            valor: 5
        }
    },
    methods: {
        iniciarEfeito() {
            this.aplicaDestaque = !this.aplicaDestaque
        },
        setEncolher(e) {
            if(e.target.value == 'true'){
                this.encolher = true
            } else if (e.target.value == 'false') {
                this.encolher = false
            }
        },
        iniciarProgresso() {
            this.valor = 5
            this.width = '5%'
            const temporizador = setInterval(() => {
                this.valor += 5
                this.width = `${this.valor}%`
                console.log(this.valor)
                if(this.valor >= 100) {
                    clearInterval(temporizador)
                }
            }, 500)
        }
    },
    computed: {
        trocaEfeito() {
            return {
                destaque: this.aplicaDestaque,
                encolher: !this.aplicaDestaque
            }
        }   
    },
    watch: {
        aplicaDestaque(antigo, novo) {
            setTimeout(() => {
                this.aplicaDestaque = !this.aplicaDestaque
            }, 2000)
        }
    }
})