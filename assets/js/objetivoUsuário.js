

function escolhas() {
    let situação1 = document.getElementById('situação1');
    let situação2 = document.getElementById('situação2');
    let situação3= document.getElementById('situação3');

    situação1.addEventListener("click", situaçãoMétodo);
    situação2.addEventListener("click", situaçãoMétodo);
    situação3.addEventListener("click", situaçãoMétodo);



    function situaçãoMétodo() {

        if (event.target.id === 'situção1') {

            document.getElementById('comoPrefere').style.display = 'inline-block';
            document.getElementById('mapa').style.display = 'inline-block';
            console.log('INMETRO');
            console.log('MAPA');
            return;
        }

        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';

        if ((matriz === 'agua') && (analito === 'farmaco') 
        && (metodo === 'quantitativo') && (aplicação === 'brasil')) {

            document.getElementById('anvisa').style.display = 'inline-block';
            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('RDC166');
            console.log('INMETRO');
            return;
        }

        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';

        if ((matriz === 'farmaco') && (analito === 'farmaco') 
        && (metodo === 'quantitativo') && (aplicação === 'brasil')) {
    
            document.getElementById('anvisa23').style.display = 'inline-block';
            console.log('RDC23');
            return;
        }
        
        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('anvisa').style.display = 'none';
        document.getElementById('anvisa23').style.display = 'none';
       
    }

    opçãoProtocolos();
    
}
