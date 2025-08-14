
const button = document.querySelector('.button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

console.log(modal.classList); //lista las clases del elemento
console.log(modal.classList[1]); //método 1: lista el item 1 de la lista de clases del elemento
console.log(modal.classList.item(1)); //método 2: lista el item 1 de la lista de clases del elemento

button.addEventListener('click', function () {//function() función anónima pq no tiene declarado event con la info del elemento que gatilló el evento.
    modal.classList.add('show'); //agrega la clase show al elemento modal
    // modal.classList.add('show1', 'show2'); //agrega dos clases al elemento modal

    // button.classList.add('red'); //agrega la clase

    //agregar/quitar clases
    //método 1: si no tiene la clase la agrega, si ya la tiene la quita.
    // if (button.matches('.red')) {
    //     button.classList.remove('red');
    // } else { button.classList.add('red'); }

    //método 2: usando el método contains de classList similar a matches
    // if(button.classList.contains('red')){
    //     button.classList.remove('red');
    // }else{button.classList.add('red');}

    //método 3: alterna la clase, si no la tiene la agrega, caso contrario la quita.
    button.classList.toggle('red');

    // modal.classList.replace('clase3', 'clase33') //ejemplo para reemplazar una clase por otra
});

closeModal.addEventListener('click', function () {
    modal.classList.remove('show');
    button.classList.remove('red');
});