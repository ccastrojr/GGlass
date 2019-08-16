function mudaImgMenu() {
    var img = document.querySelector('#icone');
    var menu = document.querySelector('#lista-menu').children;

    menu[0].addEventListener('mousemove', () => {
        img.src = '../_imagens/home.png'; 
    });
    menu[1].addEventListener('mousemove', () => {
        img.src = '../_imagens/especificacoes.png';
    });
    menu[2].addEventListener('mousemove', () => {
        img.src = '../_imagens/fotos.png';
    });
    menu[3].addEventListener('mousemove', () => {
        img.src = '../_imagens/multimidia.png';
    });
    menu[4].addEventListener('mousemove', () => {
        img.src = '../_imagens/contato.png';
    });

    navSite(menu);
}

function navSite(menu) {
    menu[0].addEventListener('click', () => {
        window.location.href = '../index.html';
    });
    menu[1].addEventListener('click', () => {
        window.location.href = '../specs.html';
    });
    menu[2].addEventListener('click', () => {
        window.location.href = '../fotos.html';
    });
    menu[3].addEventListener('click', () => {
        window.location.href = '../multimidia.html';
    });
    menu[4].addEventListener('click', () => {
        window.location.href = '../fale-conosco.html';
    });
    
}

function voltaImg(paginaAtual) {
    var icone = document.querySelector('#icone');

    switch (paginaAtual) {
        case 'specs':
            icone.src = '../_imagens/especificacoes.png';
            break;
        case 'multimidia':
            icone.src = '../_imagens/multimidia.png';
            break;
        case 'fotos':
            icone.src = '../_imagens/fotos.png';
            break;
        case 'contato':
            icone.src = '../_imagens/contato.png';
            break;
        default:
            icone.src = '../_imagens/glass-oculos-preto-peq.png';
    }
}