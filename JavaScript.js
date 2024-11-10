// script.js
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Seleciona todas as divs com a classe 'vehicle' (carros ou motos)
const vehicles = document.querySelectorAll('.vehicle');

// Adiciona um evento de mouseover para cada veículo
vehicles.forEach(vehicle => {
    vehicle.addEventListener('mouseover', () => {
        // Quando o mouse passa sobre o veículo, adiciona a classe 'highlight' para mover a div para frente
        vehicle.classList.add('highlight');
    });

    // Adiciona um evento de mouseout para remover o efeito quando o mouse sai da div
    vehicle.addEventListener('mouseout', () => {
        // Remove a classe 'highlight' para restaurar a posição original
        vehicle.classList.remove('highlight');
    });
});
