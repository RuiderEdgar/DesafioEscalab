import '../css/cardPais.css'
export const cardPais = (bandera, nombre, capital, population, region, i) => {
    // componente card
    return (
        `<section class='card' id='${nombre}'>
            <figure class='container-bandera'>
                <img src="${bandera}" alt="bandera" class='bandera'/>
            </figure>
            <article class='container-info' id='${region}'>
                <h2 id='${i}'>${nombre}</h2>
                <div>
                    <p><span>Capital: </span>${capital}</p>
                    <p><span>Population: </span>${population}</p>
                    <p><span>Region: </span>${region}</p>
                </div>
            </article>
            <div class='container-boton'>
                <button class='btn-details'>Ver mas</button>            
            </div>
        </section>`
    )
}