import fetch from 'node-fetch';

interface PokemonResults {
    count: number;
    next?: string;
    previous?: string;
    results: {
        name: string;
        url: string;
    }[]
}

type FetchPokenmonResults<T> = T extends undefined ? Promise<PokemonResults> : void; 

function fetchPokemon<T extends undefined | ((pokemons: PokemonResults) => void)>(url: string, cb?: T): FetchPokenmonResults<T> {
    if (cb) {
        fetch(url)
            .then(res => res.json() as Promise<PokemonResults>)
            .then(cb);
        return undefined as FetchPokenmonResults<T>;
    } else {
        return fetch(url).then(res => res.json()) as FetchPokenmonResults<T>;
    }
}

// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => { console.log('cb gets called !!', JSON.stringify(data, null, 1)) });

(async function() {
    const res = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10') as PokemonResults;

    res.results.forEach(r => {console.log(r.name)});
})();

// typical conditional response based type definition `FetchPokenmonResults<T>` !!!!