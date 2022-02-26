
// Hacemos una petición http utilizando la API de giphy.
export const getGifs = async ( category ) => {
    console.log('Petición http.')
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=6OCu7YfrYIM1mhVhe8AMKGKHY4u2qKZU`;
    const response = await fetch(url);
    // console.log(response);
    const {data} = await response.json();

    // Generamos un array con el id, title y url de los gifs que se encuentren.
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}