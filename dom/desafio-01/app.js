new Vue({
    el: "#desafio",
    data: {
        nome: 'Felipe Gueller',
        idade: 22,
        imagem:'./image.jpg',
    },
    methods: {
        numeroAleatorio(){
            return Math.random().toFixed(2)
        },
    }
})