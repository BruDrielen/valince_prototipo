

function checkType() {
    var type = document.getElementById("type").value;
    var resultmodelo = document.getElementById("resultmodelo");
    var resultcriterio = document.getElementById("resultcriterio");

    if (type === "homocedastico") {
        resultmodelo.innerHTML = "<b>Comportamento das variâncias:</b><br>HOMOCEDÁSTICO<br><br>";
        resultcriterio.innerHTML = "Se o sistema for homocedástico, calcular a equação da regressão linear simples usando o método dos mínimos quadrados ordinários (MMQO).";
    } else if (type === "heterocedastico") {
        resultmodelo.innerHTML = "<b>Comportamento das variâncias:</b><br>HETEROCEDÁSTICO<br><br>";
        resultcriterio.innerHTML = "Se o sistema for heterocedástico, calcular a equação da regressão linear simples usando o método dos mínimos quadrados ordinários ponderados (MMQP)";
    } else if (type === "zero") {
        resultmodelo.innerHTML = "";
        resultcriterio.innerHTML = "";
    }

    localStorage.setItem("resultmodelo", resultmodelo.innerHTML);
    localStorage.setItem("resultcriterio", resultcriterio.innerHTML);


    mostrarInformacaoSalvaType();
}

function mostrarInformacaoSalvaType() {
    var resultmodelo = localStorage.getItem("resultmodelo");
    var divMostrarModelo = document.getElementById("resultmodelo");
    if (resultmodelo) {
        divMostrarModelo.innerHTML = resultmodelo;
    }

    var resultcriterio = localStorage.getItem("resultcriterio");
    var divMostrarCriterio = document.getElementById("resultcriterio");
    if (resultcriterio) {
        divMostrarCriterio.innerHTML = resultcriterio;
    }
}



function checkMmq() {
    var mmq = document.getElementById("mmq").value;
    var type = document.getElementById("type").value;
    var modeloaplicado = document.getElementById("modeloaplicado");
    var comentarioregressao = document.getElementById("comentarioregressao");
    var solucaoregressao = document.getElementById("solucaoregressao");

    if ((mmq === "mmqo" && type === "homocedastico") || (mmq === "mmqp" && type === "heterocedastico")) {
        modeloaplicado.innerHTML = "APROVADO";
        comentarioregressao.innerHTML = '---';
    } else if ((mmq === "mmqo" && type === "heterocedastico") || (mmq === "mmqp" && type === "homocedastico") || type === "zero") {
        modeloaplicado.innerHTML = "REPROVADO";
        comentarioregressao.innerHTML = 'O modelo de regressão aplicado não está adequado para realizar a regressão linear simples';
        solucaoregressao.innerHTML = '(<a href="solucaoregressao.html">Como solucionar</a>)';
    } else {
        modeloaplicado.innerHTML = "";
        comentarioregressao.innerHTML = "";
        solucaoregressao.innerHTML = "";
    }

    localStorage.setItem("modeloaplicado", modeloaplicado.innerHTML);
    localStorage.setItem("comentarioregressao", comentarioregressao.innerHTML);
    localStorage.setItem("solucaoregressao", solucaoregressao.innerHTML);

    mostrarInformacaoSalvaMMQ();
}

function mostrarInformacaoSalvaMMQ() {
    var modeloaplicado = localStorage.getItem("modeloaplicado");
    var divMostrarModeloAplicado = document.getElementById("modeloaplicado");
    if (modeloaplicado) {
        divMostrarModeloAplicado.innerHTML = modeloaplicado;
    }

    var comentarioregressao = localStorage.getItem("comentarioregressao");
    var divMostrarComentarioRegressao = document.getElementById("comentarioregressao");
    if (comentarioregressao) {
        divMostrarComentarioRegressao.innerHTML = comentarioregressao;
    }

    var solucaoregressao = localStorage.getItem("solucaoregressao");
    var divMostrarSolucaoRegressao = document.getElementById("solucaoregressao");
    if (solucaoregressao) {
        divMostrarSolucaoRegressao.innerHTML = solucaoregressao;
    }

    // Recuperar o valor e o texto selecionados no select do MMQ
    var selectMMQValue = localStorage.getItem("selectMMQValue");
    var selectMMQText = localStorage.getItem("selectMMQText");
    var mmqDisplay = document.getElementById("mmqDisplay");
    var mmqSelect = document.getElementById("mmq");

    if (selectMMQValue && selectMMQText) {
        mmqDisplay.innerHTML = selectMMQText;
        mmqSelect.value = selectMMQValue;
    }
}



function inputMMQ() {
    var mmqSelect = document.getElementById("mmq");
    var mmqDisplay = document.getElementById("mmqDisplay");
    var selectedOptionMMQ = mmqSelect.options[mmqSelect.selectedIndex];

    if (selectedOptionMMQ.value === "mmqo" || selectedOptionMMQ.value === "mmqp") {
        mmqDisplay.innerHTML = selectedOptionMMQ.text;
    } else {
        mmqDisplay.innerHTML = "Nada selecionado";
    }

    // Armazenar o texto e o valor selecionado no localStorage
    localStorage.setItem("mmqSelect", mmqSelect.value);
    localStorage.setItem("selectMMQText", selectedOptionMMQ.text);
    localStorage.setItem("selectMMQValue", selectedOptionMMQ.value);
    checkMmq();

    document.getElementById("mmq").style.display = 'none';
    document.getElementById("type").style.display = 'none';
    document.getElementById("typeLabel").style.display = 'none';
    document.getElementById("resultmodelo").style.display = 'block';
    document.getElementById("resultcriterio").style.display = 'block';
    document.getElementById("modeloaplicado").style.display = 'block';
    document.getElementById("comentarioregressao").style.display = 'block';
    document.getElementById("solucaoregressao").style.display = 'block';
    document.getElementById("mmqDisplay").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'block';

    mostrarInformacaoSalvaType();
    mostrarInformacaoSalvaMMQ();
}


function limparInformacaoInput() {

    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("type", "");
    localStorage.setItem("mmq", "");
    localStorage.setItem("resultmodelo", "");
    localStorage.setItem("resultcriterio", "");
    localStorage.setItem("modeloaplicado", "");
    localStorage.setItem("comentarioregressao", "");
    localStorage.setItem("solucaoregressao", "");
    localStorage.setItem("mmqDisplay", "");
    localStorage.setItem("selectMMQText", "");
    localStorage.setItem("selectMMQValue", "");

    document.getElementById("type").value = "";
    document.getElementById("mmq").value = "";
    document.getElementById("mmqDisplay").innerHTML = "";
    document.getElementById("resultmodelo").innerHTML = "";
    document.getElementById("resultcriterio").innerHTML = "";
    document.getElementById("modeloaplicado").innerHTML = "";
    document.getElementById("comentarioregressao").innerHTML = "";
    document.getElementById("solucaoregressao").innerHTML = "";



    // Mostrar os elementos novamente
    document.getElementById("mmq").style.display = 'block';
    document.getElementById("type").style.display = 'block';
    document.getElementById("typeLabel").style.display = 'block';
    document.getElementById("btn-MMQ").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';

}



/*....*/

/*Avaliação r e r2*/

/*Avaliação r e r2*/
function grauCorrelacao() {
    var grauCorrelacao = parseFloat(document.getElementById("R").value);
    var varResp = parseFloat(document.getElementById("R2").value);
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao");
    var comentGrauCorrelacao = document.getElementById('comentGrauCorrelacao');
    var solucaoGrauCorrelacao = document.getElementById('solucaoGrauCorrelacao');
    var R_Display = document.getElementById('R_Display');
    var R2_Display = document.getElementById('R2_Display');

    if ((grauCorrelacao >= 0.997) && (grauCorrelacao <= 1) && (varResp >= 0.995) && (varResp <= 1)) {
        resultGrauCorrelacao.innerHTML = "APROVADO";
        comentGrauCorrelacao.innerHTML = 'O grau de correlação (r) e determinação (r²) estão satisfatórios, portanto o método é sensível às mudanças de concentração, ou seja, existe uma relação estatisticamente linear entre x e y, ou seja, entre a concentração e a resposta obtida pelo método.';
        solucaoGrauCorrelacao.innerHTML = '';
    } else if ((grauCorrelacao < 0.997) || (grauCorrelacao > 1) || (varResp < 0.997) || (varResp > 1)) {
        resultGrauCorrelacao.innerHTML = "REPROVADO";
        comentGrauCorrelacao.innerHTML = 'O grau de correlação (r) e determinação (r²) não estão satisfatórios, isso implica que o método não possui sensibilidade, ou seja, não existe uma relação estatisticamente linear entre x e y, ou seja, entre a concentração e a resposta obtida pelo método.';
        solucaoGrauCorrelacao.innerHTML = '(<a href="solucaoGrauCorrelacao.html">Como solucionar</a>)';
    } else {
        resultGrauCorrelacao.innerHTML = '';
        comentGrauCorrelacao.innerHTML = '';
        solucaoGrauCorrelacao.innerHTML = '';
    }

    var R_Formatted = grauCorrelacao.toFixed(3);
    var R2_Formatted = varResp.toFixed(3);

    R_Display.textContent = R_Formatted;
    R2_Display.textContent = R2_Formatted;

    localStorage.setItem("R", grauCorrelacao);
    localStorage.setItem("R2", varResp);
    localStorage.setItem("resultGrauCorrelacao", resultGrauCorrelacao.innerHTML);
    localStorage.setItem("comentGrauCorrelacao", comentGrauCorrelacao.innerHTML);
    localStorage.setItem("solucaoGrauCorrelacao", solucaoGrauCorrelacao.innerHTML);
    localStorage.setItem("R_Display", R_Display.textContent);
    localStorage.setItem("R2_Display", R2_Display.textContent);



    mostrarInformacaoSalvaR();
}

/*
function grauCorrelacaoUsuario() {
    var grauCorrelacao = (document.getElementById("R").value);
    var varResp = (document.getElementById("R2").value);
    var criterioUsuarioMinR = (document.getElementById("criterioUsuarioMinR").value);
    var criterioUsuarioMaxR = (document.getElementById("criterioUsuarioMaxR").value);
    var criterioUsuarioMinR2 = (document.getElementById("criterioUsuarioMinR2").value);
    var criterioUsuarioMaxR2 = (document.getElementById("criterioUsuarioMaxR2").value);
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao");
    var comentGrauCorrelacao = document.getElementById('comentGrauCorrelacao');
    var soluçãoGrauCorrelacao = document.getElementById('soluçãoGrauCorrelacao');

    if ((grauCorrelacao >= criterioUsuarioMinR) && (grauCorrelacao <= criterioUsuarioMaxR)) {
        resultGrauCorrelacao.innerHTML = "APROVADO";
        comentGrauCorrelacao.innerHTML = 'O grau de correlação (r) e determinação (r²) estão satisfatótios, portando o método é sensível as mudanças de concentração, ou seja, existe uma relação estatísticamente linear entre x e y, ou seja, entre a concentração e a resposta obtida pelo método.'
        soluçãoGrauCorrelacao.innerHTML = '';

    } else if ((grauCorrelacao < criterioUsuarioMinR) || (grauCorrelacao > criterioUsuarioMaxR)) {
        resultGrauCorrelacao.innerHTML = "REPROVADO";
        comentGrauCorrelacao.innerHTML = 'O grau de correlação (r) e determinação (r²) não estão satisfatótios, isso implica que o método não possui sensibilidade, ou seja, não existe uma relação estatísticamente linear entre x e y, ou seja, entre a concentração e a resposta obtida pelo método.'
        soluçãoGrauCorrelacao.innerHTML = '(<a href="(soluçãoGrauCorrelacao.html)">Como solucionar</a>)';


    } else {
        resultGrauCorrelacao.innerHTML = '';
        comentGrauCorrelacao.innerHTML = ''
        soluçãoGrauCorrelacao.innerHTML = '';

    }

    var R_Formatted = grauCorrelacao.toFixed(3);
    // Exibindo o resultado formatado
    grauCorrelacao_Display.textContent = R_Formatted;
    grauCorrelacao_Display.value = R_Formatted;

    localStorage.setItem("R", grauCorrelacao.value);
    localStorage.setItem("R2", varResp.innerHTML);
    localStorage.setItem("resultGrauCorrelacao", resultGrauCorrelacao.innerHTML);
    localStorage.setItem("comentGrauCorrelacao", comentGrauCorrelacao.innerHTML);
    localStorage.setItem("soluçãoGrauCorrelacao", comentGrauCorrelacao.innerHTML);
    localStorage.setItem("criterioUsuarioMinR", criterioUsuarioMinR.innerHTML);
    localStorage.setItem("criterioUsuarioMaxR", criterioUsuarioMaxR.innerHTML);
    localStorage.setItem("criterioUsuarioMinR2", criterioUsuarioMinR2.innerHTML);
    localStorage.setItem("criterioUsuarioMaxR2", criterioUsuarioMaxR2.innerHTML);

    var criterioUsuarioMinR = (document.getElementById("criterioUsuarioMinR").value);
    var criterioUsuarioMaxR = (document.getElementById("criterioUsuarioMaxR").value);
    var criterioUsuarioMinR2 = (document.getElementById("criterioUsuarioMinR2").value);
    var criterioUsuarioMaxR2 = (document.getElementById("criterioUsuarioMaxR2").value);

}*/

/* function inputR_Usuario() {

    var criterioUsuarioMinR = (document.getElementById("criterioUsuarioMinR"));
    var UsuarioMinR_Display = document.getElementById("UsuarioMinR_Display");
    var minR = parseFloat(criterioUsuarioMinR.value); // Convertendo para número

    var criterioUsuarioMaxR = (document.getElementById("criterioUsuarioMaxR"));
    var UsuarioMaxR_Display = document.getElementById("UsuarioMaxR_Display");
    var maxR = parseFloat(criterioUsuarioMinR.value); // Convertendo para número

    var criterioUsuarioMinR2 = (document.getElementById("criterioUsuarioMinR2").value);
    var UsuarioMinR2_Display = document.getElementById("UsuarioMinR2_Display");
    var minR2 = parseFloat(criterioUsuarioMinR.value); // Convertendo para número

    var criterioUsuarioMaxR2 = (document.getElementById("criterioUsuarioMaxR2").value);
    var UsuarioMaxR2_Display = document.getElementById("UsuarioMaxR2_Display");
    var maxR2 = parseFloat(criterioUsuarioMinR.value); // Convertendo para número




      UsuarioMinR_Display.textContent = minR
      UsuarioMaxR_Display.textContent = maxR
      UsuarioMinR2_Display.textContent = minR2
      UsuarioMaxR2_Display.textContent = maxR2


    // Limitando o resultado a 4 números significativos
    var UsuarioMinR_DisplayFormated = minR.toFixed(3);
    var UsuarioMaxR_DisplayFormated = maxR.toFixed(3);
    var UsuarioMinR2_DisplayFormated = minR2.toFixed(3);
    var UsuarioMaxR2_DisplayFormated = maxR2.toFixed(3);
    // Exibindo o resultado formatado
    R2_Display.textContent = R2Formatted;
    UsuarioMinR_Display.textContent = UsuarioMinR_DisplayFormated
    UsuarioMaxR_Display.textContent = UsuarioMaxR_DisplayFormated
    UsuarioMinR2_Display.textContent = UsuarioMinR2_DisplayFormated
    UsuarioMaxR2_Display.textContent = UsuarioMaxR2_DisplayFormated

    localStorage.setItem("criterioUsuarioMinR", criterioUsuarioMinR.value);
    localStorage.setItem("UsuarioMinR_Display", UsuarioMinR_Display.innerHTML);

    localStorage.setItem("criterioUsuarioMaxR", criterioUsuarioMaxR.value);
    localStorage.setItem("UsuarioMaxR_Display", UsuarioMaxR_Display.innerHTML);

    localStorage.setItem("criterioUsuarioMinR2", criterioUsuarioMinR2.value);
    localStorage.setItem("UsuarioMinR2_Display", UsuarioMinR2_Display.innerHTML);

    localStorage.setItem("criterioUsuarioMaxR2", criterioUsuarioMaxR2.value);
    localStorage.setItem("UsuarioMaxR2_Display", UsuarioMaxR2_Display.innerHTML);

    document.getElementById("criterioUsuarioMinR").style.display = 'none';
    document.getElementById("criterioUsuarioMaxR").style.display = 'none';
    document.getElementById("criterioUsuarioMinR2").style.display = 'none';
    document.getElementById("criterioUsuarioMaxR2").style.display = 'none';


    mostrarInformacaoSalvaR_Usuario();

}*/

function mostrarInformacaoSalvaR() {
    var R_Display = localStorage.getItem("R_Display");
    var divMostrarR_Display = document.getElementById("R_Display");
    if (R_Display) {
        divMostrarR_Display.innerHTML = R_Display;
    }

    var R2_Display = localStorage.getItem("R2_Display");
    var divR2_Display = document.getElementById("R2_Display");
    if (R2_Display) {
        divR2_Display.innerHTML = R2_Display;
    }

    var resultGrauCorrelacao = localStorage.getItem("resultGrauCorrelacao");
    var divresultGrauCorrelacao = document.getElementById("resultGrauCorrelacao");
    if (resultGrauCorrelacao) {
        divresultGrauCorrelacao.innerHTML = resultGrauCorrelacao;
    }

    var comentGrauCorrelacao = localStorage.getItem("comentGrauCorrelacao");
    var divresultcomentGrauCorrelacao = document.getElementById("comentGrauCorrelacao");
    if (comentGrauCorrelacao) {
        divresultcomentGrauCorrelacao.innerHTML = comentGrauCorrelacao;
    }

    var solucaoGrauCorrelacao = localStorage.getItem("solucaoGrauCorrelacao");
    var divresultsolucaoGrauCorrelacao = document.getElementById("solucaoGrauCorrelacao");
    if (solucaoGrauCorrelacao) {
        divresultsolucaoGrauCorrelacao.innerHTML = solucaoGrauCorrelacao;
    }

    // Decida aqui se você realmente quer esconder o campo R2
    document.getElementById("R2").style.display = 'block';
}

/*
function mostrarInformacaoSalvaR_Usuario() {
    var UsuarioMinR_Display = localStorage.getItem("UsuarioMinR_Display");
    var MostrarUsuarioMinR_Display = document.getElementById("UsuarioMinR_Display");
    if (UsuarioMinR_Display) {
        MostrarUsuarioMinR_Display.innerHTML = UsuarioMinR_Display;
    }

    var UsuarioMaxR_Display = localStorage.getItem("UsuarioMaxR_Display");
    var MostrarUsuarioMaxR_Display = document.getElementById("UsuarioMaxR_Display");
    if (UsuarioMaxR_Display) {
        MostrarUsuarioMaxR_Display.innerHTML = UsuarioMaxR_Display;
    }

    var UsuarioMinR2_Display = localStorage.getItem("UsuarioMinR2_Display");
    var MostrarUsuarioMinR2_Display = document.getElementById("UsuarioMinR2_Display");
    if (UsuarioMinR2_Display) {
        MostrarUsuarioMinR2_Display.innerHTML = UsuarioMinR2_Display;
    }

    var UsuarioMaxR2_Display = localStorage.getItem("UsuarioMaxR2_Display");
    var MostrarUsuarioMaxR2_Display = document.getElementById("UsuarioMaxR2_Display");
    if (UsuarioMaxR2_Display) {
        MostrarUsuarioMaxR2_Display.innerHTML = UsuarioMaxR2_Display;
    }


    var resultGrauCorrelacao = localStorage.getItem("resultGrauCorrelacao");
    var divresultGrauCorrelacao = document.getElementById("resultGrauCorrelacao");
    if (resultGrauCorrelacao) {
        divresultGrauCorrelacao.innerHTML = resultGrauCorrelacao;
    }

    var comentGrauCorrelacao = localStorage.getItem("comentGrauCorrelacao");
    var divresultcomentGrauCorrelacao = document.getElementById("comentGrauCorrelacao");
    if (comentGrauCorrelacao) {
        divresultcomentGrauCorrelacao.innerHTML = comentGrauCorrelacao;
    }

    var soluçãoGrauCorrelacao = localStorage.getItem("soluçãoGrauCorrelacao");
    var divresultsoluçãoGrauCorrelacao = document.getElementById("soluçãoGrauCorrelacao");
    if (soluçãoGrauCorrelacao) {
        divresultsoluçãoGrauCorrelacao.innerHTML = soluçãoGrauCorrelacao;
    }


    document.getElementById("R2").style.display = 'none';

}*/


function limparInformacaoInputR() {
    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("R", "");
    localStorage.setItem("R2", "");
    localStorage.setItem("R_Display", "");
    localStorage.setItem("R2_Display", "");
    localStorage.setItem("resultGrauCorrelacao", "");
    localStorage.setItem("comentGrauCorrelacao", "");
    localStorage.setItem("solucaoGrauCorrelacao", "");

    document.getElementById("R").value = "";
    document.getElementById("R2").value = "";
    document.getElementById("R_Display").innerHTML = "";
    document.getElementById("R2_Display").innerHTML = "";
    document.getElementById("resultGrauCorrelacao").innerHTML = "";
    document.getElementById("comentGrauCorrelacao").innerHTML = "";
    document.getElementById("solucaoGrauCorrelacao").innerHTML = "";

    // Mostrar os elementos novamente
    document.getElementById("R").style.display = 'block';
    document.getElementById("R2").style.display = 'block'; // Exibir R2 aqui
    document.getElementById("R_Display").style.display = 'block';
    document.getElementById("R2_Display").style.display = 'block';
    document.getElementById("btn-R").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';

    carcterLinear();
    verificarDados();
    mostrarConclusao();
    mostrarInformacaoSalvaConclusão();

    
}

function ocultarInputs() {
    // Esconde os campos de input
    document.getElementById("R").style.display = 'none';
    document.getElementById("R2").style.display = 'none';

    // Exibe os elementos de display
    document.getElementById("R_Display").style.display = 'block';
    document.getElementById("R2_Display").style.display = 'block';
}
/*....*/

/*....*/

/*Equação da reta*/
function inputEquacao() {
    var equacaoInput = document.getElementById("equacao");
    var valorBInput = document.getElementById("valorb");
    var equacaoDisplay = document.getElementById("equationDisplay");
    var equacao = equacaoInput.value;
    var valorB = valorBInput.value;

    // String padrão com espaços reservados para completar
    var respostaPadrao = "y = __x + __";

    // Substitui os espaços reservados pelos valores inseridos pelo usuário
    var respostaCompleta = respostaPadrao.replace("__", equacao).replace("__", valorB);

    equacaoDisplay.textContent = respostaCompleta;

    localStorage.setItem("equacao", equacaoInput.value);
    localStorage.setItem("valorb", valorBInput.value);
    localStorage.setItem("equationDisplay", equacaoDisplay.textContent);

    document.getElementById("equacao").style.display = 'none';
    document.getElementById("valorb").style.display = 'none';
    document.getElementById("btn-EQ").style.display = 'none';

    mostrarInformacaoSalvaEQ();
}


function mostrarInformacaoSalvaEQ() {
    var equationDisplay = localStorage.getItem("equationDisplay");
    var divMostrarEQ = document.getElementById("equationDisplay");
    if (equationDisplay) {
        divMostrarEQ.innerText = equationDisplay;
    }


    // Verificar o localStorage para definir a visibilidade dos elementos
    if ((localStorage.getItem("equacao") !== null) && (localStorage.getItem("valorb") !== null)) {
        document.getElementById("equacao").style.display = 'none';
        document.getElementById("valorb").style.display = 'none';
        document.getElementById("equationDisplay").style.display = 'block';
    } else {
        document.getElementById("equacao").style.display = 'block';
        document.getElementById("valorb").style.display = 'block';
        document.getElementById("equationDisplay").style.display = 'block';
    }
}


function limparInformacaoInputEQ() {
    document.getElementById("equacao").value = "";
    document.getElementById("valorb").value = "";
    document.getElementById("equationDisplay").innerHTML = "";


    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("equacao", "");
    localStorage.setItem("valorb", "");
    localStorage.setItem("equationDisplay", "");


    // Mostrar os elementos novamente
    document.getElementById("equacao").style.display = 'block';
    document.getElementById("valorb").style.display = 'block';
    document.getElementById("btn-EQ").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';
}


/*....*/

/*Check Teste F*/
function testeF() {
    var testeF = document.getElementById("testeF").value;
    var resultAnova = document.getElementById("resultAnova");
    var comentAnova = document.getElementById("comentAnova");
    var soluçãoAnova = document.getElementById("soluçãoAnova");
    var anovaSelect = document.getElementById("testeF"); // Mover para aqui

    if (testeF === 'significativo') {
        resultAnova.innerHTML = "APROVADO";
        comentAnova.innerHTML = '---';
        soluçãoAnova.innerHTML = '';
    } else if (testeF === 'nãosignificativo' || testeF === 'zero') {
        resultAnova.innerHTML = "REPROVADO";
        comentAnova.innerHTML = "Foi observado que y não varia efetivamente em função de x. Isso pode advir de alguns pontos";
        soluçãoAnova.innerHTML = '(<a href="soluçãoAnova.html">Como solucionar</a>)';
    } else {
        resultAnova.innerHTML = "";
        comentAnova.innerHTML = "";
        soluçãoAnova.innerHTML = '';
    }

    localStorage.setItem("testeF", anovaSelect.value);
    localStorage.setItem("resultAnova", resultAnova.innerHTML);
    localStorage.setItem("comentAnova", comentAnova.innerHTML);
    localStorage.setItem("soluçãoAnova", soluçãoAnova.innerHTML);

}

/* Input Teste F */
function inputAnova() {
    var anovaSelect = document.getElementById("testeF");
    var anovaDisplay = document.getElementById("anovaDisplay");
    var selectedOptionAnova = anovaSelect.options[anovaSelect.selectedIndex];

    if (selectedOptionAnova.value === "significativo" || selectedOptionAnova.value === "nãosignificativo") {
        anovaDisplay.innerHTML = selectedOptionAnova.text;
    } else {
        anovaDisplay.innerHTML = "Nada selecionado";
    }

    localStorage.setItem("testeF", anovaSelect.value);
    localStorage.setItem("anovaDisplay", anovaDisplay.innerHTML);

    document.getElementById("testeF").style.display = 'none';
    document.getElementById("btn-TF").style.display = 'none';
    document.getElementById("conclusaoLinearidade").style.display = 'block';

    mostrarInformacaoSalvaTesteF();
}

function mostrarInformacaoSalvaTesteF() {
    var testeF = localStorage.getItem("testeF");
    var divtesteF = document.getElementById("testeF");
    if (testeF) {
        divtesteF.value = testeF;
    }

    var anovaDisplay = localStorage.getItem("anovaDisplay");
    var divanovaSelect = document.getElementById("anovaDisplay");
    if (anovaDisplay) {
        divanovaSelect.innerHTML = anovaDisplay;
    }

    var resultAnova = localStorage.getItem("resultAnova");
    var divMostrarresultAnova = document.getElementById("resultAnova");
    if (resultAnova) {
        divMostrarresultAnova.innerHTML = resultAnova;
    }

    var comentAnova = localStorage.getItem("comentAnova");
    var divMostrarcomentAnova = document.getElementById("comentAnova");
    if (comentAnova) {
        divMostrarcomentAnova.innerHTML = comentAnova;
    }

    var soluçãoAnova = localStorage.getItem("soluçãoAnova");
    var divMostrarsoluçãoAnova = document.getElementById("soluçãoAnova");
    if (soluçãoAnova) {
        divMostrarsoluçãoAnova.innerHTML = soluçãoAnova;
    }

    // Verificar o localStorage para definir a visibilidade dos elementos
    if (localStorage.getItem("testeF") !== null) {
        document.getElementById("testeF").style.display = 'none';
        document.getElementById("anovaDisplay").style.display = 'block';
        document.getElementById("resultAnova").style.display = 'block';
        document.getElementById("comentAnova").style.display = 'block';
        document.getElementById("soluçãoAnova").style.display = 'block';
        document.getElementById("btn-TF").style.display = 'none';
    } else {
        document.getElementById("testeF").style.display = 'block';
        document.getElementById("anovaDisplay").style.display = 'block';
        document.getElementById("resultAnova").style.display = 'block';
        document.getElementById("comentAnova").style.display = 'block';
        document.getElementById("soluçãoAnova").style.display = 'block';
        document.getElementById("btn-TF").style.display = 'block';
    }
}


function limparInformacaoTesteF() {
    document.getElementById("testeF").value = "";
    document.getElementById("anovaDisplay").innerHTML = "";
    document.getElementById("resultAnova").innerHTML = "";
    document.getElementById("comentAnova").innerHTML = "";
    document.getElementById("soluçãoAnova").innerHTML = "";

    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("testeF", "");
    localStorage.setItem("anovaDisplay", "");
    localStorage.setItem("resultAnova", "");
    localStorage.setItem("comentAnova", "");
    localStorage.setItem("soluçãoAnova", "");

    // Mostrar os elementos novamente
    document.getElementById("testeF").style.display = 'block';
    document.getElementById("btn-TF").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';

    carcterLinear();
    verificarDados();
    mostrarConclusao();

}

/*...*/


/*Check Outilier*/
function numOutlier() {
    var outLier = document.getElementById("outLier").value;
    var resultOutlier = document.getElementById("resultOutlier");
    let comentOutlier = document.getElementById("comentOutlier");
    let soluçãoOutlier = document.getElementById("soluçãoOutlier");


    if (outLier === '0') {
        resultOutlier.innerHTML = "APROVADO";
        comentOutlier.innerHTML = '---';
        soluçãoOutlier.innerHTML = '';

    } else if (outLier > 0) {
        resultOutlier.innerHTML = "REPROVADO";
        comentOutlier.innerHTML = 'A presença de valores muito fora, mostra que...';
        soluçãoOutlier.innerHTML = '(<a href="( soluçãoOutlier.html)">Como solucionar</a>)';

    } else {
        resultOutlier.innerHTML = "";
        comentOutlier.innerHTML = '';
        soluçãoOutlier.innerHTML = '';
    }

    localStorage.setItem("outLier", outLier.value);
    localStorage.setItem("resultOutlier", resultOutlier.innerHTML);
    localStorage.setItem("comentOutlier", comentOutlier.innerHTML);
    localStorage.setItem("soluçãoOutlier", soluçãoOutlier.innerHTML);


}

/*Input Outilier*/
function inputOutlier() {
    var outLier = document.getElementById("outLier");
    var outlierDisplay = document.getElementById("outlierDisplay");

    outlierDisplay.innerText = outLier.value;

    localStorage.setItem("outLier", outLier.value);
    localStorage.setItem("outlierDisplay", outlierDisplay.innerText);


    document.getElementById("outLier").style.display = 'none';
    document.getElementById("outlierDisplay").style.display = 'block';
    document.getElementById("btn-OUT").style.display = 'none';
    document.getElementById("conclusaoLinearidade").style.display = 'block';
}


function mostrarInformacaoSalvaOutlier() {
    var outLier = localStorage.getItem("outLier");
    var outlierDisplay = localStorage.getItem("outlierDisplay");
    var divMostrarOutLier = document.getElementById("outlierDisplay");
    if (outLier) {
        divMostrarOutLier.innerHTML = outlierDisplay;
    }

    var resultOutlier = localStorage.getItem("resultOutlier");
    var divresultOutlier = document.getElementById("resultOutlier");
    if (resultOutlier) {
        divresultOutlier.innerHTML = resultOutlier;
    }

    var comentOutlier = localStorage.getItem("comentOutlier");
    var divcomentOutlier = document.getElementById("comentOutlier");
    if (comentOutlier) {
        divcomentOutlier.innerHTML = comentOutlier;
    }

    var soluçãoOutlier = localStorage.getItem("soluçãoOutlier");
    var divsoluçãoOutlier = document.getElementById("soluçãoOutlier");
    if (soluçãoOutlier) {
        divsoluçãoOutlier.innerHTML = soluçãoOutlier;
    }


    // Verificar o localStorage para definir a visibilidade dos elementos
    if (localStorage.getItem("outLier") !== null) {
        document.getElementById("outLier").style.display = 'none';
        document.getElementById("outlierDisplay").style.display = 'block';
        document.getElementById("resultOutlier").style.display = 'block';
        document.getElementById("comentOutlier").style.display = 'block';
        document.getElementById("soluçãoOutlier").style.display = 'block';
        document.getElementById("btn-OUT").style.display = 'none';
    } else {
        document.getElementById("outLier").style.display = 'block';
        document.getElementById("outlierDisplay").style.display = 'block';
        document.getElementById("resultOutlier").style.display = 'block';
        document.getElementById("comentOutlier").style.display = 'block';
        document.getElementById("soluçãoOutlier").style.display = 'block';
        document.getElementById("btn-OUT").style.display = 'block';
    }



}




function limparInformacaoOutlier() {
    document.getElementById("outLier").value = "";
    document.getElementById("outlierDisplay").innerHTML = "";
    document.getElementById("resultOutlier").innerHTML = "";
    document.getElementById("comentOutlier").innerHTML = "";

    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("outLier", "");
    localStorage.setItem("outlierDisplay", "");
    localStorage.setItem("resultOutlier", "");
    localStorage.setItem("comentOutlier", "");

    // Mostrar os elementos novamente
    document.getElementById("outLier").style.display = 'block';
    document.getElementById("outlierDisplay").style.display = 'block';
    document.getElementById("btn-OUT").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';

    carcterLinear();
    verificarDados();
    mostrarConclusao();

}

/*...*/


/*Check Resíduos*/

function atualizarResiduos() {
    var residuos = document.getElementById('residuos').value;
    var resultResiduos = document.getElementById("resultResiduos");
    var comentResiduos = document.getElementById('comentResiduos');
    var soluçãoResiduos = document.getElementById('soluçãoResiduos');
    var selectResiduos = document.getElementById('residuos').value;


    if (residuos === 'aleatória') {
        resultResiduos.innerHTML = "APROVADO";
        comentResiduos.innerHTML = '---';
        soluçãoResiduos.innerHTML = '';
        selectResiduos.innerHTML = 'Distribuição aleatória em torno da linha reta que confirma a linearidade.';

    } else if (residuos === 'comtendencia') {
        resultResiduos.innerHTML = "REPROVADO";
        comentResiduos.innerHTML = 'A tendência no gráfico de resíduos, pode indicar que o modelo linear seja inadequado.';
        soluçãoResiduos.innerHTML = '(<a href="(soluçãoResiduos.html)">Como solucionar</a>)';
        selectResiduos.innerHTML = 'Presença de tendências sistemáticas indicam a não linearidade.';

    } else if (residuos === 'zero') {
        resultResiduos.innerHTML = "REPROVADO";
        comentResiduos.innerHTML = 'A tendências dos resíduos precisa ser avaliada, pois...';
        soluçãoResiduos.innerHTML = '(<a href="(soluçãoResiduos.html)">Como solucionar</a>)';
        selectResiduos.innerHTML = 'Não avaliado'

    } else {
        resultResiduos.innerHTML = '';
        comentResiduos.innerHTML = '';
        soluçãoResiduos.innerHTML = '';
        selectResiduos.innerHTML = '';
    }



    localStorage.setItem("residuos", residuos.value);
    localStorage.setItem("resultResiduos", resultResiduos.innerHTML);
    localStorage.setItem("comentResiduos", comentResiduos.innerHTML);
    localStorage.setItem("selectResiduos", selectResiduos.innerHTML);


}

function inputResiduos() {
    var residuosSelect = document.getElementById('residuos');
    var residuosDisplay = document.getElementById("residuosDisplay");
    var selectedOptionResiduos = residuosSelect.options[residuosSelect.selectedIndex];

    if (selectedOptionResiduos.value) {
        residuosDisplay.innerHTML = selectedOptionResiduos.text;
    } else {
        residuosDisplay.innerHTML = "Nada selecionado";
    }

    localStorage.setItem("residuos", residuosSelect.value);
    localStorage.setItem("selectedOptionResiduosValue", selectedOptionResiduos.value);
    localStorage.setItem("selectedOptionResiduosText", selectedOptionResiduos.text);
    localStorage.setItem("residuosDisplay", residuosDisplay.innerHTML);


    // Adicione os valores de resultResiduos, comentResiduos e solucaoResiduos ao localStorage
    var resultResiduos = document.getElementById("resultResiduos").innerHTML;
    var comentResiduos = document.getElementById("comentResiduos").innerHTML;
    var solucaoResiduos = document.getElementById("solucaoResiduos").innerHTML;

    localStorage.setItem("resultResiduos", resultResiduos);
    localStorage.setItem("comentResiduos", comentResiduos);
    localStorage.setItem("solucaoResiduos", solucaoResiduos);

    // Esconder o select e mostrar o display
    document.getElementById("residuos").style.display = 'none';
    document.getElementById("residuosDisplay").style.display = 'block';
    document.getElementById("btn-RES").style.display = 'none';
    document.getElementById("conclusaoLinearidade").style.display = 'block';

}

function mostrarInformacaoSalvaResiduos() {
    var residuos = localStorage.getItem("residuos");
    var residuosDisplay = localStorage.getItem("residuosDisplay");

    if (residuos) {
        document.getElementById("residuos").value = residuos;
    }
    if (residuosDisplay) {
        document.getElementById("residuosDisplay").innerHTML = residuosDisplay;
    }

    var resultResiduos = localStorage.getItem("resultResiduos");
    var comentResiduos = localStorage.getItem("comentResiduos");
    var solucaoResiduos = localStorage.getItem("solucaoResiduos");

    if (resultResiduos) {
        document.getElementById("resultResiduos").innerHTML = resultResiduos;
    }
    if (comentResiduos) {
        document.getElementById("comentResiduos").innerHTML = comentResiduos;
    }
    if (solucaoResiduos) {
        document.getElementById("solucaoResiduos").innerHTML = solucaoResiduos;
    }


    // Verificar o localStorage para definir a visibilidade dos elementos
    if (localStorage.getItem("residuos") !== null) {
        document.getElementById("residuos").style.display = 'none';
        document.getElementById("residuosDisplay").style.display = 'block';
        document.getElementById("resultResiduos").style.display = 'block';
        document.getElementById("comentResiduos").style.display = 'block';
        document.getElementById("solucaoResiduos").style.display = 'block';
        document.getElementById("btn-RES").style.display = 'none';
    } else {
        document.getElementById("residuos").style.display = 'block';
        document.getElementById("residuosDisplay").style.display = 'block';
        document.getElementById("resultResiduos").style.display = 'block';
        document.getElementById("comentResiduos").style.display = 'block';
        document.getElementById("solucaoResiduos").style.display = 'block';
        document.getElementById("btn-RES").style.display = 'block';
    }

}


function limparInformacaoResiduos() {


    // Limpar o valor dos itens específicos no localStorage
    localStorage.setItem("residuos", "");
    localStorage.setItem("residuosDisplay", "");
    localStorage.setItem("resultResiduos", "");
    localStorage.setItem("comentResiduos", "");
    localStorage.setItem("solucaoResiduos", "");




    document.getElementById("residuos").value = "";
    document.getElementById("residuosDisplay").innerHTML = "";
    document.getElementById("resultResiduos").innerHTML = "";
    document.getElementById("comentResiduos").innerHTML = "";
    document.getElementById("solucaoResiduos").innerHTML = "";



    // Mostrar os elementos novamente
    document.getElementById("residuos").style.display = 'block';
    document.getElementById("btn-RES").style.display = 'block';
    document.getElementById("conclusaoLinearidade").style.display = 'none';


    carcterLinear();
    checkConclusaoLinearidade();
    verificarDados();
    mostrarConclusao();

}


/*...*/




/*Caracteristicas da Linearidade*/
function carcterLinear() {

    /** variáveis já impressas */
    var modeloaplicado = document.getElementById("modeloaplicado").value;
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao").value;
    var resultOutlier = document.getElementById("resultOutlier").value;
    var resultAnova = document.getElementById("resultAnova").value;
    var resultResiduos = document.getElementById("resultResiduos").value;

    /** variáveis que serão impressas */
    /** variáveis REGRSSÃO LINEAR */
    var melhorcaracterRegressao = document.getElementById("melhorcaracterRegressao");
    var piorcaracterRegressao = document.getElementById("piorcaracterRegressao");
    var podecaracterRegressao = document.getElementById('podecaracterRegressao');
    /** variáveis GRAU DE CORRELAÇÃO */
    var melhorcaracterGrauCorrelacao = document.getElementById("melhorcaracterGrauCorrelacao");
    var piorcaracterGrauCorrelacao = document.getElementById("piorcaracterGrauCorrelacao");
    var podecaracterGrauCorrelacao = document.getElementById('podecaracterGrauCorrelacao');
    /** variáveis ANOVA */
    var melhorcaracterAnova = document.getElementById("melhorcaracterAnova");
    var piorcaracterAnova = document.getElementById("piorcaracterAnova");
    var podecaracterAnova = document.getElementById('podecaracterAnova');
    /** variáveis  OUTLIERS*/
    var melhorcaracterOutlier = document.getElementById("melhorcaracterOutlier");
    var piorcaracterOutlier = document.getElementById("piorcaracterOutlier");
    var podecaracterOutlier = document.getElementById('podecaracterOutlier');
    /** variáveis RESIDUOS */
    var melhorcaracterResiduos = document.getElementById("melhorcaracterResiduos");
    var piorcaracterResiduos = document.getElementById("piorcaracterResiduos");
    var podecaracterResiduos = document.getElementById('podecaracterResiduos');



    /* Condicional para REGRSSÃO LINEAR*/
    if (modeloaplicado === 'APROVADO') {
        melhorcaracterRegressao.innerHTML = "A regressão linear foi realizada com o modelo de regressão adequado, o que ajuda na confiabilidade dos dados da curva";
        piorcaracterRegressao.innerHTML = '';
        podecaracterRegressao.innerHTML = '';

    } else if (modeloaplicado === 'REPROVADO') {
        melhorcaracterRegressao.innerHTML = "";
        piorcaracterRegressao.innerHTML = 'A regressão linear não foi realizada com o modelo de regressão adequado, o que prejudica a confiabilidade dos dados da curva';
        podecaracterRegressao.innerHTML = 'Pode-se aplicar teste de homogeneidade e realizar a regressão linear conforme a homocedasticidade dos resíduos na curva';

    } else {
        melhorcaracterRegressao.innerHTML = "";
        piorcaracterRegressao.innerHTML = '';
        podecaracterRegressao.innerHTML = '';
    }


    /* Condicional para GRAU DE CORRELAÇÃO*/
    if (resultGrauCorrelacao === 'APROVADO') {
        melhorcaracterGrauCorrelacao.innerHTML = "A curva apresenta adequado grau de correlação, indicando que o método é sensivel às mudanças na concentração. O grau de correlação (r) e determinação (r²) estão satisfatótios, portando o método é sensível as mudanças de concentração, ou seja, existe uma relação estatísticamente linear entre x e y, ou seja, entre a concentração e a resposta obtida pelo método.";
        piorcaracterGrauCorrelacao.innerHTML = '';
        podecaracterGrauCorrelacao.innerHTML = '';

    } else if (resultGrauCorrelacao === 'REPROVADO') {
        melhorcaracterGrauCorrelacao.innerHTML = "";
        piorcaracterGrauCorrelacao.innerHTML = 'A curva não apresenta grau de correlação adequado, indicando que o método não é sensivel suficiente às mudanças na concentração.';
        podecaracterGrauCorrelacao.innerHTML = 'Pode ser verificada a possibilidade das concetrações usadas serem  muito baixa. <br> Pode ser verificada as características de sensibilidade do instrumento de quantificação usado.';

    } else {
        melhorcaracterGrauCorrelacao.innerHTML = "";
        piorcaracterGrauCorrelacao.innerHTML = '';
        podecaracterGrauCorrelacao.innerHTML = '';

    }

    /* Condicional para ANOVA*/
    if (resultAnova === 'APROVADO') {
        melhorcaracterAnova.innerHTML = "y efetivamente varia em função de x";
        piorcaracterAnova.innerHTML = '';
        podecaracterAnova.innerHTML = '';

    } else if (resultAnova === 'REPROVADO') {
        melhorcaracterAnova.innerHTML = "";
        piorcaracterAnova.innerHTML = 'y não varia efetivamente em função de x';
        podecaracterAnova.innerHTML = 'Pode ser verificada a possibilidade das concetrações usadas serem  muito baixa ou com pouco intervalo entre elas';

    } else {
        melhorcaracterAnova.innerHTML = "";
        piorcaracterAnova.innerHTML = '';
        podecaracterAnova.innerHTML = '';

    }

    /* Condicional para OUTLIER*/
    if (resultOutlier === 'APROVADO') {
        melhorcaracterOutlier.innerHTML = "A regressão linear não apresentou outliers (valores estatísticamente 'fora do conjunto').";
        piorcaracterOutlier.innerHTML = '';
        podecaracterOutlier.innerHTML = '';

    } else if (resultOutlier === 'REPROVADO') {
        melhorcaracterOutlier.innerHTML = "";
        piorcaracterOutlier.innerHTML = "A regressão linear apresentou outliers (valores estatísticamente 'fora do conjunto')";
        podecaracterOutlier.innerHTML = 'Uma outra curva pode ser realizada a fim de verificar falhas de preparo ou equipamentos';

    } else {
        melhorcaracterOutlier.innerHTML = "";
        piorcaracterOutlier.innerHTML = '';
        podecaracterOutlier.innerHTML = '';

    }

    /* Condicional para RESIDUOS*/
    if (resultResiduos === 'APROVADO') {
        melhorcaracterResiduos.innerHTML = "O método não possui tendencia de resíduos";
        piorcaracterResiduos.innerHTML = '';
        podecaracterResiduos.innerHTML = '';

    } else if (resultResiduos === 'REPROVADO') {
        melhorcaracterResiduos.innerHTML = '';
        piorcaracterResiduos.innerHTML = 'O método possui tendência nos erros dos resíduos';
        podecaracterResiduos.innerHTML = 'Pode-se verificar calibrações e verificações de equipamentos utilizados';

    } else {
        melhorcaracterResiduos.innerHTML = '';
        piorcaracterResiduos.innerHTML = '';
        podecaracterResiduos.innerHTML = '';

    }


    /* Condicional para TODOS APROVADOS e REPROVADOS*/
    if ((modeloaplicado === "APROVADO") && (resultGrauCorrelacao === "APROVADO") &&
        (resultOutlier === "APROVADO") && (resultAnova === "APROVADO") && (resultResiduos === "APROVADO")) {

        piorcaracterRegressao.innerHTML = '';
        podecaracterRegressao.innerHTML = '';

        piorcaracterGrauCorrelacao.innerHTML = '';
        podecaracterGrauCorrelacao.innerHTML = '';

        piorcaracterAnova.innerHTML = '';
        podecaracterAnova.innerHTML = '';

        piorcaracterOutlier.innerHTML = '';
        podecaracterOutlier.innerHTML = '';

        piorcaracterResiduos.innerHTML = '';
        podecaracterResiduos.innerHTML = '';

    } else if ((modeloaplicado === "REPROVADO") && (resultGrauCorrelacao === "REPROVADO") &&
        (resultOutlier === "REPROVADO") && (resultAnova === "REPROVADO") && (resultResiduos === "REPROVADO")) {

        melhorcaracterRegressao.innerHTML = 'A linearidade precisa ser revisada, não existem características adequadas.';
        melhorcaracterGrauCorrelacao.innerHTML = '';
        melhorcaracterAnova.innerHTML = '';
        melhorcaracterOutlier.innerHTML = '';
        melhorcaracterResiduos.innerHTML = '';
    }


    /** variáveis já impressas */
    var modeloaplicado = document.getElementById("modeloaplicado").innerHTML;
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao").innerHTML;
    var resultOutlier = document.getElementById("resultOutlier").innerHTML;
    var resultAnova = document.getElementById("resultAnova").innerHTML;
    var resultResiduos = document.getElementById("resultResiduos").innerHTML;

    // Armazenar no Local StorageRegressão
    localStorage.setItem("modeloaplicado", modeloaplicado);
    localStorage.setItem("resultGrauCorrelacao", resultGrauCorrelacao);
    localStorage.setItem("resultOutlier", resultOutlier);
    localStorage.setItem("resultAnova", resultAnova);
    localStorage.setItem("resultResiduos", resultResiduos);

    /** variáveis que serão impressas */
    /** variáveis REGRSSÃO LINEAR */
    var melhorcaracterRegressao = document.getElementById("melhorcaracterRegressao").innerHTML;
    var piorcaracterRegressao = document.getElementById("piorcaracterRegressao").innerHTML;
    var podecaracterRegressao = document.getElementById('podecaracterRegressao').innerHTML;

    /** variáveis GRAU DE CORRELAÇÃO */
    var melhorcaracterGrauCorrelacao = document.getElementById("melhorcaracterGrauCorrelacao").innerHTML;
    var piorcaracterGrauCorrelacao = document.getElementById("piorcaracterGrauCorrelacao").innerHTML;
    var podecaracterGrauCorrelacao = document.getElementById('podecaracterGrauCorrelacao').innerHTML;

    /** variáveis ANOVA */
    var melhorcaracterAnova = document.getElementById("melhorcaracterAnova").innerHTML;
    var piorcaracterAnova = document.getElementById("piorcaracterAnova").innerHTML;
    var podecaracterAnova = document.getElementById('podecaracterAnova').innerHTML;

    /** variáveis OUTLIERS */
    var melhorcaracterOutlier = document.getElementById("melhorcaracterOutlier").innerHTML;
    var piorcaracterOutlier = document.getElementById("piorcaracterOutlier").innerHTML;
    var podecaracterOutlier = document.getElementById('podecaracterOutlier').innerHTML;

    /** variáveis RESIDUOS */
    var melhorcaracterResiduos = document.getElementById("melhorcaracterResiduos").innerHTML;
    var piorcaracterResiduos = document.getElementById("piorcaracterResiduos").innerHTML;
    var podecaracterResiduos = document.getElementById('podecaracterResiduos').innerHTML;

    // Armazenar no Local Storage
    localStorage.setItem("melhorcaracterRegressao", melhorcaracterRegressao);
    localStorage.setItem("piorcaracterRegressao", piorcaracterRegressao);
    localStorage.setItem("podecaracterRegressao", podecaracterRegressao);

    localStorage.setItem("melhorcaracterGrauCorrelacao", melhorcaracterGrauCorrelacao);
    localStorage.setItem("piorcaracterGrauCorrelacao", piorcaracterGrauCorrelacao);
    localStorage.setItem("podecaracterGrauCorrelacao", podecaracterGrauCorrelacao);

    localStorage.setItem("melhorcaracterAnova", melhorcaracterAnova);
    localStorage.setItem("piorcaracterAnova", piorcaracterAnova);
    localStorage.setItem("podecaracterAnova", podecaracterAnova);

    localStorage.setItem("melhorcaracterOutlier", melhorcaracterOutlier);
    localStorage.setItem("piorcaracterOutlier", piorcaracterOutlier);
    localStorage.setItem("podecaracterOutlier", podecaracterOutlier);

    localStorage.setItem("melhorcaracterResiduos", melhorcaracterResiduos);
    localStorage.setItem("piorcaracterResiduos", piorcaracterResiduos);
    localStorage.setItem("podecaracterResiduos", podecaracterResiduos);


}

function mostrarInformacaoSalvaVerificação() {

    /** variáveis já impressas */
    document.getElementById("modeloaplicado").value = localStorage.getItem("modeloaplicado");
    document.getElementById("resultGrauCorrelacao").value = localStorage.getItem("resultGrauCorrelacao");
    document.getElementById("resultOutlier").value = localStorage.getItem("resultOutlier");
    document.getElementById("resultAnova").value = localStorage.getItem("resultAnova");
    document.getElementById("resultResiduos").value = localStorage.getItem("resultResiduos");

    /** variáveis REGRSSÃO LINEAR */
    document.getElementById("melhorcaracterRegressao").value = localStorage.getItem("melhorcaracterRegressao");
    document.getElementById("piorcaracterRegressao").value = localStorage.getItem("piorcaracterRegressao");
    document.getElementById('podecaracterRegressao').value = localStorage.getItem("podecaracterRegressao");

    /** variáveis GRAU DE CORRELAÇÃO */
    document.getElementById("melhorcaracterGrauCorrelacao").value = localStorage.getItem("melhorcaracterGrauCorrelacao");
    document.getElementById("piorcaracterGrauCorrelacao").value = localStorage.getItem("piorcaracterGrauCorrelacao");
    document.getElementById('podecaracterGrauCorrelacao').value = localStorage.getItem("podecaracterGrauCorrelacao");

    /** variáveis ANOVA */
    document.getElementById("melhorcaracterAnova").value = localStorage.getItem("melhorcaracterAnova");
    document.getElementById("piorcaracterAnova").value = localStorage.getItem("piorcaracterAnova");
    document.getElementById('podecaracterAnova').value = localStorage.getItem("podecaracterAnova");

    /** variáveis OUTLIERS */
    document.getElementById("melhorcaracterOutlier").value = localStorage.getItem("melhorcaracterOutlier");
    document.getElementById("piorcaracterOutlier").value = localStorage.getItem("piorcaracterOutlier");
    document.getElementById('podecaracterOutlier').value = localStorage.getItem("podecaracterOutlier");

    /** variáveis RESIDUOS */
    document.getElementById("melhorcaracterResiduos").value = localStorage.getItem("melhorcaracterResiduos");
    document.getElementById("piorcaracterResiduos").value = localStorage.getItem("piorcaracterResiduos");
    document.getElementById('podecaracterResiduos').value = localStorage.getItem("podecaracterResiduos");

}



// Função que chama as duas outras funções
function mostrarConclusao() {
    checkConclusaoLinearidade(); // Chama a primeira função
    final(); // Chama a segunda função
}


// Função que verifica a conclusão da linearidade e armazena a informação
function checkConclusaoLinearidade() {
    var modeloaplicado = document.getElementById("modeloaplicado").innerHTML;
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao").innerHTML; // Corrigido o nome do ID
    var resultOutlier = document.getElementById("resultOutlier").innerHTML;
    var resultAnova = document.getElementById("resultAnova").innerHTML;
    var resultResiduos = document.getElementById("resultResiduos").innerHTML;
    var conclusaoLinearidade = document.getElementById("conclusaoLinearidade");
    var informacao;

    var isLinearidadeAprovada = modeloaplicado === "APROVADO" && resultGrauCorrelacao === "APROVADO" &&
        resultOutlier === "APROVADO" && resultAnova === "APROVADO" && resultResiduos === "APROVADO";
    var isLinearidadealgumReprovado = modeloaplicado === "REPROVADO" || resultGrauCorrelacao === "REPROVADO" ||
        resultOutlier === "REPROVADO" || resultAnova === "REPROVADO" || resultResiduos === "REPROVADO";
    var isLinearidadeReprovada = modeloaplicado === "REPROVADO" && resultGrauCorrelacao === "REPROVADO" &&
        resultOutlier === "REPROVADO" && resultAnova === "REPROVADO" && resultResiduos === "REPROVADO";

    if (isLinearidadeAprovada) {
        conclusaoLinearidade.innerHTML = "O método possui habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
        informacao = conclusaoLinearidade.innerHTML;
    } else if (isLinearidadeReprovada) {
        conclusaoLinearidade.innerHTML = "O estudo da linearidade evidenciou que o método NÃO possui habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
        informacao = conclusaoLinearidade.innerHTML;
    } else if (isLinearidadealgumReprovado) {
        conclusaoLinearidade.innerHTML = "O estudo da linearidade evidenciou que o método possui pontos a serem verificados e otimizados para que tenha habilidade em obter resultados os quais são diretamente proporcionais à concentração do analito na amostra, dentro da faixa escolhida.";
        informacao = conclusaoLinearidade.innerHTML;
    }


    // Armazena todas as informações no localStorage
    localStorage.setItem("modeloaplicado", modeloaplicado);
    localStorage.setItem("resultGrauCorrelacao", resultGrauCorrelacao);
    localStorage.setItem("resultOutlier", resultOutlier);
    localStorage.setItem("resultAnova", resultAnova);
    localStorage.setItem("resultResiduos", resultResiduos);
    localStorage.setItem("conclusaoLinearidade", conclusaoLinearidade.innerHTML);
    localStorage.setItem("informacaoParaExibir", informacao);

}



function mostrarInformacaoSalvaConclusão() {


    // Recuperar todas as informações do localStorage
    var modeloaplicado = localStorage.getItem("modeloaplicado");
    var resultGrauCorrelacao = localStorage.getItem("resultGrauCorrelacao");
    var resultOutlier = localStorage.getItem("resultOutlier");
    var resultAnova = localStorage.getItem("resultAnova");
    var resultResiduos = localStorage.getItem("resultResiduos");
    var conclusaoLinearidade = localStorage.getItem("conclusaoLinearidade");
    var informacao = localStorage.getItem("informacaoParaExibir");

    // Mostrar as informações na página
    document.getElementById("modeloaplicado").innerHTML = modeloaplicado;
    document.getElementById("resultGrauCorrelacao").innerHTML = resultGrauCorrelacao;
    document.getElementById("resultOutlier").innerHTML = resultOutlier;
    document.getElementById("resultAnova").innerHTML = resultAnova;
    document.getElementById("resultResiduos").innerHTML = resultResiduos;
    document.getElementById("conclusaoLinearidade").innerHTML = conclusaoLinearidade;

    // Opicional: mostrar as informações em um console.log
    console.log("Modelo Aplicado:", modeloaplicado);
    console.log("Resultado do Grau de Correlação:", resultGrauCorrelacao);
    console.log("Resultado do Outlier:", resultOutlier);
    console.log("Resultado do Anova:", resultAnova);
    console.log("Resultado dos Resíduos:", resultResiduos);
    console.log("Conclusão da Linearidade:", conclusaoLinearidade);
    console.log("Informação:", informacao);


}





function verificarDados() {
    var modeloaplicado = document.getElementById("modeloaplicado").value;
    var resultGrauCorrelacao = document.getElementById("resultGrauCorrelacao").value;
    var resultOutlier = document.getElementById("resultOutlier").value;
    var resultAnova = document.getElementById("resultAnova").value;
    var resultResiduos = document.getElementById("resultResiduos").value;

    console.log("modeloaplicado:", modeloaplicado);
    console.log("resultGrauCorrelacao:", resultGrauCorrelacao);
    console.log("resultOutlier:", resultOutlier);
    console.log("resultAnova:", resultAnova);
    console.log("resultResiduos:", resultResiduos);

    if ((modeloaplicado !== "" || modeloaplicado !== null) ||
        (resultGrauCorrelacao !== "" || resultGrauCorrelacao !== null) ||
        (resultOutlier !== "" || resultOutlier !== null) ||
        (resultAnova !== "" || resultAnova !== null) ||
        (resultResiduos !== "" || resultResiduos !== null)) {

        carcterLinear();
        mostrarInformacaoSalvaVerificação();

    } else {
        alert("Dados incompletos");

    }
}


/*...*/

/*Mostra todas as informações inseridas pelo usuário, e não 'limpas'*/


/* const relatLinear = document.getElementById('relatLinear')
 
 relatLinear.addEventListener('click', (evt) => {
 
    const conteudo = document.getElementById('tabela').innerHTML
    const conteudo2 = document.getElementById('conclusaoLinearidade').innerHTML
    const conteudo3 = document.getElementById('main3').innerHTML
 
    let estilo = '<style>'
    estilo += '{width: 80%;font:25px Calibri;}'
    estilo += 'padding: 4px 8px; text-align: center;}'
    estilo += '</style>';
 
    const win = window.open('', '', 'height=700,width=700')
 
    win.document.write('<html><head>')
    win.document.write('<title></title>')
    win.document.write(estilo)
    win.document.write('</head><body>')
    win.document.write(conteudo)
    win.document.write(conteudo2);
    win.document.write(conteudo3);
    win.document.write('</body></html>')
 
    win.print()
 });*/

/*const relatLinear = document.getElementById('relatLinear')

relatLinear.addEventListener('click', (evt) => {
 
   const conteudo = document.getElementById('tabela').innerHTML
   const conteudo2 = document.getElementById('conclusaoLinearidade').innerHTML
   const conteudo3 = document.getElementById('main3').innerHTML
 
   let estilo = '<style>'
   estilo += 'table thead { display: auto; margin: auto; padding: auto; font-size: 14px; width: 100%; height: auto; background-color: #72b0c9; }'
   estilo += '.tabela tbody { display: auto; margin: auto; padding: 0; font-size: 13px; width: 100%; height: auto; background-color: #c7e7f3; text-align: center; }'
   estilo += 'th { border: 1px solid black; padding: 8px; text-align: center; }'
   estilo += 'td { border: 1px solid black; padding: 8px; text-align: left; }'
   estilo += '.fieldset { display: auto; margin: auto; padding: auto; font-size: 12px; width: 90%; height: auto; text-align: center; border-style: none; }'
   estilo += '.fieldset label { display: auto; margin: 0px; padding: auto; font-size: 12px; width: 100%; height: auto; text-align: center; font-weight: bold; }'
   estilo += '.fieldset select { display:flex; margin:0px; padding-right: 25px; padding-left: 25px; padding-top: 10px; padding-bottom: 10px; font-size: 12px; width: 100%; white-space: normal; text-align: center; border-style: none; background-color: #d2eaf3; }'
   estilo += '.fieldset input { display:flex; margin:auto; padding: auto; font-size: 12px; width: 80%; white-space: normal; text-align: center; border-style: none; background-color: #d2eaf3; }'
   estilo += '.respostas { display: auto; margin: auto; margin-top: 10px; padding: auto; font-size: 12px; width: 80%; height: auto; text-align: center; line-height: 1.5; }'
   estilo += '</style>';
 
   const win = window.open('', '', 'height=700,width=700')
 
   win.document.write('<html><head>')
   win.document.write('<title></title>')
   win.document.write(estilo)
   win.document.write('</head><body>')
   win.document.write(conteudo)
   win.document.write(conteudo2);
   win.document.write(conteudo3);
   win.document.write('</body></html>')
 
   win.print()
});*/

/*const relatLinear = document.getElementById('relatLinear');

relatLinear.addEventListener('click', (evt) => {
    const options = {
        filename: 'relatorio.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
    };

    const element = document.getElementById('main1'); // Selecione a div principal que contém seu conteúdo
    html2pdf().set(options).from(element).save();
});*/

/*const relatLinear = document.getElementById('relatLinear');

relatLinear.addEventListener('click', (evt) => {
  const options = {
    filename: 'relatorio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'landscape' }
  };

  const element = document.getElementById('main1'); // Selecione a div principal que contém seu conteúdo
  const originalStyles = getComputedStyle(element); // Salvar os estilos originais

  // Aplicar estilos temporários para a geração do PDF
  element.style.width = '95%';
  element.style.maxWidth = '800px';
  element.style.margin = 'auto';
  element.style.padding = '15px';
  element.style.height = 'auto';
  element.style.backgroundColor = '#f4f4f4';

  // Gerar o PDF e restaurar os estilos originais após a geração
  const pdfGenerator = html2pdf();
  pdfGenerator.set(options).from(element).toPdf().get('pdf').then(function (pdf) {
    pdfGenerator.save();
    // Restaurar os estilos originais
    element.style.width = originalStyles.width;
    element.style.maxWidth = originalStyles.maxWidth;
    element.style.margin = originalStyles.margin;
    element.style.padding = originalStyles.padding;
    element.style.backgroundColor = originalStyles.backgroundColor;
  });
});*/

/** 
 * const relatTabela = document.getElementById('relatTabela');

relatTabela.addEventListener('click', (evt) => {
    const options = {
        filename: 'Tabela_Avaliação_Linearidade.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            useCORS: true, // Habilitar uso de CORS para resolver problemas com imagens externas
            scrollX: 0, // Não permitir rolagem horizontal na captura
            scrollY: 0, // Não permitir rolagem vertical na captura
        },
        jsPDF: {
            unit: 'mm',
            format: 'a4',
            orientation: 'landscape',
            putOnlyUsedFonts: true, // Apenas incluir fontes usadas
            floatPrecision: 16 // Precisão para números de ponto flutuante
        }
    };

    const element = document.getElementById('tabela'); // Selecione a div principal que contém seu conteúdo
    const originalStyles = getComputedStyle(element); // Salvar os estilos originais

    // Aplicar estilos temporários para a geração do PDF
    element.style.width = 'auto';
    element.style.maxWidth = 'auto';
    element.style.margin = '15px';
    element.style.padding = '150px';
    element.style.height = 'auto';
    element.style.backgroundColor = '#fffff';

    // Gerar o PDF e restaurar os estilos originais após a geração
    const pdfGenerator = html2pdf();
    pdfGenerator.set(options).from(element).save();
});
*/

/**Imprimir relatório */

/**
const relatLinear = document.getElementById('relatLinear')

relatLinear.addEventListener('click', (evt) => {


    const conteudo2 = document.getElementById('main3').innerHTML
    
    let estilo = '<style>'
    estilo += '{width: 80%;font:25px Arial;}'
    estilo += '{padding: 4px 8px; text-align: center; color: #000; margin: 10px}'
    estilo += '</style>';

    const win = window.open('', '', 'height=700,width=700')

    win.document.write('<html><body>')
    win.document.write(estilo)
    win.document.write('<b>Análise de dados experimentais do estudo de Linearidade</b> <br> Protocolo: DOQ-CGCRE-008 - INMETRO<br> Orientação sobre validação de métodos analíticos')
    win.document.write(conteudo2);
    win.document.write('</body></html>')

    win.print()
}); */


// Adicionar ouvinte de evento ao botão relatLinear
document.addEventListener('DOMContentLoaded', function () {
    const relatLinear = document.getElementById('relatLinear');
    if (relatLinear) {
        relatLinear.addEventListener('click', (evt) => {

            const conteudo1 = document.getElementById('tabela').outerHTML;
            const conteudo2 = document.getElementById('main3').outerHTML; // Obter o HTML completo da tabela

            let estilo = '<style>';
            estilo += 'table {width: 100%; font: 12px Arial;}';
            estilo += 'table, th, td {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: center;}';
            estilo += '@page{color:#0000}';
            estilo += '@media print {button {display: none;}'
            estilo += '</style>';

            const win = window.open('', '', 'height=800,width=800');

            win.document.write('<html><head>');
            win.document.write(estilo);
            win.document.write('</head><body>');
            win.document.write('<br><b>Relatório da análise de dados experimentais e conclusão do estudo de Linearidade - Protocolo: DOQ-CGCRE-008 - INMETRO<br></b><br>');
            win.document.write('Tabela 1 - Avaliação da Linearidade');
            win.document.write(conteudo1);
            win.document.write('<table><tbody><select><option>');
            win.document.write('</option></select></tbody></table>');
            win.document.write('<br>Conclusão da Linearidade');
            win.document.write(conteudo2);
            win.document.write('</body></html>');

            win.document.close(); // fechar o documento para garantir que ele seja renderizado antes do print()
            win.print();
        });
    }
});







