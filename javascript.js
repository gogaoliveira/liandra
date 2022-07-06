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