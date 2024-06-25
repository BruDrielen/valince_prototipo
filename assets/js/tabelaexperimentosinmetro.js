

function adicionarLinhasColunasA() {
    var selectBox = document.getElementById("niveisA");
    var rows = selectBox.value;

    var corpoTabela = document.getElementById("corpoTabelaA");
    corpoTabela.innerHTML = ""; // Limpa o corpo da tabela

    for (var i = 0; i < parseInt(rows); i++) {
        var row = corpoTabela.insertRow(i);
        var cell1 = row.insertCell(0);
        cell1.innerHTML = "Nível " + (i + 1);
        var cell2 = row.insertCell(1);
        cell2.style.borderLeft = "1px solid black";
    }
}


function adicionarLinhasColunas() {
    var selectLinhas = document.getElementById("numLinhas");
    var selectColunas = document.getElementById("numColunas");
    var numLinhas = parseInt(selectLinhas.value);
    var numColunas = parseInt(selectColunas.value);

    var corpoTabela = document.getElementById("corpoTabela");
    corpoTabela.innerHTML = ""; // Limpa o corpo da tabela

    var cabecalhoTabela = document.querySelector("#tabela thead");

    // Atualiza o cabeçalho das colunas
    var cabecalhoColunas = "<tr><th>Níveis de concentração (____)</th>";
    for (var i = 1; i < numColunas; i++) {
        cabecalhoColunas += "<th>Resposta " + (i) + "</th>";
    }
    cabecalhoColunas += "</tr>";
    cabecalhoTabela.innerHTML = cabecalhoColunas;

    // Adiciona as linhas à tbody
    for (var i = 0; i < numLinhas; i++) {
        var row = corpoTabela.insertRow();
        var cell = row.insertCell();
        cell.textContent = "Nível " + (i + 1);
        cell.style.border = "1px solid black"; // Adiciona borda à célula
        for (var j = 1; j < numColunas; j++) {
            var newCell = row.insertCell(); // Adiciona célula
            newCell.style.border = "1px solid black"; // Adiciona borda à célula
        }
    }
}

// Chama a função inicialmente para exibir a tabela vazia
adicionarLinhasColunas();


/**Imprimir tabelas */

const botãoD = document.getElementById('botãoD');

botãoD.addEventListener('click', (evt) => {    
    const conteudo1 = document.getElementById('tabelaA').outerHTML;
    const conteudo2 = document.getElementById('tabela').outerHTML;
    const conteudo3 = document.getElementById('tabela3').outerHTML; // Obter o HTML completo da tabela

    let estilo = '<style>';
    estilo += 'table {width: 100%; font: 12px Arial;}';
    estilo += 'table, th, td {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: left;}';
    estilo += '</style>';

    const win = window.open('', '', 'height=800,width=800');

    win.document.write('<html><head>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write('<br><b>Experimentos do estudo de Linearidade - Protocolo: DOQ-CGCRE-008 - INMETRO<br></b><br>');
    win.document.write('Tabela 1 - Verificação faixa linear');
    win.document.write(conteudo1);
    win.document.write('<br>Tabela 2 - Dados para avaliação da linearidade');
    win.document.write(conteudo2);
    win.document.write('<br>Tabela 4 - Como avaliar a Linearidade');
    win.document.write(conteudo3);
    win.document.write('</body></html>');

    win.document.close(); // fechar o documento para garantir que ele seja renderizado antes do print()
    win.print();
});