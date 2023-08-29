let a = 1;
console.log(a);

let p = new Promise(function(cumprirPromessa){
    cumprirPromessa(['Ana','Bia','Carlos','Daniel']);
});

//console.log(typeof p);

function primeiroElemento(array){
    return array;
}

function primeiraLetra(string){
    return string[0];
}

const letraMinuscula = letra => letra.toLowerCase();

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log());
