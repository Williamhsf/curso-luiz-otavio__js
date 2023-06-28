function envioFormulario(){
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  //função irá receber os dados digitados nos inputs
  function recebeDadosForm (evento) {
    //* prevDefault() - previne o que era pra acontecer por padrão e  
    //* não envie o formulario
    evento.preventDefault();

    //pegando somente o que está no formulário (form)
    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    //.value - adicionando valor ao form
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    })

    console.log(pessoas);

    resultado. innerHTML +=
    `<p>Nome: ${nome.value} ${sobrenome.value} </br>` +
    `Peso: ${peso.value} kg </br>
    Altura: ${altura.value}</p> </br>`;
  }

  form.addEventListener('submit', recebeDadosForm);
}

envioFormulario()