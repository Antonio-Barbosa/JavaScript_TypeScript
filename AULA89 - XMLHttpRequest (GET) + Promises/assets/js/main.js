const request = obj => {

    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true); //Usado para GET
        xhr.send(); //POST

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject({
                    code: xhr.status,
                    msg: xhr.statusText
                });
            }
        });
    })
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }

});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    try {
        const response = await request({
            method: 'GET',
            url: href
        });
        carregaResultado(response);
    } catch (error) {
        console.log(error);
    }
}
function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;

}

