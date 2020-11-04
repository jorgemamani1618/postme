/* Declaraion de variables globales */
let MAIN;
let MODAL_POST;
let BTN_SHOW_POST;
let BTN_CANCEL_POST;


// Funciones
// Cuando se cargue todo nuestro DOM


const showPostModal = () => {

    MAIN.style.display = 'none';

    MODAL_POST.style.display = 'block';

    setTimeout(() => {
        MODAL_POST.style.transform = 'translateY(0)';
    }, 1);
};
const closePostModal = () => {
    MAIN.style.display = 'block';
    MODAL_POST.style.transform = 'translateY(100vh)';
};

window.addEventListener('load', async() => {
    MAIN = document.querySelector('#main');
    MODAL_POST = document.querySelector('#modal-post-section');
    BTN_SHOW_POST = document.querySelector('#btn-upload-post');
    BTN_SHOW_POST.addEventListener('click', showPostModal);
    BTN_CANCEL_POST = document.querySelector('#btn-post-cancel');
    BTN_CANCEL_POST.addEventListener('click', closePostModal)
    console.log('Elementos Cargados');


    if ('serviceWorker' in navigator) {
        if (navigator.serviceWorker) {
            const response = await navigator.serviceWorker.register('sw.js');
            if (response) {
                console.info('service worker registrado');
            }

        }
    }


});