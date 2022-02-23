

// const getImagenPromesa = () => new Promise( resolve => resolve('https://ajskdhaskjdhajs.com') )
// getImagenPromesa().then( console.log );

export const getImagen = async() => {

    try {

        const apiKey = '6OCu7YfrYIM1mhVhe8AMKGKHY4u2qKZU';
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const data = await response.json();
        const url = data.data.images.original.url;

        return url;

    } catch (error) {
        // manejo del error
        return error;
    }
};

 getImagen();



