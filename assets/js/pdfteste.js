const btnPdf = document.getElementById('pdf')

btnPdf.addEventListener('click', (evt) => {

    const conteudo = document.getElementById('js-preloader');

    let estilo = '<style>'
    estilo += '{width: 90%;font:25px Calibri;}';
    estilo += 'padding: 4px 8px; text-align: center;}';
    estilo += '</style>';

    const win = window.open('', '', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title></title>');
    win.document.write(estilo);
    win.document.write('</head><body>');
    win.document.write(conteudo);
    win.document.write('</body><html>');

    win.print()
});