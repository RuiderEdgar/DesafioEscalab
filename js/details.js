import { paisDetails } from "../components/cardPaisDetails";
export const detailsPais = (i) => {
    const nombrePais = document.getElementById(i).innerHTML;
    console.log(nombrePais);
    document.querySelector('.detailsPaises-Container').style.display = 'flex';
    document.querySelector('.interfazPaises-Container').style.opacity = 0;
    document.querySelector('.interfazPaises-Container').classList.add('hidden');

    async function pais() {
        let response = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}?fullText=true`);
        if (!response.ok) {
            throw new Error(`Status: ${response.status}`)
        }
        let json = await response.json();
        let arrayPais = json;
        return arrayPais;
    }
    pais()
        .then(array => {
            console.log(array);
            console.log(Object.values(array[0]));
            document.querySelector('.detailsPaises-Container').innerHTML = (
                array.map((pais, i) => {
                    return (
                        paisDetails(pais.name.common, pais.capital, pais.region, Object.values(pais.languages), pais.borders, pais.flags.png, pais.population, pais.timezones, pais.coatOfArms.png)
                    )
                })
            );
            const btnRegresar = document.querySelector('#regresar');
            btnRegresar.addEventListener('click', () => {
                document.querySelector('.detailsPaises-Container').style.display = 'none';
                document.querySelector('.interfazPaises-Container').style.opacity = 1;
                document.querySelector('.interfazPaises-Container').classList.remove('hidden');
            });
        })
    return '';
}