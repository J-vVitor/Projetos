icone = document.querySelector('#icon_menu');
lista = document.querySelector('#ul');

function clickmenu(){
   if(lista.style.display == 'block'){
    lista.style.display = 'none'
   }
   else{
    lista.style.display = 'block'
   }
}