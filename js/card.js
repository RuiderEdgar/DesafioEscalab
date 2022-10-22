export const cardPais = (bandera, nombre, capital, population, region) => {
    // console.log(nombre)
    return (
        `<section class='card'>
            <figure class='container-bandera'>
                <img src="${bandera}" alt="bandera" class='bandera'/>
            </figure>
            <article class='container-info'>
                <h2>${nombre}</h2>
                <div>
                    <p>Capital: ${capital}</p>
                    <p>Population: ${population}</p>
                    <p>Region: ${region}</p>
                </div>
                <button>Ver mas</button>
            </article>
        </section>`
    )
}