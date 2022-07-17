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

function inserirData(){
    const data = new Date(document.querySelector('#data').value)
    let day = []
    let month = []
    
    for (let index = 1; index < 6; index++) {
        day[index] = data.getDate() + index
        month[index] = data.getMonth() + 1 < 10 ? '0' + (data.getMonth() + 1) : data.getMonth() + 1
        console.log(index)
    }

    const data_ter = document.querySelector('.data_ter')
    const data_qua = document.querySelector('.data_qua')
    const data_qui = document.querySelector('.data_qui')
    const data_sex = document.querySelector('.data_sex')
    const data_sab = document.querySelector('.data_sab')
    data_ter.textContent = day[1] + '/' + month[1]
    data_qua.textContent = day[2] + '/' + month[2]
    data_qui.textContent = day[3] + '/' + month[3]
    data_sex.textContent = day[4] + '/' + month[4]
    data_sab.textContent = day[5] + '/' + month[5]
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
        body.classList.add('fundo4')
        return
    }

    if (body.classList.contains('fundo4')){
        body.classList.remove('fundo4')
        body.classList.add('fundo5')
        return
    }

    if (body.classList.contains('fundo5')){
        body.classList.remove('fundo5')
        body.classList.add('fundo6')
        return
    }

    if (body.classList.contains('fundo6')){
        body.classList.remove('fundo6')
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

