function gerarNumerosEntre(min, max, numerosProibidos){
    if(min > max)[max, min] = [min, max];
    return new Promise((resolve, reject) => {
        const aleatorio = parseInt(Math.random() * (max - min + 1)) + min;
        if(numerosProibidos.includes(aleatorio)){
            reject('Número repetido')
        }else {
            resolve(aleatorio);

        }
    })
}

 async function gerarMegaSena(qtdeNumeros,tentativas = 1) {
    try{
        const numeros = []
        for(let _ of Array(10).fill()){
           numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros

    }catch(e){
        if(tentativas > 10) {
            throw 'Nã deu certo'

        }else{
            gerarMegaSena(qtdeNumeros, tentativas + 1 )
        }
    }
}

gerarMegaSena(15)
    .then(console.log)
    .catch(console.log)