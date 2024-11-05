function clicou(){
    
    let showMenu = document.querySelector('#social-media')
    let displayMenu = document.querySelector('menu')

    if (showMenu.style.display == 'none'){
        showMenu.style.display = 'block';
    } else {
        showMenu.style.display = 'none';
    }
}