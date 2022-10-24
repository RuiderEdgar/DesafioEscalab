import './style.css'
import { interfazPaises } from './js/paises'

// const animacion = () => {
//   document.querySelectorAll('.card').forEach(dom => {
//     dom.classList.add('visibilityCard')
//   })
//   console.log(document.querySelectorAll('.card'))
// }

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <section class='interfazPaises-Container cargando' >
    <div class='spinner'></div>
    ${interfazPaises()}
  </section >
  `

// animacion();


// setupCounter(document.querySelector('#counter'))
