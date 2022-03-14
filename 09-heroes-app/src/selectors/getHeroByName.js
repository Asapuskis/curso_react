import { heroes } from "../data/heroes"

export const getHeroByName = (name = '') => {
    console.log(name);
    name = name.toLowerCase();
    if (name){
        name = name.toLowerCase();
        return heroes.filter( hero => hero.superhero?.toLowerCase().includes(name) );
    }
    // return [...heroes]
    return []

    // return heroes;

}