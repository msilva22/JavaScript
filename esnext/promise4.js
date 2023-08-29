function gerarNumerosEntre(min, max, tempo) {
    if(min > max) [max, min] = [min, max];
        return new Promise(resolve => {
            setTimeout(function() {
                const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
                resolve(aleatorio);

            }, tempo)

    })
}


function gerarVariosNUmeros(){
    return  Promise.all([
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 1000),
        gerarNumerosEntre(1, 60, 500),
        gerarNumerosEntre(1, 60, 3000),
        gerarNumerosEntre(1, 60, 100),
        gerarNumerosEntre(1, 66, 1500),
    ])
}

console.time('promise');
gerarVariosNUmeros()
    .then(console.log)
    .then(() => { console.timeEnd('promise')});