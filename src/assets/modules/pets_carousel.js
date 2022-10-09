const BTN_PREV = document.querySelector('#btn-prev');
const BTN_NEXT = document.querySelector('#btn-next');
const PETS_ITEMS = document.querySelector('#pets__items');
const PETS = document.querySelectorAll('.pets__item');

console.log(PETS);


const movePrev = () => {
    PETS_ITEMS.classList.add('transition-prev');
    BTN_PREV.removeListener('click', movePrev);
};

const moveNext = () => {
    PETS_ITEMS.classList.add('transition-next');
    BTN_PREV.removeListener('click', moveNext);
};

const randomPets = () => {
    let divs = PETS_ITEMS.childNodes; /* Создание фрагмента документа для хранения перетасованных элементов */
    let frag = document.createDocumentFragment(); 
    /* Цикл, пока каждый элемент не будет перемещен из родителя во фрагмент документа */
    while (divs.length) {
        /* выбор одного случайного дочернего элемента и перемещение его во фрагмент документа */
        frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
    }
    PETS_ITEMS.appendChild(frag); /* добавление фрагмента документа добавляет все элементы в перемешанном порядке */
};


BTN_PREV.addEventListener('click', movePrev);
BTN_NEXT.addEventListener('click', moveNext);

PETS_ITEMS.addEventListener('animationend', (animationEvent) => {
    if (animationEvent.animationName === 'move-prev') {
        PETS_ITEMS.classList.remove('transition-prev');
        randomPets();
        
        } else {
            PETS_ITEMS.classList.remove('transition-next');
            randomPets();
    }
    BTN_PREV.addEventListener('click', movePrev);
    BTN_NEXT.addEventListener('click', moveNext);
});




