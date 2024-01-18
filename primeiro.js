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