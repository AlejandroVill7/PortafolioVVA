import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

// 1. Inicializar Lenis para el scroll suave
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    // otras opciones si las necesitas
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
console.log('Lenis inicializado');

// 2. Animación sencilla con GSAP
// Selecciona el elemento a animar
const box = document.querySelector('.animated-box');
const heroTitle = document.querySelector('.hero-title');

if (box) {
    gsap.from(box, {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        y: 100, // Mover desde abajo
        ease: 'power3.out',
        delay: 0.5
    });
    console.log('Animación GSAP para la caja configurada');
} else {
    console.error('Elemento .animated-box no encontrado');
}

if (heroTitle) {
     gsap.from(heroTitle, {
        duration: 1,
        opacity: 0,
        x: -50, // Mover desde la izquierda
        ease: 'sine.out',
        delay: 0.2
    });
    console.log('Animación GSAP para el título configurada');
} else {
    console.error('Elemento .hero-title no encontrado');
}

console.log('Scripts de main.js cargados y ejecutados.');