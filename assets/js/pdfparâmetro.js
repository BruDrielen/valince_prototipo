const btn_imp = document.getElementById('btn_imp')

btn_imp.addEventListener('click', (evt) => {

    const conteudo = document.getElementById('main1').innerHTML
    const conteudo2 = document.getElementById('main2').innerHTML
    const conteudo3 = document.getElementById('main3').innerHTML
    const conteudo4 = document.getElementById('main4').innerHTML

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
    win.document.write(conteudo4);
    win.document.write('</body></html>')

    win.print()
});