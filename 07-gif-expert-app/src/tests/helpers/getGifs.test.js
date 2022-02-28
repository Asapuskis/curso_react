import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs', () => {
    // Ojo al testear funciones async, recordad poner la palabra async antes de la definición de la función y el await.
    test('debe traer 10 elementos', async() => {
        const gifs = await getGifs('Shingeki');
        expect(gifs.length).toBe(10);
     })

    test('debe traer 0 elementos cuando no se envíe nada', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
     })
})