document.addEventListener('DOMContentLoaded', () => {
    const btn_tabela = document.getElementById('btn_tabela');
    
    btn_tabela.addEventListener('click', (evt) => {    
      const conteudo1 = document.getElementById('tabela_um').outerHTML;
      const conteudo2 = document.getElementById('tabela_dois').outerHTML;

      let estilo = '<style>';
      estilo += 'table {width: 100%; font: 12px Arial;}';
      estilo += 'table, th, td {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: left;}';
      estilo += '</style>';

      const win = window.open('', '', 'height=800,width=800');

      win.document.write('<html><head>');
      win.document.write(estilo);
      win.document.write('</head><body>');
      win.document.write('<br><b>Experimentos do estudo de Linearidade - Protocolo: DOQ-CGCRE-008 - INMETRO<br></b><br>');
      win.document.write('Verificação Equipamentos E Qualificar Materiais');
      win.document.write(conteudo1);
      win.document.write(conteudo2);
      win.document.write('</body></html>');

      win.document.close(); // fechar o documento para garantir que ele seja renderizado antes do print()
      win.print();
    });
  });