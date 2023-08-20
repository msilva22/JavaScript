Array.prototype.map2 = function(calback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++){
        newArray.push(calback(this[i],i, this))
    }
    return newArray;
}
const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome":"Caderno", "preco": 13.90}',
    '{"nome":"Kit de lapis", "preco": 41.22}',
    '{"nome":"Caneta", "preco": 7.92}'
]

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);