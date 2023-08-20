const pilotos = ['Vettel', 'Alonso','Raikkonen','Massa'];
pilotos.pop();//remove o último elemento do array
console.log(pilotos);


pilotos.push('Verstappen');//adiciona elementos no primeiro indice do array
console.log(pilotos);

pilotos.shift();//remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton');
console.log(pilotos);

//splice adiciona e remove em qualquer posição do array

//adicioar com metodo splice
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

//remover com metodo splice
pilotos.splice(3, 1);
console.log(pilotos);


//metodo slice retorna um novo array
const algunsPilotos = pilotos.slice(2);
console.log(algunsPilotos);

const algunsPilotos2 = pilotos.slice(1, 4);
console.log(algunsPilotos2);