import '../css/pais.css'
export const paisDetails = (nombrePais, capital, region, lenguaje, auxFronteras, bandera, population, timeZones, escudoArms) => {
    //Para los paises que no tienen fronteras
    const fronteras = auxFronteras === undefined ? 'Sin fronteras' : auxFronteras.join(', ');
    //Para los paises que no tienen un escudo
    const comprobarImagenEscudo = () => {
        if (escudoArms == undefined) {
            return `
                <div class='container-escudo'>
                    <p class='sinEscudo' id='sinEscudo'>Sin escudo</p>
                </div>
            `
        } else {
            return `
                <figure class='container-escudo'>
                    <img class='escudo' src="${escudoArms}" alt="escudo armada" />
                </figure>
            `
        }
    }
    return (`
        <section class='cardPaisDetails'>
            <header class='header-details'>
                <h2>${nombrePais}</h2>
            </header>
            <figure class='container-banderaDetails'>
                <img class='banderaDetails' src="${bandera}" alt="bandera imagen" />
            </figure>
            <main class='container-infoDetails'>
                <article class='container-info divisor'>
                    ${comprobarImagenEscudo()}
                    <p><span>Capital:</span> ${capital}</p>
                    <p><span>Lenguaje:</span> ${lenguaje.join(', ')}</p>
                </article>
                <article class='container-info'>
                    <p><span>Fronteras:</span> ${fronteras}</p>
                    <p><span>Region:</span> ${region}</p>
                    <p><span>Population:</span> ${population}</p>
                    <p><span>Time Zone:</span> ${timeZones.join(', ')}</p>
                </article>
            </main>
        </section>
    `)
}