const saudacao = 'Opa';

function exec() 
{
    const saudacao = 'Opa';
    return saudacao;
}

// /\ Não vai ter problema de valor, no caso, confusão entre nomes, pois cada variavel ta dentro de seu escopo, em contextos lexicos diferentes.
/*
const cliente = 
{
    nome: 'Pedro',
    idade:32,
    peso:90,
    endereco: {
        logradouro: 'Rua Muito Legal', // aqui tudo é do contexto do objeto endereço
        numero: 123
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);

console.log(Math.ceil(6.1));
*/

const pessoa =
{
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome : n, idade : i } = pessoa
console.log(n, i);

/*
const { endereco : { logradouro, numero, cep} } = pessoa; // nesse caso, ele não vai criar 'endereco', somente se fosse 'const { endereco } = ...', no caso, ele vai criar 'logradouro, numero e cep'.
console.log(logradouro, numero, cep);
*/

const [n1, ,n3, ,n5, n6 = 0] = [10,7,9,8];
console.log(n1, n3, n5, n6);

function rand({min = 0, max = 1000})
{
    const valor = Math.random() * (max-min) + min;
    return Math.floor(valor);
}

////const obj = {max: 50, min: 40}
//console.log(rand(obj));
//console.log(rand({min:1000}));

function rand([min = 0, max = 1000]) // msm coisa da ultima vez, mas usando colchetes
{
    if (min > max) [min, max] = [max, min]; // é uma forma de inverter as variáveis. se 'min > max', oq é min vira max, oq é max vira min. aí estou criando o array [max, min]. uma vez q vc desestruturou, vc n recebe array, vc recebe 2 atritutos, min e max. 
}

const resultado = nota => nota>= 7 ? "Aprovado" : "Reprovado"; // criei uma constante resultado q vai receber uma função arrow (nota). como a função 'nota' só vai ter um parametro, não precisa de parenteses ali na criação dela.
console.log(resultado(5));
console.log(resultado(8));

function tratarErroELancar(erro)
{
    //throw new Error('Ocorreu um erro'); 
    // throw 10 // posso fazer isso
    // throw true // posso fazer isso tbm
    // throw 'ERRO MENSAGEM' // posso fazer isso tb, posso tbm lançar um objeto:
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj) 
{
    try
    {
        console.log(obj.name.toUpperCase() + '!!!!');
    }
    catch(e)
    {
        tratarErroELancar(e); // vou passar o erro como parametro (e)
    }
    finally
    {
        console.log('final');
    }
    
}
const obj = { name: 'Roberto' }
imprimirNomeGritado(obj);

//const nome = notes => notes>=7 ? "Aprovad231o" : "Reprovado";
//console.log(nome(9));

//let pessoal = {nomePessoa: 'Ana', falar: function() { return `Eu sou ${this.nomePessoa}`}};
//pessoal.falar();


let militar = {nomeMilitar: 'Ana', mostrar: function() {return console.log(`Eu sou ${this.nomeMilitar}`)}};

function imprimirNomeEscrito(objt){
    try{
        console.log(objt.nomeMilitar);
    }
    catch(e){
        tratarErroEMostrar(e);
    }
    finally{
        console.log("Função executada. Fim.");
    }
}

function tratarErroEMostrar(erro)
{
    throw new Error('Ocorreu um erro na função.');
}

const objetoPassado = { nomeMilitar: 'Luiz'};
imprimirNomeEscrito(objetoPassado);

const soma = (a,b) => a + b;
console.log(soma(2,3));

////////////////

const funcs = []; 


const saudacoes = 'Olá';

function imprimirSaudacao()
{
    const saudacoes = 'Eai!';
    return saudacoes;
}

console.log(saudacoes);
console.log(imprimirSaudacao());

const novoCliente = 
{
    nome: 'Luiz',
    idade: 20,
    endereco: 
    {
        rua: 'Rua Zeferino de Faria, 129',
        bairro: 'Recreio dos Bandeirantes'
    }
}

console.log(novoCliente.endereco.rua);

function Obj(nome)
{
    this.nome = nome; // this.nome é o nome associado ao objeto dessa função, é o atributo publico
    this.exec = function() {
        console.log('Exec...');
    }
}

function objetoTeste(nome)
{
    this.nome = nome;
    this.exec = function()
    {
        console.log('exec...');
    }
}

const objetoCozinha = new objetoTeste('Panela');
objetoCozinha.exec();
console.log(objetoCozinha.nome);

const { nome, idade } = novoCliente;
console.log(nome, idade);

const escola = "Lemos de Castro";
console.log(escola.charCodeAt(7));

console.log('Pedro, Luiz, Henrique'.split(','));

function teste2(nota)
{
    if(nota > 7) // sim, isto é uma sentença de codigo
        ;

    {
        console.log(nota);
    }
}

teste2(8);

Number.prototype.entre = function (inicio, fim)
{
    return this >= inicio&& this <= fim
}



const imprimirResultado = function (nota)
{
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de Honra');
            break;
        case 8: case 7:
            console.log('Aprovado');
            break;
        case 6: case 5: case 4:
            console.log('Recuperação');
            break;
        case 3: case 2: case 1:
            console.log('Reprovado');
            break;
        default:
            console.log("Nota inválida");
    }
}

imprimirResultado(2);

function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor);
}

/*
let opcao = 0;

while (opcao != -1)
{
    opcao = getInteiroAleatorioEntre(-1, 10);
    console.log(`A opção escolhida foi ${opcao}`);
}
*/
/*
const notas = [6.5, 7.5, 9.0, 3.2, 4.1];

for(let i = 0; i < notas.length; i++)
{
    console.log(`A nota agora é: ${notas[i]}`);
}
*/

const pessoaNova = {
    nome: 'Gustavo',
    sobrenome: 'Marcon',
    idade: 20,
    peso: 60
}

for(let atributo in pessoaNova)
{
    console.log(`${atributo} : ${pessoaNova[atributo]}`);
}

const nums = [1,2,3,4,5,6,7,8,9,10];

for (x in nums){
    if (x==5) break;
    console.log(`x = ${nums[x]}`);
}

for (y in nums)
{
    if (y==5) continue; // 'continue' simplesmente interrompe a repetição corrente e vai para a proxima repetição
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) // atr
{
    for(b in nums)
    {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a}, ${b}`);
    }
}

const objNovo = {}; // aqui criei um objeto, lembre-se, {} define objeto

objNovo.falar = function () { return 'Opa' };

console.log(objNovo.falar()); // tem q colocar os parenteses () para de fato invocar a função

function randTeste ({min = 0, max = 100})
{
    if(min > max) [min,max] = [max,min];
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}
const objTeste = {max: 30, min: 50};
console.log(randTeste(objTeste));

const serHumano = {
    nome: 'Luiz',
    idade: 20,
    endereco: {
        rua: "Zeferino",
        numero: 129
    }
}
for (let i in serHumano)
{
    console.log(`${i}, ${serHumano[i]}`);
}


const numerosAleatorios = [3, 5.5, 8.5, 9.2];
for (let i in numerosAleatorios)
{
    if(i == 2) continue;
    console.log(`${i} = ${numerosAleatorios[i]}`);
}

/////////

function novaFuncao1() { }
function novaFuncao2() {}

const funcArray = [function (a,b) { return a + b}, novaFuncao1, novaFuncao2];

console.log(funcArray[1]());

function somaNova(a,b) {
    return function(c) {
        console.log(a+b+c);
    }
}

somaNova(2,3)(7); 

const cincoMais = somaNova(2,3); 
cincoMais(9);

function area(largura, altura)
{
    const area = largura * altura;
    if(area > 20)
    {
        console.log(`Valor acima do permitido: ${area}m2`);
    }
    else
    {
        return area
    }
}

console.log(area(2,2)); // vai executar normalmente
console.log(area(2, 0)); // 

function soma2(a,b,c)
{
    a = a !== undefined ? a : 1; // 1º estratégia: a vai receber o seguinte: se a for diferente de undefined (se tiver algum valor), ela recebe o valor de 'a', q foi dado no parametro, senão, recebe como padrão o valor '1'.
    b = 1 in arguments? b : 1; // 2º estrategia - dentro de 'arguments' existe o valor 1? se existir, b pega o valor de b, senão, pega o valor '1' como padrão. aqui é '1 in arguments' pq 'b' é de indice '1', se fosse 'a' seria '0 in arguments? [...]'
    c = isNaN(c) ? 1 : c; // essa é a estrategia mais segura para valores numericos.
    return a + b + c;
}
console.log(soma2(1,2,3));
console.log(soma2());
console.log(soma2(1));
console.log(soma2(5,6));
console.log(soma2(5,6,"Olá"));
console.log(soma2(0,0,0));

const pessoaNovissima = { 
    saudacao: 'Olá, bom dia',
    falar(){ // voce pode criar um metodo assim também, sem definir function etc
        console.log(this.saudacao); // to acessando o objeto do qual é o dono dessa função, no caso aqui, é o objeto 'pessoa'. sem o 'this' nao vai dar certo.
    }
}

pessoaNovissima.falar();

/*
function Pessoa()
{
    this.idade = 0; // no momento q eu instanciar essa funçao, criar um objeto a partir dessa funçao, vou ter o atributo idade para q eu possa manipular ele.
    setInterval(function(){
        this.idade++;
        console.log(this.idade);
    }.bind(this), 1000); // uma funçao pode chamar outras funçoes, chamamos 'bind' como notaçao ponto e, dentro, passamos 'this' pra amarrar o this do objeto a chamada da funçao.
}
*/
//new Pessoa();

let dobro = (a) => 2 * a;
console.log(dobro(3));

ola = () => "Olá"; // funçao sem parametros
console.log(ola);

function PessoaNovinha()
{
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000) // dentro de setInterval, criei uma funçao arrow
}

//new PessoaNovinha();

let comparaComThis = function (param){
    console.log(this === param);
}

comparaComThis(global);

const objNew = {}
comparaComThis = comparaComThis.bind(objNew);
comparaComThis(global);
comparaComThis(objNew);

let comparaComThisArrow = param => console.log(this === param); // o this continuará apontando pro global como uma funçao apontaria? verá que não, pois essa funçao foi definida dentro de um 'modulo' do node, e cada arquivo do node representa um modulo. ou seja, o dono dessa funçao seria o proprio modulo. e como referenciar o modulo atual?
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

comparaComThisArrow = comparaComThisArrow.bind(objNew);
comparaComThisArrow(objNew);

const fabricantes = ['Mercedes', 'Audi', 'BMW'];

function imprimir(nome, indice)
{
    console.log(`${indice + 1}. ${nome}`);
}

// a ideia do callback é voce passar uma funçao para outra funçao e quando um determinado evento acontecer, essa funçao vai ser chamada de volta. callback pode ser chamada varias vezes se quiser.

// forEach é uma funçao de fabricantes, e fabricantes é um array. pra cada elemento do array, quero que chame a funçao 'imprimir'. e o 'forEach' vai passar como parametro pra essa funçao o nome do elemento q ele ta percorrendo e, como 2 parametro, o indice.

// pra cada elemento q ele encontrar dentro do array, ele vai chamar de volta pra cada elemento q for encontrado, e vai imprimir no console indice e nome
const notas = [7.7, 6.5, 5.2, 8.0, 3.6, 7.1, 9.0];

fabricantes.forEach(imprimir);

let notasBaixas = [];
for(let i in notas)
{
    if(notas[i] < 7)
    {
        notasBaixas.push(notas[i]);
    }
}

console.log(notasBaixas);


const notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
}); // filter é uma função que vai filtrar os elementos de um array em cima de um determinado critério e vai retornar true ou false. se a funçao retornar true, significa que ela deve ser chamada no array q esta sendo gerado. se retornar false, ela não vai ser adicionada no array q é a resposta dessa funçao. quando eu chamo 'filter', o resultado da funçao 'notas' vai ser outro array (notasBaixas). o array original "notas" não altera, mas o array 'notasBaixas' sim vai ser alterado. passei uma funçao/callback que o resultado vai ser verdadeiro ou falso, essa funçao recebe como parametro uma nota. 'return nota < 7' vai ser true ou false. se nota < 7, é true, o elemento constará no array final (notasBaixas), senão, não vai adicionar.

// /\ note acima que chamei apenas um callback, uma funçao q sera pra cada um dos elementos

console.log(notasBaixas2);

// Com função arrow:
const notasBaixas3 = notas.filter(nota => nota < 7); // passei uma callback pra esse filter, q recebe como parametro o elemento atual nota e retorna true or false.
console.log(notasBaixas3);

/*
document.getElementsByTagName('body')[0].onclick = function(e){
    console.log('O evento ocorreu');
} */

function Carro(velocidadeMaxima = 200, delta = 5)
{
    // atributo privado
    let velocidadeAtual = 0; // atributo que pertence apenas ao escopo da função Carro. quando eu instanciar um objeto a partir dessa funçao, nao tem como acessar diretamente velocidadeAtual pq é um atributo interno da minha função.

    // metodo publico
    this.acelerar = function() { // essa funçao é responsavel por acrescentar a velocidade atual q é uma velocidade q tá visivel apenas naão
        if(velocidadeAtual + delta <= velocidadeMaxima)
        {
            velocidadeAtual += delta;
        }
        else{
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // método público
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());


const xNovo = 'Global';

function fora() {
    const xNovo = 'Local';
    function dentro() {
        return xNovo;
    }
    return dentro;
}
const minhaFuncao = fora();
console.log(minhaFuncao());

function criarProduto(nomeProduto, precoProduto)
{
    return{
        nomeProduto,
        precoProduto,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('iPad', 1199.49));

const pessoaPah = nomePa => {
    return
}

function getPreco(imposto = 0, moeda = 'R$')
{
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`;
}

const produto = {
    nome: 'notebook',
    preco: 4589,
    desc: 0.15,
    getPreco // como ja tenho uma funçao com esse nome, ao criar um atributo assim com esse nome ele ja vai associar automaticamente a funçao getPreco
}
global.preco = 50;
global.desc = 0.15;
console.log(produto.getPreco());

////////////////

/*
const somaValores = (valorUm, valorDois) => valorUm + valorDois;
console.log(somaValores(5,8));
*/


// Exercicios JavaScript Leitão -

// 1)
const calculadoraDeValores = (valorUm, valorDois) => {
    console.log(`A soma dos valores é de ${valorUm + valorDois}`);
    console.log(`A subtração de valores é de: ${valorUm - valorDois}`);
    console.log(`A multiplicação dos valores é de: ${valorUm * valorDois}`);
    console.log(`A divisão dos valores é de: ${valorUm / valorDois}`);
} 

calculadoraDeValores(10,5);

////////////////////

// 2)
const ladosDoTriangulo = (x, y, z) => {
    return (x == y) && (y == z) ? "Triângulo Equilátero" : (x == y) || (y == z) ? "Triângulo Isósceles" : "Triângulo Escaleno";
}

console.log(ladosDoTriangulo(3,3,3));


//////////////

// 3) 
const baseElevadaAoExpoente = (base, expoente) => 
{
    return Math.pow(base, expoente);
}

console.log(baseElevadaAoExpoente(2,5));

////////////

// 4)
const divisaoDeValores = (dividendo, divisor) => {
    console.log(`A divisão dos números é: ${dividendo/divisor}, e o resto é de: ${dividendo%divisor}`);
}

divisaoDeValores(9,2);

//////////

// 5)
const flutuanteCorrigido = (numero) => numero = Number(numero.toFixed(2));
console.log(flutuanteCorrigido(0.1 + 0.2));

// 10)
const divisivelPorTres = (numero) => numero % 3 == 0 ? Boolean(true) : Boolean(false);
console.log(divisivelPorTres(7));
 
// 11)
