

  const btn_impA = document.getElementById('btn_impA');

  btn_impA.addEventListener('click', (evt) => {    
    const conteudo1 = document.getElementById('tabela_A');
    if (conteudo1) {
      const conteudoHTML = conteudo1.outerHTML;

      let estilo = '<style>';
      estilo += 'table {width: 100%; font: 12px Arial;}';
      estilo += 'table, th, td {border: solid 2px #888; border-collapse: collapse; padding: 4px 8px; text-align: center;}';
      estilo += '@page { size: landscape; }'; // Define a orientação da página para paisagem
      estilo += '</style>';

      const win = window.open('', '', 'height=800,width=800');

      win.document.write('<html><head>');
      win.document.write(estilo);
      win.document.write('</head><body>');
      win.document.write('<br><b>Planejamento para estudo de Linearidade - Protocolo: DOQ-CGCRE-008 - INMETRO<br></b><br>');
      win.document.write('Tabela A - Informações e critérios para planejamnento estudo de Linearidade');
      win.document.write(conteudoHTML);
      win.document.write('</body></html>');

      win.document.close(); // fechar o documento para garantir que ele seja renderizado antes do print()
      win.print();
    } else {
      console.error('Elemento w3-tabela_A não encontrado.');
    }
  });