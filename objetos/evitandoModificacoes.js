//Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível', Object.isExtensible(produto));

produto.nome = 'Boracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

//Object.seal
const pessoa = { nome: 'Juliana',idade:35};
Object.seal(pessoa);
console.log('Selado ', Object.isSealed(pessoa));

pessoa.sobrenme = 'Silva';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);

//Object.freeze = selado + valores cosntantes

