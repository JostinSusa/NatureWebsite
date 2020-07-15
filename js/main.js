var menu = document.getElementById('menu'),
    toggle = document.getElementById('toggle');
var contador = 0;
    function cambioClase(){
        if(contador == 0){
            menu.style.display = 'flex';
            contador = 1
        }else{
            menu.style.display = 'none';
            contador = 0;
        }
    }
    
    toggle.addEventListener('click',cambioClase);
