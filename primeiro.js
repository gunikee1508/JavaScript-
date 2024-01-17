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