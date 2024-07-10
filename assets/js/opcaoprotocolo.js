function propriedade() {
    let matriz = document.getElementById('matriz').value;
    let analito = document.getElementById('analito').value;
    let metodo = document.getElementById('metodo').value;
    let aplicação = document.getElementById('aplicação').value;

    function opçãoProtocolos() {
        // Ocultar todos os elementos inicialmente
        document.getElementById('inmetro').style.display = 'none';
        document.getElementById('mapa').style.display = 'none';
        document.getElementById('mapa2').style.display = 'none';
        document.getElementById('anvisa166').style.display = 'none';
        document.getElementById('anvisa27').style.display = 'none';
        document.getElementById('sante').style.display = 'none';
        document.getElementById('q2r2').style.display = 'none';
        document.getElementById('m10').style.display = 'none';
        document.getElementById('ueResiduo').style.display = 'none';

        // Verificar cada combinação e exibir os elementos relevantes
        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' ||
            matriz === 'ração' || matriz === 'farmaco' || matriz === 'solo' || matriz === 'pesticida' || matriz === 'medvet'
            || matriz === 'sangue' || matriz === 'urina' || matriz === 'saliva' || matriz === 'unha'
            || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' || matriz === 'humor'
            || matriz === 'oleo' || matriz === 'gasolina' 
            || matriz === 'petroleo' || matriz === 'etanol' || matriz === 'metanol' || matriz === 'gás'
            || matriz === 'outra') &&
            (analito === 'pesticida' || analito === 'medvet' || analito === 'droga'
                || analito === 'outrasdrogas' || analito === 'oleo' || analito === 'gasolina' 
                || analito === 'petroleo' || analito === 'etanol' || analito === 'metanol' || analito === 'gás') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('inmetro');
        }

        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração'
            || matriz === 'solo' || matriz === 'pesticida' || matriz === 'farmaco' || matriz === 'medvet'
            || matriz === 'sangue' || matriz === 'urina' || matriz === 'saliva' || matriz === 'unha'
            || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' || matriz === 'humor'
            || matriz === 'oleo' || matriz === 'gasolina'
            || matriz === 'petroleo' || matriz === 'etanol' || matriz === 'metanol' || matriz === 'gás') &&
            (analito === 'pesticida' || analito === 'medvet') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('mapa').style.display = 'inline-block';
            console.log('mapa');
        }


        if ((matriz === 'ração') &&
            (analito === 'farmaco' || analito === 'droga'
                || analito === 'outrasdrogas') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('mapa').style.display = 'inline-block';
            console.log('mapa');
            document.getElementById('anvisa27').style.display = 'inline-block';
            console.log('anvisa27');
            document.getElementById('mapa2').style.display = 'inline-block';
            console.log('mapa2');
        }



        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração'
            || matriz === 'solo' || matriz === 'pesticida' || matriz === 'farmaco' || matriz === 'medvet'
            || matriz === 'sangue' || matriz === 'urina' || matriz === 'saliva' || matriz === 'unha'
            || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' || matriz === 'humor'
            || matriz === 'oleo' || matriz === 'gasolina'
            || matriz === 'petroleo' || matriz === 'etanol' || matriz === 'metanol' || matriz === 'gás') &&
            (analito === 'pesticida' || analito === 'medvet') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('mapa').style.display = 'inline-block';
            console.log('mapa');
        }

        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração'
            || matriz === 'solo' || matriz === 'pesticida' || matriz === 'farmaco' || matriz === 'medvet'
            ) &&
            (analito === 'pesticida' || analito === 'medvet') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('mapa2').style.display = 'inline-block';
            console.log('mapa2');
        }

        if ((matriz === 'medvet' || matriz === 'pesticida' || matriz === 'ração') &&
        (analito === 'oleo') &&
        (aplicação === 'brasil')) {

        document.getElementById('mapa').style.display = 'inline-block';
        console.log('mapa');
        document.getElementById('mapa2').style.display = 'inline-block';
        console.log('mapa2');
    }


        if ((matriz === 'alimento' || matriz === 'efluente' || matriz === 'sangue' || matriz === 'urina'
            || matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor'
            || matriz === 'mecônio' || matriz === 'humor' || matriz === 'solo'
            || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol'
            || matriz === 'gás') &&
            (analito === 'farmaco' || analito === 'etanol' || analito === 'droga'
                || analito === 'medvet'
                || analito === 'outrasdrogas' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('anvisa27').style.display = 'inline-block';
            console.log('anvisa27');
        }

        if ((matriz === 'sangue' || matriz === 'urina'
            || matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor'
            || matriz === 'mecônio' || matriz === 'humor') &&
            (analito === 'pesticida') &&
            (metodo === 'quantitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('anvisa27').style.display = 'inline-block';
            console.log('anvisa27');
            document.getElementById('mapa').style.display = 'inline-block';
            console.log('mapa');
        }


        if ((matriz === 'agua' || matriz === 'pesticida' || matriz === 'farmaco'
            || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol'
            || matriz === 'gás') &&
            (analito === 'farmaco' || analito === 'droga'
                || analito === 'proteina' || analito === 'medvet'
                || analito === 'outrasdrogas' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('anvisa166').style.display = 'inline-block';
            console.log('anvisa166');
        }


        if ((matriz === 'medvet') &&
            (analito === 'farmaco' || analito === 'droga') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('anvisa166').style.display = 'inline-block';
            console.log('anvisa166');
            document.getElementById('mapa').style.display = 'inline-block';
            console.log('mapa');
        }

        if ((matriz === 'farmaco') &&
        (analito === 'oleo') &&
        (aplicação === 'brasil')) {

        document.getElementById('anvisa166').style.display = 'inline-block';
        console.log('anvisa166');
    }

        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' ||
            matriz === 'ração' || matriz === 'solo' || matriz === 'pesticida' || matriz === 'farmaco' || matriz === 'sangue' || matriz === 'urina' || matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' || matriz === 'humor' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' || matriz === 'gás' || matriz === 'vapor') &&
            (analito === 'pesticida') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' || aplicação === 'europa')) {

            document.getElementById('sante').style.display = 'inline-block';
            console.log('sante');
        }

        if ((matriz === 'ração') &&
            (analito === 'farmaco') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' || aplicação === 'europa')) {

            document.getElementById('sante').style.display = 'inline-block';
            console.log('sante');
        }

        if ((matriz === 'agua' || matriz === 'pesticida' || matriz === 'farmaco' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' || matriz === 'gás') &&
            (analito === 'farmaco' || analito === 'etanol' || analito === 'droga'
                || analito === 'proteina' || analito === 'aminoacido' || analito === 'carboidrato'
                || analito === 'lipídeos'
                || analito === 'outrasdrogas' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' || aplicação === 'europa')) {

            document.getElementById('q2r2').style.display = 'inline-block';
            console.log('q2r2');
        }

        if ((matriz === 'alimento' || matriz === 'efluente' || matriz === 'farmaco'
            || matriz === 'sangue' || matriz === 'urina' || matriz === 'saliva'
            || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor'
            || matriz === 'mecônio' || matriz === 'humor') &&
            (analito === 'farmaco' || analito === 'etanol' || analito === 'droga'
                || analito === 'proteina' || analito === 'aminoacido' || analito === 'carboidrato'
                || analito === 'lipídeos'
                || analito === 'outrasdrogas' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' || aplicação === 'europa')) {

            document.getElementById('m10').style.display = 'inline-block';
            console.log('m10');
        }

        if ((matriz === 'alimento' || matriz === 'efluente' || matriz === 'farmaco' || matriz === 'sangue'
            || matriz === 'urina' || matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo'
            || matriz === 'suor' || matriz === 'mecônio' || matriz === 'humor') &&
            (analito === 'pesticida') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'europa')) {

            document.getElementById('ueResiduo').style.display = 'inline-block';
            console.log('ueResiduo');
        }


        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração' || matriz === 'solo' ||
            matriz === 'pesticida' || matriz === 'medvet' || matriz === 'farmaco' || matriz === 'sangue' || matriz === 'urina' ||
            matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' ||
            matriz === 'humor' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' ||
            matriz === 'gás' || matriz === 'outra') &&
            (analito === 'pesticida' || analito === 'farmaco' || analito === 'medvet' || analito === 'oleo' || analito === 'gasolina' ||
                analito === 'petróleo' || analito === 'lipídeos' || analito === 'proteina' || analito === 'carboidrato' ||
                analito === 'aminoácido' || analito === 'droga' || analito === 'etanol' || analito === 'outrasdrogas' ||
                analito === 'virus' || analito === 'bacteria' || analito === 'fungo' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' ||
                aplicação === 'europa')) {

            document.getElementById('iupac').style.display = 'inline-block';
            console.log('iupac');
            document.getElementById('eurachem').style.display = 'inline-block';
            console.log('eurachem');
        }


        if ((matriz === 'superficie') &&
            (analito === 'virus' || analito === 'bacteria' || analito === 'fungo' 
                || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua')) {

            document.getElementById('aoacAmbiental').style.display = 'inline-block';
            console.log('aoacAmbiental');

        }

        if ((matriz === 'solo') &&
            (analito === 'virus' || analito === 'bacteria' || analito === 'fungo' || analito === 'outrosmetabolitos') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua')) {

            document.getElementById('aoacAlimentosRações').style.display = 'inline-block';
            console.log('aoacAlimentosRações');

        }

        if ((matriz === 'outra') &&
            (analito === 'droga' || analito === 'outrasdrogas') &&
            (metodo === 'quantitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('inmetro');
            document.getElementById('anvisa27').style.display = 'inline-block';
            console.log('anvisa27');
            document.getElementById('anvisa166').style.display = 'inline-block';
            console.log('anvisa166');
        }

        if ((matriz === 'outra') &&
            (analito === 'droga' || analito === 'outrasdrogas') &&
            (metodo === 'quantitativo' || metodo === 'qualitativo') &&
            (aplicação === 'brasil')) {

            document.getElementById('inmetro').style.display = 'inline-block';
            console.log('inmetro');
            document.getElementById('anvisa27').style.display = 'inline-block';
            console.log('anvisa27');
            document.getElementById('anvisa166').style.display = 'inline-block';
            console.log('anvisa166');
        }


        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração' 
            || matriz === 'solo' ||
            matriz === 'pesticida' || matriz === 'medvet' || matriz === 'farmaco' || matriz === 'sangue' || matriz === 'urina' ||
            matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' ||
            matriz === 'humor' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' ||
            matriz === 'gás' || matriz === 'outra') &&
            (analito === 'pesticida' || analito === 'farmaco' || analito === 'medvet' || analito === 'oleo' || analito === 'gasolina' ||
                analito === 'petróleo' || analito === 'lipídeos' || analito === 'proteina' || analito === 'carboidrato' ||
                analito === 'aminoácido' || analito === 'droga' || analito === 'etanol' || analito === 'outrasdrogas' ||
                analito === 'virus' || analito === 'bacteria' || analito === 'fungo' || analito === 'outrosmetabolitos') &&
            (metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' ||
                aplicação === 'europa')) {

            document.getElementById('aoacQualiBinary').style.display = 'inline-block';
            console.log('aoacQualiBinary');

        }

        if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração' || matriz === 'solo' ||
            matriz === 'pesticida' || matriz === 'medvet' || matriz === 'farmaco' || matriz === 'sangue' || matriz === 'urina' ||
            matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' ||
            matriz === 'humor' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' ||
            matriz === 'gás' || matriz === 'outra') &&
            (analito === 'pesticida' || analito === 'farmaco' || analito === 'medvet' || analito === 'oleo' || analito === 'gasolina' ||
                analito === 'petróleo' || analito === 'lipídeos' || analito === 'proteina' || analito === 'carboidrato' ||
                analito === 'aminoácido' || analito === 'droga' || analito === 'etanol' || analito === 'outrasdrogas' ||
                analito === 'virus' || analito === 'bacteria' || analito === 'fungo' || analito === 'outrosmetabolitos') &&
            (metodo === 'qualitativo') &&
            (aplicação === 'mundial' || aplicação === 'eua' ||
                aplicação === 'europa')) {

            document.getElementById('aoacQualiBinary').style.display = 'inline-block';
            console.log('aoacQualiBinary');

        }

    

    if ((matriz === 'alimento' || matriz === 'agua' || matriz === 'efluente' || matriz === 'ração' || matriz === 'solo' ||
        matriz === 'pesticida' || matriz === 'medvet' || matriz === 'farmaco' || matriz === 'sangue' || matriz === 'urina' ||
        matriz === 'saliva' || matriz === 'unha' || matriz === 'cabelo' || matriz === 'suor' || matriz === 'mecônio' ||
        matriz === 'humor' || matriz === 'oleo' || matriz === 'gasolina' || matriz === 'etanol' || matriz === 'metanol' ||
        matriz === 'gás' || matriz === 'outra') &&
        (analito === 'virus' || analito === 'bacteria' || analito === 'fungo' || analito === 'outrosagentes') &&
        (metodo === 'quantitativo' || metodo === 'qualitativo') &&
        (aplicação === 'mundial' || aplicação === 'eua' ||
            aplicação === 'europa' ||  aplicação === 'brasil')) {

        document.getElementById('aoacAgBio').style.display = 'inline-block';
        console.log('aoacAgBio');
            }
    }
    opçãoProtocolos();
}
