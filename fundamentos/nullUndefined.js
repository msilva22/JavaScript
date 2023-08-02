let valor;
console.log(valor);

valor = null; //ausencia de valor
console.log(valor);
// erro = console.log(valor.toString());
const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;
console.log(produto);
produto.preco = undefined;
console.log(!!produto.preco);
//delete produto.preco;
console.log(produto);
produto.preco = null;

console.log(!!produto.preco);
console.log(produto);