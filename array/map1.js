const num = [ 1, 2, 3, 4, 5];


let resultado = num.map( e => e * 2);


console.log(resultado);

const soma10 = e => e + 10;
const triplo = e => e * 3;
const paraDibheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`;

resultado = num.map(soma10).map(triplo).map(paraDibheiro);
console.log(resultado);