function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 52,
};

const pessoa2 = {
	nome: 'Prince',
	idade: 27,
};

const animal = {
	nome: 'Cadu',
	idade: 9,
};

console.log(calculaIdade.call(pessoa1, 40));
console.log(calculaIdade.apply(pessoa2, [24]));