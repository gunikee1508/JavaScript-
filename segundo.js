const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax) {
            this.velAtual += delta;
        }
        else {
            this.velAtual = this.velMax;
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`;
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // no momento que defino a velMax, esse atributo vai sombrear o atributo original de 'carro', então vou ter aqui o shadowing, que é o 'sombreamento', onde temos uma variavel local e essa variavel pode sombrear variavel de escopo mais abrangente
}

const volvo = {
    modelo: 'V40',
    status() {
        // sombreei a função 'status', vou usar ela com uma funçao a mais. assim como uso 'this' pra referenciar ao objeto atual, eu uso 'super' pra referenciar o meu prototipo. 
        return `${this.modelo}: ${super.status()}`; // estou sombreando a minha funçao status através do objeto 'volvo', por enquanto ela é uma funçao independente. com o 'super' eu uso a função do meu prototipo, isto é, status do prototipo, no caso, carro.
    }
}

Object.setPrototypeOf(ferrari, carro); // estabeleci uma relação entre ferrari e carro. isto é, ferrari tem 'carro' como seu prototipo. 'setPrototypeOf' é um método especificado pela linguagem, onde tiver JS, ele funcionará. primeiro tenho o objeto (ferrari), depois é o prototipo daquele objeto (carro).

Object.setPrototypeOf(volvo, carro);

console.log(ferrari);
console.log(volvo);

volvo.acelerarMais(100);
console.log(volvo.status());

ferrari.acelerarMais(300);
console.log(ferrari.status());

////////////////


class Avo {
    constructor (sobrenome) {
        this.sobrenome = sobrenome;        
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome); // é uma forma de chamar o construtor de avo pra que sete o sobrenome.
    }
}

class Filho extends Pai {
    constructor() { // passei nenhum parametro
        super('Silva'); // vai chamar o construtor do pai
    }
}

const filho = new Filho();
console.log(filho);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]); // acessei o elemento Bia.


aprovados.splice(1, 0, 'Elemento1', 'Elemento2');
console.log(aprovados);

const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // esse método remove o ultimo elemento do array, no caso, vai remover 'Massa'.

pilotos.shift(); // o 'shift' tira elemento da primeira posição do array.
console.log(pilotos); // vai mostrar sem o 'vettel', já que removemos.

pilotos.unshift('Hamilton'); // o método 'unshift' adiciona um elemento na primeira posição do array.
console.log(pilotos); // vai mostrar o array com 'Hamilton'

pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);


const algussPilotos1 = pilotos.slice(2);

const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'};
console.log(quaseArray); 
Object.defineProperty(quaseArray, 'toString', { // o toString é uma função que vai retonrar object.values. 'tostring' é o nome da propriedade que esta sendo definida ou modificada.
    value: function() { return Object.values(this)},
    enumerable: false
})

console.log(quaseArray[0])

//const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];
//aprovados.forEach(function(nome, indice) {
    //console.log(`${indice+1} : ${nome}`);
//});

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach2(function(nome, indice) {
    console.log(`${indice+1} : ${nome}`);
})