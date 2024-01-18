const medicos = [
    {
      nome: 'Leticia',
      sobrenome: 'Costana',
      genero: 'feminino',
      imagemPerfil: 'http://placekitten.com/400/400'
    },
    {
      nome: 'Adimaldo',
      sobrenome: 'Pinto',
      genero: 'masculino',
      imagemPerfil: 'http://placekitten.com/401/401'
    },
    {
      nome: 'Noah',
      sobrenome: 'Lutus',
      genero: 'nao-binario',
      imagemPerfil: 'http://placekitten.com/402/402'
    },
    {
        nome: 'Gnomo',
        sobrenome: 'Linux',
        genero: 'nao-binario',
        imagemPerfil: 'http://placekitten.com/402/405'
      },
  ];

  function exibirDados(medicos) {
    let data = new Date().getFullYear();
    let lista = document.querySelector('#lista');
    for (medico of medicos) {
        //let idade = data - filme.ano;
        let imagem = document.createElement('img');
        imagem.src = medico.imagemPerfil;        
        let paragrafo = document.createElement('p');
        paragrafo.textContent = medico.genero + " Dr(a). " + medico.nome + " " + medico.sobrenome ;
//        paragrafo.appendChild(document.createTextNode(medico.genero + " Dr(a). " + medico.nome + " " + medico.sobrenome ));
        lista.appendChild(imagem);        
        lista.appendChild(paragrafo)
        
    }
}

exibirDados(medicos);