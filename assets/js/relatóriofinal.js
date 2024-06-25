document.addEventListener('DOMContentLoaded', function () {
  var informacao = localStorage.getItem("informacaoParaExibir");
  var equationDisplay = localStorage.getItem("equationDisplay");
  var R2_Display = localStorage.getItem("R2_Display");

  var melhorcaracterRegressao = localStorage.getItem("melhorcaracterRegressao");
  var melhorcaracterGrauCorrelacao = localStorage.getItem("melhorcaracterGrauCorrelacao");
  var melhorcaracterAnova = localStorage.getItem("melhorcaracterAnova");
  var melhorcaracterOutlier = localStorage.getItem("melhorcaracterOutlier");
  var melhorcaracterResiduos = localStorage.getItem("melhorcaracterResiduos");

  var piorcaracterRegressao = localStorage.getItem("piorcaracterRegressao");
  var piorcaracterGrauCorrelacao = localStorage.getItem("piorcaracterGrauCorrelacao");
  var piorcaracterAnova = localStorage.getItem("piorcaracterAnova");
  var piorcaracterOutlier = localStorage.getItem("piorcaracterOutlier");
  var piorcaracterResiduos = localStorage.getItem("piorcaracterResiduos");

  var podecaracterRegressao = localStorage.getItem("podecaracterRegressao");
  var podecaracterGrauCorrelacao = localStorage.getItem("podecaracterGrauCorrelacao");
  var podecaracterAnova = localStorage.getItem("podecaracterAnova");
  var podecaracterOutlier = localStorage.getItem("podecaracterOutlier");
  var podecaracterResiduos = localStorage.getItem("podecaracterResiduos");

  var conclusãoLIN = document.getElementById('conclusãoLIN');
  var porcentagemResultLIN = document.getElementById('porcentagemResultLIN');



  console.log("informacao:", informacao);
  console.log("equationDisplay:", equationDisplay);
  console.log("R2_Display:", R2_Display);

  console.log("melhorcaracterRegressao:", melhorcaracterRegressao);
  console.log("melhorcaracterGrauCorrelacao:", melhorcaracterGrauCorrelacao);
  console.log("melhorcaracterAnova:", melhorcaracterAnova);
  console.log("melhorcaracterOutlier:", melhorcaracterOutlier);
  console.log("melhorcaracterResiduos:", melhorcaracterResiduos);

  console.log("piorcaracterRegressao:", piorcaracterRegressao);
  console.log("piorcaracterGrauCorrelacao:", piorcaracterGrauCorrelacao);
  console.log("piorcaracterAnova:", piorcaracterAnova);
  console.log("piorcaracterOutlier:", piorcaracterOutlier);
  console.log("piorcaracterResiduos:", piorcaracterResiduos);

  console.log("podecaracterRegressao:", podecaracterRegressao);
  console.log("podecaracterGrauCorrelacao:", podecaracterGrauCorrelacao);
  console.log("podecaracterAnova:", podecaracterAnova);
  console.log("podecaracterOutlier:", podecaracterOutlier);
  console.log("podecaracterResiduos:", podecaracterResiduos);

  console.log("conclusãoLIN:", conclusãoLIN);
  console.log("porcentagemResultLIN:", porcentagemResultLIN);




  if (informacao) {
    document.getElementById("informacao_recebida").textContent = informacao;

  }

  if (informacao === "O método possui habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.") {
    document.getElementById("informacao_recebida").textContent = informacao;
    document.getElementById("informacao_recebidaLIN").textContent = "O método evidenciou habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
    conclusãoLIN.textContent = 'Aprovado';
    porcentagemResultLIN.textContent = "100%"
  }

  if (informacao === "O estudo da linearidade evidenciou que o método NÃO possui habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.") {
    document.getElementById("informacao_recebida").textContent = informacao;
    document.getElementById("informacao_recebidaLIN_Lim").textContent = "O estudo da linearidade evidenciou que o método NÃO possui habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
    conclusãoLIN.textContent = 'Reprovado';
    porcentagemResultLIN.textContent = "0%"
  }

  if (informacao === "O estudo da linearidade evidenciou que o método possui pontos a serem verificados e otimizados para que tenha habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.") {
    document.getElementById("informacao_recebida").textContent = informacao;
    document.getElementById("informacao_recebidaLIN_Asp").textContent = "O estudo da linearidade evidenciou que o método possui pontos a serem verificados e otimizados para que tenha habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
    document.getElementById("informacao_recebidaLIN_LimR").textContent = piorcaracterRegressao;
    document.getElementById("informacao_recebidaLIN_LimG").textContent = piorcaracterGrauCorrelacao;
    document.getElementById("informacao_recebidaLIN_LimA").textContent = piorcaracterAnova;
    document.getElementById("informacao_recebidaLIN_LimO").textContent = piorcaracterOutlier;
    document.getElementById("informacao_recebidaLIN_LimRes").textContent = piorcaracterResiduos;

    document.getElementById("informacao_recebidaLIN_R").textContent = melhorcaracterRegressao;
    document.getElementById("informacao_recebidaLIN_G").textContent = melhorcaracterGrauCorrelacao;
    document.getElementById("informacao_recebidaLIN_A").textContent = melhorcaracterAnova;
    document.getElementById("informacao_recebidaLIN_O").textContent = melhorcaracterOutlier;
    document.getElementById("informacao_recebidaLIN_Res").textContent = melhorcaracterResiduos;
    
    conclusãoLIN.textContent = 'Reprovado, mas pode ser melhor investigado';
  }
// Fora do bloco condicional
var porcentagemResultLIN = document.getElementById('porcentagemResultLIN');
porcentLinearidade(); // Chama a função para garantir que o conteúdo seja atualizado

if (equationDisplay) {
  document.getElementById("equationDisplay").textContent = `Equação da reta: ${equationDisplay}`;
}

if (R2_Display) {
  document.getElementById("R2").textContent = `Coeficiente de determinação (r²): ${R2_Display}`;
}

  if (melhorcaracterRegressao) {
    document.getElementById("melhorcaracterRegressao").textContent = melhorcaracterRegressao;
  }

  if (melhorcaracterGrauCorrelacao) {
    document.getElementById("melhorcaracterGrauCorrelacao").textContent = melhorcaracterGrauCorrelacao;
  }

  if (melhorcaracterAnova) {
    document.getElementById("melhorcaracterAnova").textContent = melhorcaracterAnova;
  }

  if (melhorcaracterOutlier) {
    document.getElementById("melhorcaracterOutlier").textContent = melhorcaracterOutlier;
  }

  if (melhorcaracterResiduos) {
    document.getElementById("melhorcaracterResiduos").textContent = melhorcaracterResiduos;
  }

  if (piorcaracterRegressao) {
    document.getElementById("piorcaracterRegressao").textContent = piorcaracterRegressao;
  }

  if (piorcaracterGrauCorrelacao) {
    document.getElementById("piorcaracterGrauCorrelacao").textContent = piorcaracterGrauCorrelacao;
  }

  if (piorcaracterAnova) {
    document.getElementById("piorcaracterAnova").textContent = piorcaracterAnova;
  }

  if (piorcaracterOutlier) {
    document.getElementById("piorcaracterOutlier").textContent = piorcaracterOutlier;
  }

  if (piorcaracterResiduos) {
    document.getElementById("piorcaracterResiduos").textContent = piorcaracterResiduos;
  }

  if (podecaracterRegressao) {
    document.getElementById("podecaracterRegressao").textContent = podecaracterRegressao;
  }

  if (podecaracterGrauCorrelacao) {
    document.getElementById("podecaracterGrauCorrelacao").textContent = podecaracterGrauCorrelacao;
  }

  if (podecaracterAnova) {
    document.getElementById("podecaracterAnova").textContent = podecaracterAnova;
  }

  if (podecaracterOutlier) {
    document.getElementById("podecaracterOutlier").textContent = podecaracterOutlier;
  }

  if (podecaracterResiduos) {
    document.getElementById("podecaracterResiduos").textContent = podecaracterResiduos;
  }

});




function inputinfoLinear() {
  // Obtém o valor do campo de entrada
  var inputRelat = document.getElementById("inputRelat").value;
  // Obtém o elemento para exibir o valor
  var inputRelatDisplay = document.getElementById("inputRelatDisplay");


  // Define o valor do elemento de exibição
  inputRelatDisplay.textContent = inputRelat;


  // Armazena o valor no localStorage
  localStorage.setItem("inputRelat", inputRelat);
  localStorage.setItem("inputRelatDisplay", inputRelatDisplay.textContent);


  // Oculta o campo de entrada e o botão, e exibe o elemento de exibição
  document.getElementById("inputRelat").style.display = 'none';
  document.getElementById("inputRelatDisplay").style.display = 'block';
  document.getElementById("btn_inputRelat").style.display = 'none';

}


function limparInformacaoInputRelat() {
  document.getElementById("inputRelat").value = "";
  document.getElementById("inputRelatDisplay").textContent = "";



  // Limpar o valor dos itens específicos no localStorage
  localStorage.setItem("inputRelat", "");
  localStorage.setItem("inputRelatDisplay", "");



  // Mostrar os elementos novamente
  document.getElementById("inputRelat").style.display = 'block';
  document.getElementById("inputRelatDisplay").style.display = 'block';
  document.getElementById("btn_inputRelat").style.display = 'block';
}

/*...*/

function inputinfoMelhorCaractMétodo() {
  // Obtém o valor do campo de entrada
  var melhorCarctFinal = document.getElementById("melhorCarctFinal").value;
  // Obtém o elemento para exibir o valor
  var inputinfoMelhorCaractMétodoDisplay = document.getElementById("inputinfoMelhorCaractMétodoDisplay");


  // Define o valor do elemento de exibição
  inputinfoMelhorCaractMétodoDisplay.textContent = melhorCarctFinal;

  // Armazena o valor no localStorage
  localStorage.setItem("melhorCarctFinal", melhorCarctFinal.value);
  localStorage.setItem("inputinfoMelhorCaractMétodoDisplay", inputinfoMelhorCaractMétodoDisplay.textContent);


  // Oculta o campo de entrada e o botão, e exibe o elemento de exibição
  document.getElementById("melhorCarctFinal").style.display = 'none';
  document.getElementById("inputinfoMelhorCaractMétodoDisplay").style.display = 'block';
  document.getElementById("btn_inputMelhorCarctMetodo").style.display = 'none';
}


function limparInformacaoMelhorCaractMetodo() {

  // Limpar o valor dos campos de entrada
  document.getElementById("melhorCarctFinal").value = "";
  document.getElementById("inputinfoMelhorCaractMétodoDisplay").textContent = "";

  // Remover itens específicos do localStorage
  localStorage.setItem("melhorCarctFinal", "");
  localStorage.removeItem("inputinfoMelhorCaractMetodoDisplay");


  // Mostrar os elementos novamente
  document.getElementById("melhorCarctFinal").style.display = 'block';
  document.getElementById("inputinfoMelhorCaractMétodoDisplay").style.display = 'block';
  document.getElementById("btn_inputMelhorCarctMetodo").style.display = 'inline-block';
  document.getElementById("btn_inputMelhorCarctMetodo_clear").style.display = 'inline-block';
}


function inputinfoPiorCaractMétodo() {
  // Obtém o valor do campo de entrada
  var inputPior = document.getElementById("inputPior").value;
  // Obtém o elemento para exibir o valor
  var inputPiorDisplay = document.getElementById("inputPiorDisplay");

  // Define o valor do elemento de exibição
  inputPiorDisplay.textContent = inputPior;

  // Armazena o valor no localStorage
  localStorage.setItem("inputPior", inputPior.value);
  localStorage.setItem("inputPiorDisplay", inputPiorDisplay.textContent);


  // Oculta o campo de entrada e o botão, e exibe o elemento de exibição
  document.getElementById("inputPior").style.display = 'none';
  document.getElementById("inputPiorDisplay").style.display = 'block';
  document.getElementById("btn_inputPior").style.display = 'none';
}


function limparInformacaoPiorCaractMetodo() {

  // Limpar o valor dos campos de entrada
  document.getElementById("inputPior").value = "";
  document.getElementById("inputPiorDisplay").textContent = "";

  // Remover itens específicos do localStorage
  localStorage.setItem("inputPior", "");
  localStorage.removeItem("inputPiorDisplay");


  // Mostrar os elementos novamente
  document.getElementById("inputPior").style.display = 'block';
  document.getElementById("inputPiorDisplay").style.display = 'block';
  document.getElementById("btn_inputPior").style.display = 'inline-block';
  document.getElementById("btn_inputPior_clear").style.display = 'inline-block';
}

function inputinfoAsp() {
  // Obtém o valor do campo de entrada
  var inputAsp = document.getElementById("inputAsp").value;
  // Obtém o elemento para exibir o valor
  var inputAspDisplay = document.getElementById("inputAspDisplay");

  // Define o valor do elemento de exibição
  inputAspDisplay.textContent = inputAsp;

  // Armazena o valor no localStorage
  localStorage.setItem("inputAsp", inputAsp.value);
  localStorage.setItem("inputAspDisplay", inputAspDisplay.textContent);


  // Oculta o campo de entrada e o botão, e exibe o elemento de exibição
  document.getElementById("inputAsp").style.display = 'none';
  document.getElementById("inputAspDisplay").style.display = 'block';
  document.getElementById("btn_inputAsp").style.display = 'none';
}


function limparInformacaoAsp() {

  // Limpar o valor dos campos de entrada
  document.getElementById("inputAsp").value = "";
  document.getElementById("inputAspDisplay").textContent = "";

  // Remover itens específicos do localStorage
  localStorage.setItem("inputAsp", "");
  localStorage.removeItem("inputAspDisplay");


  // Mostrar os elementos novamente
  document.getElementById("inputAsp").style.display = 'block';
  document.getElementById("inputAspDisplay").style.display = 'block';
  document.getElementById("btn_inputAsp").style.display = 'inline-block';
  document.getElementById("btn_inputAsp_clear").style.display = 'inline-block';
}




function porcentLinearidade() {
  var piorcaracterRegressao = localStorage.getItem("piorcaracterRegressao");
  var piorcaracterGrauCorrelacao = localStorage.getItem("piorcaracterGrauCorrelacao");
  var piorcaracterAnova = localStorage.getItem("piorcaracterAnova");
  var piorcaracterOutlier = localStorage.getItem("piorcaracterOutlier");
  var piorcaracterResiduos = localStorage.getItem("piorcaracterResiduos");

  var porcentagemResultLIN = document.getElementById("porcentagemResultLIN");

  var LinAlgumNaoNulo = piorcaracterRegressao !== "" ||
    piorcaracterGrauCorrelacao !== "" ||
    piorcaracterAnova !== "" ||
    piorcaracterOutlier !== "" ||
    piorcaracterResiduos !== "";

  if (LinAlgumNaoNulo) {
    var caracterRegressaoNaoNulo = piorcaracterRegressao !== "" ? 1 : 0;
    var GrauCorrelacaoNaoNulo = piorcaracterGrauCorrelacao !== "" ? 1 : 0;
    var OutlierNaoNulo = piorcaracterOutlier !== "" ? 1 : 0;
    var AnovaNaoNulo = piorcaracterAnova !== "" ? 1 : 0;
    var residuosNaoNulo = piorcaracterResiduos !== "" ? 1 : 0;

    var numNaoNulos = caracterRegressaoNaoNulo + GrauCorrelacaoNaoNulo + OutlierNaoNulo + AnovaNaoNulo + residuosNaoNulo;
    var percentualNaoNulos = (numNaoNulos / 5);
    var percentualAprovação = (1 - percentualNaoNulos) * 100;
    porcentagemResultLIN.textContent = percentualAprovação.toFixed(1) + "%";
  }

}





document.getElementById('inputRelat').addEventListener('input', function() {
  const inputText = this.value;
  document.getElementById('inputRelatDisplay').textContent = inputText;
});

document.getElementById('melhorCarctFinal').addEventListener('input', function() {
  const inputText = this.value;
  document.getElementById('inputinfoMelhorCaractMétodoDisplay').textContent = inputText;
});

document.getElementById('inputPior').addEventListener('input', function() {
  const inputText = this.value;
  document.getElementById('inputPiorDisplay').textContent = inputText;
});

document.getElementById('inputAsp').addEventListener('input', function() {
  const inputText = this.value;
  document.getElementById('inputAspDisplay').textContent = inputText;
});


function removerinputInfoUsuario_01() {
  const inputInfoUsuario_01 = document.getElementById('inputInfoUsuario_01');
  alert('Caso precise adicionar alguma informação depois de remover o campo, basta atualizar a página (F5). As informções não serão perdidas.');
  inputInfoUsuario_01.style.display = 'none';
}

function removerinputInfoUsuario_02() {
  const inputInfoUsuario_02 = document.getElementById('inputInfoUsuario_02');
  alert('Caso precise adicionar alguma informação depois de remover o campo, basta atualizar a página (F5). As informções não serão perdidas.');
  inputInfoUsuario_02.style.display = 'none';
}

function removerinputInfoUsuario_03() {
  const inputInfoUsuario_03 = document.getElementById('inputInfoUsuario_03');
  alert('Caso precise adicionar alguma informação depois de remover o campo, basta atualizar a página (F5). As informções não serão perdidas.');
  inputInfoUsuario_03.style.display = 'none';
}

function removerinputInfoUsuario_04() {
  const inputInfoUsuario_04 = document.getElementById('inputInfoUsuario_04');
  alert('Caso precise adicionar alguma informação depois de remover o campo, basta atualizar a página (F5). As informções não serão perdidas.');
  inputInfoUsuario_04.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', function() {
  const relatValidacao = document.getElementById('relatValidacao');
  if (relatValidacao) {
    relatValidacao.addEventListener('click', (evt) => {
      try {
        const conteudo1 = document.getElementById('header')?.outerHTML || '';
        const conteudo2 = document.getElementById('main3')?.outerHTML || '';
        const conteudo3 = document.getElementById('tabelaResumoConclusao')?.outerHTML || '';
        const conteudo4 = document.getElementById('ResultadosParciais')?.outerHTML || '';
        const conteudo5 = document.getElementById('ResultadosTotais')?.outerHTML || '';
        
        let estilo = '<style>';
        estilo += 'table {width: 100%; font: 12px Arial;}';
        estilo += 'table, th, td {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: center;}';
        estilo += '@media print {button {display: none;}}';
        estilo += '@media print {input {display: none;}}';
        estilo += '</style>';

        const win = window.open('', '', 'height=800,width=800');
        if (!win) {
          throw new Error("Falha ao abrir nova janela. Verifique se o navegador está bloqueando pop-ups.");
        }
        win.document.write('<html><head>');
        win.document.write(estilo);
        win.document.write('</head><body>');
        win.document.write(conteudo1);
        win.document.write(conteudo2);
        win.document.write(conteudo3);
        win.document.write(conteudo4);
        win.document.write(conteudo5);
        win.document.write('</body></html>');

        win.document.close(); // fechar o documento para garantir que ele seja renderizado antes do print()
        win.print();
      } catch (error) {
        console.error("Erro ao gerar o relatório: ", error);
        alert("Ocorreu um erro ao gerar o relatório. Verifique o console para mais detalhes.");
      }
    });
  }
});




