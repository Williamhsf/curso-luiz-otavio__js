// capturar o evento de submit do formulario
const form = document.querySelector("#form");

 

//capturando o evento do calculo imc
form.addEventListener('submit', function (e) {
  e.preventDefault(); //garante que nada será enviado
  //pegando as input da DOM
  const inputPeso = e.target.querySelector('#peso'); //e.target -> de onde estou selecionando (form)
  const inputAltura = e.target.querySelector('#altura');
  
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);
  
  const msg = `Seu IMC é ${imc} (${nivelImc}).`;


  setResultado(msg, true);
})


// pegando por uma tabela os niveis de pesos
function getNivelImc (imc) {
  //array de niveis de pesos
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  // ifs caso a pessoa atinja algum desses pesos
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];  
}

// função que calcula IMC
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

// função para criar paragrafos
function criaP () {
  //criar paragrafo adicionando dentro da tag resultado
  const p = document.createElement('p');
  return p;
}

//criou uma função para enviar uma msg
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado');
  //uni variavel com o html
  resultado.innerHTML = ''; //-> limpa primeira sessao

  const p = criaP();

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad');
  }

  p.innerHTML = msg;
  resultado.appendChild(p);
}