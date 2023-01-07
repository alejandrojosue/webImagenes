// links de las imagenes a usar y su titulos
const data = [{
        caption: 'Paisaje de una árbol',
        media_url: 'https://fondosmil.com/fondo/11761.jpg'
    },
    {
        caption: 'Paisaje de un bosque',
        media_url: 'https://fondosmil.com/fondo/17010.jpg'
    },
    {
        caption: 'Atardecer',
        media_url: 'https://www.xtrafondos.com/descargar.php?id=5846&resolucion=1920x1080'
    },
    {
        caption: 'Fondo de pantalla',
        media_url: 'https://i.pinimg.com/originals/a7/47/9c/a7479c3a0ae5ac9c5a5f2e431e3b96da.jpg'
    },
    {
        caption: 'gato',
        media_url: 'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2018/08/fondos-pantalla-full-hd-animales_4.jpg?tf=3840x'
    },
    {
        caption: 'Puente de New York',
        media_url: 'http://www.solofondos.com/wp-content/uploads/2017/08/new-york-fondos-pantalla-hd-29.jpg'
    }
];
const gallery = document.querySelector('.galery');
const CrearHtml = (data) => {
    data.forEach(img => {
        gallery.innerHTML +=
            ` 
                <div class="image-item col-lg-4 col-sm-6 col-12 position-relative bg-secondary">
                    <a class="image-caption text-decoration-none position-absolute bg-dark bg-opacity-75 d-flex" style="width: 100%; height: 370px;" target="blank" href="${img.permalink}">
                        <span class="text-white user-select-none fw-bolder h4 m-auto">
                        ${(img.caption)}
                        </span>
                    </a>
                    <img class="w-100" src="${img.media_url}" alt="${(img.caption)}" height="370" loading="lazy">
                </div>
            `;
    });
}

CrearHtml(data);