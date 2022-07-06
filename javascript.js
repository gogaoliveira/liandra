function trocacor(d){
    const btn = document.querySelector('#' + d);

    if (btn.classList.contains('branco')){
        btn.classList.remove('branco')
        btn.classList.add('vermelho')
    }else{
        btn.classList.remove('vermelho')
        btn.classList.add('branco')
    }
    
}

function trocaFundo(){
    const body = document.querySelector('#body');

    if (body.classList.contains('fundo1')){
        
        body.classList.remove('fundo1')
        body.classList.add('fundo2')
        return
    }

    if (body.classList.contains('fundo2')){
        body.classList.remove('fundo2')
        body.classList.add('fundo3')
        return
    }

    if (body.classList.contains('fundo3')){
        body.classList.remove('fundo3')
        body.classList.add('fundo1')
        return
    }

    
}