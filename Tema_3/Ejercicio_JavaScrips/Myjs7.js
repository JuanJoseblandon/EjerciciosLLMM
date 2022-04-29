
window.onload = function () {
    // Variables
    const IMAGENES = [
        'coche1.jpg',
        'coche2.jpg',
        'coche3.jpg',
        'coche4.jpg',
        'coche5.jpg',
        'coche6.jpg'
    ];
    let posicionActual = 0;
    let $botonRetroceder = document.getElementById('retroceder');
    let $botonAvanzar = document.getElementById('avanzar');
    let $imagen = document.getElementById('imagen');


    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if(posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
        document.getElementById('retroceder')
    }

    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if(posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }

    /**
     * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
     */
    function renderizarImagen () {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }

    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    // Iniciar
    renderizarImagen();
} 

