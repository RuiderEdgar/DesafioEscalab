export const filtrarRegion = (region) => {
    const arrayNodes = document.querySelectorAll('.card');
    console.log(region)

    Array.from(arrayNodes).map(dom => {
        if (dom.childNodes[3].id.includes(region)) {
            dom.style.display = 'flex';
        } else if (region === 'all') {
            dom.style.display = 'flex';
        } else {
            dom.style.display = 'none';
        }
    })
}