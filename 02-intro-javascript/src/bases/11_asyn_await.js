// Async and await

// Forma de definir una función que devuelve un promise... Se hace larga...
const getImagenPromise = () => {
    const promise = new Promise( (resolve, reject) => {
        resolve('https://ejemplo1.com');
    });

    return promise;
}

getImagenPromise()
    .then(console.log);

// Para solucionar la complejidad de este tipo de funciones, aparecen los ASYNC AWAIT
// En este primer caso, definimos la función con la palabra reservada async para determinar que devolverá una promise.
const getImage = async() => {
    return 'https://ejemplo2.com'
}

getImage()
    .then(console.log);

// En caso de devolver una promise que puede tardar o no ocurrir, se puede utilizar la palabra reservada await.
// Con await, el código se quedará esperando hasta que se resuelva la función que está esperando.
// Hay que tener en cuenta que await solo funciona en una función asíncrona (async)

const getImageAsyncAwait = async() => {

    // Al hacer peticiones http, lo ideal es trabajar con try catch.
    try {
        const apiKey = '6OCu7YfrYIM1mhVhe8AMKGKHY4u2qKZU';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await response.json();
        const url = data.data.images.original.url;

        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);

        return url;
    } catch (error) {
        console.error(error)
    }
}

getImageAsyncAwait()