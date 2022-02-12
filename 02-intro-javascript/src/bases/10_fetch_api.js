// En esta práctica vamos a probar a llamar a una API desde js.
// Utilizaremos las herramientas de desarrollador de giphy

const apiKey = '6OCu7YfrYIM1mhVhe8AMKGKHY4u2qKZU';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then( resp => resp.json() )
        // Se pueden encadenar promises. En este caso, estoy haciendo un then de la promise que me devuelve resp.json().
        .then( data => {
            const url = data.data.images.original.url;

            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
    .catch ( console.warn );