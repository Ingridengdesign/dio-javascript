const lista = [
    {
        nome: 'sabao em po',
        preco: 15,
    },
    {
        nome: 'amaciante',
        preco: 7,
    },
    {
        nome: 'detergente',
        preco: 2,
    },
]

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel)
    
}

console.log(calculaSaldo(saldoDisponivel, lista))