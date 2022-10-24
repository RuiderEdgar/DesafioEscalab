import { cardPais } from './card'
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
        array.map((pais) => {
          return (
            cardPais(pais.flags.png, pais.name.common, pais.capital, pais.population, pais.region)
          )
        }).join('')
      )
      document.querySelectorAll('.card').forEach(dom => {
        dom.style.opacity = 1;
      })
    })
    .catch(e => console.log(e))
  //retornando un string vacio para que no muestre undefined
  return '';
}
