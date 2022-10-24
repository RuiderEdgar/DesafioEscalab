import { cardPais } from './card'
export const interfazPaises = () => {

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
      document.querySelector('.interfazPaises-Container').innerHTML = (
        array.map((pais) => {
          return (
            cardPais(pais.flags.png, pais.name.common, pais.capital, pais.population, pais.region)
          )
        }).join('')
      )
    })
    .catch(e => console.log(e))
}
