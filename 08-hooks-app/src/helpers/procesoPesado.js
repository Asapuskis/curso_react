export const procesoPesado = ( iteraciones ) => {
    for(let i=0; i<iteraciones; i++) {
        console.log(`Ahí vamos... ${i}`);
    }

    return `${iteraciones} iteraciones realizadas`;
}