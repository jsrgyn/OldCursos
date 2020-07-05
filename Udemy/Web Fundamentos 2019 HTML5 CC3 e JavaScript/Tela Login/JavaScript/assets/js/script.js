console.log('joao@hcode.com.br');
console.log('O seu e-mail é: joao@hcode.com.br');

const email = 'joao@hcode.com.br';

console.log(email);
console.log('O seu e-mail é: ' + email);

var vemail = 'john@hcode.com.br'; //Var é uma variavel glocal. É o mais antigo.

let lemail = 'lest@hcode.com.br'; //Let é uma variavel local, usada no local declarado.

console.log(email + ' ' + vemail + ' ' + lemail);

console.log(`Escrevedo uma variavel sem usar o conctenar ${email}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O Botão foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('O mouse está sobre o formulário');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('O mouse está fora do formulário.');
});

document.querySelector('#form-login').addEventListener('submit', e => {
  //Aborta a ação do Formulario  para que possa tratar o envio via js e fazer uma ação com AJAX por exemplo.  
  e.preventDefault();

  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  console.log('O conteudo digitado foi: ' + email + 'e senha foi:' + password);

  let json1 = {
      email: "joao@hcode.com.br"
  };

  console.log(json1);

  let json2 = {
    email: email,
    password : password
};

console.log(json2);

let json3 = {
    email,
    password
};

console.log(json3);

let strJSON = JSON.stringify(json3);

console.log('O Meu JSON em string é: ' + strJSON);

console.log(JSON.parse(strJSON));

console.log(json3.email);

if (!json3.email){
    console.error('O campo e-mail deve ser preenchido!')
} else if (!json3.password) {
    console.error("O campo password deve ser preenchido!")
} else {
    console.info("Dados validados com sucesso!");
};

  console.log('Fomulário foi enviado! Aqui vai o Ajax');
});
