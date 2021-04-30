new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            return alert('Você clicou no botão!')
        },
        onPressed (event) {
            this.valor = event.target.value
        }
    }
})