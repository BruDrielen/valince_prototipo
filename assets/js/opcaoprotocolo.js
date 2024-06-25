

function propriedade() {
    let matriz = document.getElementById('matriz').value;
    let analito = document.getElementById('analito').value;
    let metodo = document.getElementById('metodo').value;
    let aplicação = document.getElementById('aplicação').value;




    function opçãoProtocolos() {

        if ((matriz === 'alimento') && (analito === 'pesticida') 
        && (metodo === 'quantitativo') && (aplicação === 'brasil')) {

            document.getElementById('inmetro').style.display = 'inline-block';
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
