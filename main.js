import './style.css'
import { interfazPaises } from './js/paises'

document.querySelector('#app').innerHTML = `
  <header>
    <h1>Paises del mundo</h1>
  </header>
  <section class='interfazPaises-Container' >
    ${interfazPaises()}
  </section>
`

// setupCounter(document.querySelector('#counter'))
