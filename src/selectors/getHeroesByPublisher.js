import { heroes } from "../data/heroes"


export const getHeroesByPublisher = (publisher) => {

    const validPubs = ['DC Comics', 'Marvel Comics'];

    if(!validPubs.includes(publisher)){
        throw new Error(`${publisher} isn't a valid publisher`);
    }

    return heroes.filter(hero => hero.publisher == publisher);
}