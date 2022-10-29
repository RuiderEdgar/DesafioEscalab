import './style.css'
import { interfazPaises } from './js/paises'
import { buscar } from './js/buscar'
import { filtrarRegion } from './js/filtrarRegion'


document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <nav id='nav'>
    <section class='container-buscar'>
      <input type="text" name="buscar" id="buscar" placeholder='Ingresa el pais'/>
      <button id='borrar' class='unstyle'>
        <img src="https://cdn-icons-png.flaticon.com/512/8167/8167519.png" alt="icon trash" />
      </button>
    </section>
    <section class='container-filtrar'>
      <label htmlFor="regions">
        <span>Region</span>
        <select name="regions" id="region" class='inputRegion'>
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </label>
      <button id='btnFiltrarRegion' class='unstyle'>
        <img src="https://cdn-icons-png.flaticon.com/512/8467/8467740.png" alt="icon filtrar" />
      </button>
    </section>
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

//limpiar el input y el filtro;
document.querySelector('#borrar').addEventListener('click', () => {
  document.querySelector('#buscar').value = '';
  const inputBuscar = document.querySelector('#buscar').value = '';
  buscar(inputBuscar.toLowerCase().trimStart())
})

document.querySelector('#btnFiltrarRegion').addEventListener('click', () => {
  const region = document.querySelector('#region').value;
  filtrarRegion(region);
})