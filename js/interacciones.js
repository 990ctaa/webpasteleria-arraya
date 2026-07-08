document.addEventListener('DOMContentLoaded', () => {

    // --- 1. LÓGICA DEL CARRUSEL DE PRODUCTOS ---
    const track = document.querySelector('.product-cards');
    const dots = document.querySelectorAll('.dot');
    const arrows = document.querySelectorAll('.arrow');

    if (track) {
        let currentIndex = 0;
        
        // Calculamos cuánto moverse: ancho de tarjeta (180px) + el gap de CSS (40px)
        const moveAmount = 220; 
        
        // Obtenemos la cantidad total de tarjetas
        const totalCards = document.querySelectorAll('.card').length;
        
        // Si mostramos 3 tarjetas a la vez, el límite de veces que podemos avanzar es total - 3
        const maxIndex = totalCards - 3; 

        const updateCarousel = (index) => {
            // Validaciones para no pasarnos de los límites
            if (index < 0) index = 0;
            if (index > maxIndex) index = maxIndex;
            
            currentIndex = index;

            // Mover el contenedor en el eje X
            track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;

            // Sincronizar los puntos (dots)
            dots.forEach(d => d.classList.remove('active'));
            if (dots[currentIndex]) {
                dots[currentIndex].classList.add('active');
            }
        };

        // Eventos para las flechas
        arrows.forEach(arrow => {
            arrow.addEventListener('click', (e) => {
                // Detectamos si es la flecha izquierda o derecha por el texto
                if (e.target.textContent.trim() === '<') {
                    updateCarousel(currentIndex - 1);
                } else {
                    updateCarousel(currentIndex + 1);
                }
            });
        });

        // Eventos para los puntos
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                updateCarousel(index);
            });
        });
    }


    // --- 2. MANEJO DEL FORMULARIO DE CONTACTO ---
    const form = document.querySelector('.form-container form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const nombreInput = form.querySelector('input[type="text"]');
            const nombre = nombreInput.value;
            alert(`¡Gracias por escribirnos, ${nombre}! Hemos recibido tu mensaje y te contactaremos pronto.`);
            form.reset();
        });
    }

});