//função sem retorno
function imprimirSoma(a, b){

    console.log(a + b)
}
imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 3, 3, 5, 5);
imprimirSoma();

//função com retorno
function soma(a, b = 0){
    return a + b;
}
console.log(soma(2, 3));
console.log((2));