    function criptografarTexto() {

        let mensagem = document.getElementsByTagName('input')[0].value;
        let textoCriptografado = criptografar(mensagem);

        document.getElementsByTagName('textarea')[0].value = textoCriptografado;

        document.getElementsByTagName('img')[0].style.display = 'none';
        document.getElementsByTagName('div')[1].style.display = 'none';
        document.getElementsByClassName('text-section-botao')[0].style.display = 'inline-block';

        document.getElementsByTagName('input')[0].value = '';

    }
    
    function descriptografarTexto() {
        let mensagem = document.getElementsByTagName('input')[0].value;
        let textoDescriptografado = descriptografar(mensagem);

        document.getElementsByTagName('textarea')[0].value = textoDescriptografado;

        document.getElementsByTagName('img')[0].style.display = 'none';
        document.getElementsByTagName('div')[1].style.display = 'none';
        document.getElementsByClassName('text-section-botao')[0].style.display = 'inline-block';

        document.getElementsByTagName('input')[0].value = '';
    }

    function copiarTexto() {
        let mensagem = document.getElementsByTagName('textarea')[0];
        mensagem.select();
        mensagem.setSelectionRange(0,99999);
        document.execCommand('copy');

        document.getElementsByTagName('textarea')[0].value = 'Mensagem copiada!';
    }
                                
    function criptografar(texto) {
        return texto
            .replace(/e/g, 'enter')
            .replace(/i/g, 'imes')
            .replace(/a/g, 'ai')
            .replace(/o/g, 'ober')
            .replace(/u/g, 'ufat');
    }
        
    function descriptografar(textoCriptografado) {
        return textoCriptografado
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');
    }
