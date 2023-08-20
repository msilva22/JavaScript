const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true},
]
/*function verificar(alunos){
    
for(let i = 0; i < alunos.length; i++){
       if(alunos[i].bolsista == true){
            console.log(alunos[i].nome, i);
        }
        
    
}
}
verificar(alunos);*/

const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas));

const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a > a.bolsista).reduce(algumBolsista));

