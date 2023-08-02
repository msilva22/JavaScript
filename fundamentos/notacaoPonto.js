console.log(typeof console);
console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Bola';
//obj1[nome] = 'Bola1';

function Obj(nome){
    this.nome = nome;
    this.exec = function(){
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('mesa');
obj3.exec();
console.log(obj2.nome);
console.log(obj3.nome);