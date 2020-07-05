/**
 * Comentario de bloco usado pela comunidade JS
 */

//Comentario de uma linha dp JS
console.log('Olá mundo do JS externo');
/*
Comentario de bloco do JS
 */
var olaMundo = "Olá mundo da variavel";
console.log(olaMundo);
//Nova forma de declarar variavel nas novas versão do JS = let.
/*let leva em conta o escopo em que foi definida */
/*const declarar uma constante */
//No JS int e float é number.

//O typeOf para mostrar o tipo de dados da variavel.

//Declarando variavel
let a = 10;
const b = 20;
const c = '10';
const d = '10';

console.log(a == b); 

console.log(a == c); //Será true, pois ele ira comparar os conteudos e não o tipo.
console.log(a != c); //Testando se conteudos são diferentes.

console.log(a === d); //Será false, pois ele esta comparando o tipo e o conteudo.
console.log(a !== d); //Testando se conteudo e tipo são diferentes.

console.log(a != b && typeof b == 'string'); //&& = and.
console.log(a != b || typeof b == 'string'); //|| = or.

let cor = "verde";
if (cor === "verde") {
    console.log("siga");
} else {
    console.log("Pare");
};

let cor1 = "amarelo";
if (cor1 === "verde") {
    console.log("siga");
} else if (cor1 === "amarelo") {
    console.log("atenção!");
} else {
   console.log("Pare");
};

let cor2 = "azul";
switch (cor2) {
    case "verde":
        console.log('siga cor2');
        break;
    case "vermelho":
        console.log('pare cor2');
        break;
    case "amarelo":
        console.log('atenção! cor2');
        break;
    default:
        console.log("cor2 invalida");
        break;
}

//Exemplo de uma tabuada.
let n = 5;
for (let i = 0; i <= 10; i ++) {
    console.log(`${i} X ${n} = ${i*n}`);
    console.log(i + " X " + n + " = " + (i * n) + " ==> Concatendando");
};

function soma(x1, x2) {
    return x1 + x2;
}

console.log('Somar = ' + soma(10, 20));

let resutado = soma(15, 15);
console.log('Resultado da soma = ' + resutado);

function calc(x1, x2, operador){
    //return ${x1} ${operador} ${x2};
    return eval(`${x1} ${operador} ${x2}`);
};

let somar = calc(1, 2, '+');
let sub = calc(1, 2, '-');
let mult = calc(1, 2, '*');
let div = calc(1, 2, '/');

console.log(' Somar = ' + somar + ' Sub = ' + sub + ' Mult = ' + mult + ' Div = ' + div);

//Funções anonimas do JS
(function(x1, x2, operador){ 
    return eval(`${x1} ${operador} ${x2}`);
})(1, 2, "-");

//Nova forma de escrever funções no novo JS "Arrow Function é novo recurso para funções".
let calc2 = (x1, x2, operador) => {    
    return eval(`${x1} ${operador} ${x2}`);
};

console.log('Chamando uma Arrow Function: ' + calc2(1, 2, '-'));

//Interagindo com windows
window.addEventListener('focus', event => {
    console.log('Focus');
});

document.addEventListener('click', event => {
    console.log('Click');
})

calc2(1, 2, '-');

//Trabalhando com data no JS;
//Curiosidades o JS controla data 01/01/1970 pela qtd milisegundos.
let agora = Date.now();
console.log(agora);

let agora2 = new Date();
console.log(agora2);
console.log(agora2.getDay());
console.log(agora2.getDate());
console.log(agora2.getFullYear());
console.log(agora2.getMonth());
console.log(agora2.toLocaleDateString("pt-BR"));

//Trabalhando com arrays.
let carros = ["palio 98", "toro", "uno", 10, true, new Date(), function(){}];
console.log(carros);
console.log(carros.length);
console.log(carros[1]);
console.log(carros[5].getFullYear());
console.log(carros[6]());

carros.forEach(function(value, index){

    console.log(index, value);

});

let celular = function(){
    let cor = "prata";
};

let objeto = new celular();
console.log(objeto);

let celular2 = function(){
    this.cor = "prata";

    this.ligar = function(){
        console.log('uma ligação');
        return "ligando..."
    }
};
let objeto2 = new celular2();
console.log(objeto2);
console.log(objeto2.cor);
console.log(objeto2.ligar());

//Declarando class no novo formato suportado pelo os navegadores modernos.
class celular3 {
    constructor () {
        this.cor = "azul";
    }        

    ligar(){
        console.log('uma ligação');
        return "ligando..."
    }
};

let objeto3 = new celular3();
console.log(objeto3);
console.log(objeto3.cor);
console.log(objeto3.ligar());