/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

//import * as bootstrap from 'bootstrap';
import "bootstrap";

/**
 * Write any other JavaScript below
 */

+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

//console.log('Bootstrap cargado:', bootstrap);

import AOS from "aos";
import "aos/dist/aos.css";
// Inicialización de AOS
AOS.init({
  // Opcional para añadir configuraciones
  duration: 800, // duración de la animación en ms
  once: true, // si la animación debe ocurrir solo una vez al hacer scroll
});
