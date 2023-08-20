const aprovados = ['Agatha','Aldo', "Daniel",'Raquel'];

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
})

aprovados.forEach(nome => console.log(nome));
const exibieAprovados = apro_vado => console.log(apro_vado);
aprovados.forEach(exibieAprovados);

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1})`);
})

