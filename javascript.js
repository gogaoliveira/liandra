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

function escondesemana(){
    const seg = document.querySelector('#hide1');
    const ter = document.querySelector('#hide2');
    const qua = document.querySelector('#hide3');
    const sem = document.querySelector('#sem');
    const fim = document.querySelector('#fim');

    if (seg.classList.contains('hide')){
        seg.classList.remove('hide')
        ter.classList.remove('hide')
        qua.classList.remove('hide')
        seg.classList.add('nohide')
        ter.classList.add('nohide')
        qua.classList.add('nohide')
        
        sem.classList.remove('hide')
        sem.classList.add('nohide')
        
        fim.classList.remove('nohide')
        fim.classList.add('hide')
    }else{
        seg.classList.remove('nohide')
        ter.classList.remove('nohide')
        qua.classList.remove('nohide')
        seg.classList.add('hide')
        ter.classList.add('hide')
        qua.classList.add('hide')

        sem.classList.remove('nohide')
        sem.classList.add('hide')
        
        fim.classList.remove('hide')
        fim.classList.add('nohide')

        
    }
    
}