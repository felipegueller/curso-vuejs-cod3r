new Vue({
    el: '#desafio',
    data: {
        nome: "Zequinha",
        idade: 20,
        imagem: './rocket.png'
    },
    methods: {
        numeroAleatorio() {
            return Math.floor(Math.random() * (10 - 1)) + 1
        },
    }
})