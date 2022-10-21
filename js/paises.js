// export function setupCounter(element) {
//   let counter = 0
//   const setCounter = (count) => {
//     counter = count
//     element.innerHTML = `count is ${counter}`
//   }
//   element.addEventListener('click', () => setCounter(++counter))
//   setCounter(0)
// }

import { cardPais } from './card'
export const interfazPaises = () => {
  return (
    `${cardPais()}
    ${cardPais()}
    `
  )
}
