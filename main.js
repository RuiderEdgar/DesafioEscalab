import './style.css'
import { interfazPaises } from './js/paises'
import { buscar } from './js/buscar'


document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <nav>
    <input type="text" name="buscar" id="buscar" placeholder='Ingresa el pais'/>
    <button id='borrar'>Borrar</button>
  </nav>
  <section class='interfazPaises-Container cargando' >
    <div class='spinner'></div>
    ${interfazPaises()}
  </section >
  <section class='detailsPaises-Container cargando' >
    <div class='spinner'></div>
    
  </section >
  `;

document.querySelector('#buscar').addEventListener('keyup', (e) => {
  // hacemos la busqueda cada que una tecla dentro del input es presionada
  const inputBuscar = document.querySelector('#buscar').value;
  buscar(inputBuscar.toLowerCase().trimStart())
})

//todo crear evento para borrar el input