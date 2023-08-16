const pessoa = {nome: 'João'};
pessoa.nome = 'Pedro';
console.log(pessoa);


//Vai dar erro
//pessoa = {nome: 'Ana'};


//congelar objeto ( não é possivel mas adicioonar ou deletetar)
Object.freeze(pessoa);
pessoa.nome = 'Maria';
pessoa.endereco = 'Rua ABC';
delete pessoa.nome;
console.log(pessoa.nome);

const pessoaConstante = Object.freeze({nome: 'João'});
console.log(pessoaConstante);
