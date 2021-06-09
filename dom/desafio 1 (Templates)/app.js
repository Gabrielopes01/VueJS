new Vue({
    el:'#app',
    data() {
        return {
            nome: 'Gabriel Lopes',
            idade: '19',
            imageLink: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
        }
    },
    methods: {
        numeroAleatorio() {
            return Math.random();
        }
    },
})