import { cardPais } from '../components/cardPais'
import { detailsPais } from './details'
export const interfazPaises = () => {

  //funcion asyn para el fetch
  async function paises() {
    let response = await fetch('https://restcountries.com/v3.1/all')
    if (!response.ok) {
      throw new Error(`Status: ${response.status}`)
    }
    let json = await response.json()
    let arrayPaises = json
    return arrayPaises
  }

  paises()
    .then(array => {
      //quitando el loading spinner trantandolo de hacer con animacion
      document.querySelector('.interfazPaises-Container').classList.remove('cargando')
      document.querySelector('.spinner').classList.add('visuallyhidden');
      document.querySelector('.spinner').addEventListener('transitionend', () => {
        document.querySelector('.spinner').classList.add('hidden');
      }, {
        capture: false,
        once: true,
        passive: false
      });
      //-----------------------------------------------------------------

      document.querySelector('.interfazPaises-Container').innerHTML = (
        array.map((pais, i) => {
          return (
            cardPais(pais.flags.png, pais.name.common, pais.capital, pais.population, pais.region, i)
          )
        }).join('')
      )
      document.querySelectorAll('.card').forEach(dom => {
        dom.style.opacity = 1;
      })
      //dandole un evento al boton tipo click por cada card para mostrar el pais
      document.querySelectorAll('.btn-details').forEach((button, i) => {
        button.addEventListener('click', () => detailsPais(i))
      })
    })
    .catch(e => console.log(e))
  //retornando un string vacio para que no muestre undefined
  return '';
}
