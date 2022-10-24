import './style.css'
import { interfazPaises } from './js/paises'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <section class='interfazPaises-Container cargando' >
    <div class='spinner'></div>
    ${interfazPaises()}
  </section >
  <section class='detailsPaises-Container cargando' >
    <div class='spinner'></div>
    
  </section >
  `;
