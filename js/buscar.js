export const buscar = (inputPais) => {
    //obtenemos los nodos de cada pais
    const arrayNodes = document.querySelectorAll('.card');

    //filtramos los nodos por el nombre y despues eliminamos los undefined con el filter, sin necesidad de un fetch
    let namesFiltrado;
    namesFiltrado = Array.from(arrayNodes).map(pais => {
        if (pais.id.toLowerCase().includes(inputPais)) {
            return (pais)
        }
    }).filter(item => item !== undefined)

    //ocultamos los paises que no estan dentro del filtro y mostramos los que si están
    Array.from(arrayNodes).map(dom => {
        if (namesFiltrado.includes(dom)) {
            dom.style.display = 'flex';
        } else {
            dom.style.display = 'none';
        }
    })
}