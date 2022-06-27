const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Maria',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovados (lista, media){
    let aprovados = [];
    for(let i = 0; i < lista.length; i++){
        const {nota, nome} = lista[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));