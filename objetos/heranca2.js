//Cadeia de prototipo
Object.prototype.attr0 = 'Z';
const avo = {attr1: 'A'};
const pai = { __proto__: avo, attr2: 'B'};
const filho = {__proto__:pai, attr3: 'C'};

console.log(filho.attr0, filho.attr1, filho.attr2 ,filho.attr0);


const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta) {
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta;
        }else{
            this.velAtual = this.velMax;
        }
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferari = {
    modelo: 'F40',
    velMax: 324 //shadowing
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}:${super.status()}`;
    }
}

Object.setPrototypeOf(ferari,carro);
Object.setPrototypeOf(volvo,carro);

console.log(ferari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferari.acelerarMais(300);
console.log(ferari.status());