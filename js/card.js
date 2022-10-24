import '../css/card.css'
export const cardPais = (bandera, nombre, capital, population, region) => {
    // componente card
    //todo dar un id por cada pais ya sea por nombre o numero
    return (
        `<section class='card'>
            <figure class='container-bandera'>
                <img src="${bandera}" alt="bandera" class='bandera'/>
            </figure>
            <article class='container-info'>
                <h2>${nombre}</h2>
                <div>
                    <p><span>Capital: </span>${capital}</p>
                    <p><span>Population: </span>${population}</p>
                    <p><span>Region: </span>${region}</p>
                </div>
            </article>
            <div class='container-boton'>
                <button>Ver mas</button>
            </div>
        </section>`
    )
}