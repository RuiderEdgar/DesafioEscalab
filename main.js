import './style.css'
import { interfazPaises } from './js/paises'
import { buscar } from './js/buscar'
import { filtrarRegion } from './js/filtrarRegion'


document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <nav>
    <input type="search" name="buscar" id="buscar" placeholder='Ingresa el pais'/>
    <button id='borrar'>Borrar</button>
    <label htmlFor="regions">
      <span>Region</span>
      <select name="regions" id="region">
        <option value="all">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </label>
    <button id='btnFiltrarRegion'>Filtrar</button>
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