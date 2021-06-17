var btnMenu = document.querySelector('.li-menu');

btnMenu.addEventListener('click', function(){
    var boxMenu = document.querySelector('.li-opcao-menu');

    boxMenu.classList.toggle('li-visibilidade');
});