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

function fetchPokemon(url: string, cb: (pokemons: PokemonResults) => void): void;
function fetchPokemon(url: string): Promise<PokemonResults>;
// above ways are function overloading (which defines different scenarios of function response) !!!!!!!!!!!!!
function fetchPokemon(url: string, cb?: (pokemons: PokemonResults) => void): unknown {
    if (cb) {
        fetch(url)
            .then(res => res.json() as Promise<PokemonResults>)
            .then(cb);
        return undefined;
    } else {
        return fetch(url).then(res => res.json());
    }
}

// fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10', (data) => { console.log('cb gets called !!', JSON.stringify(data, null, 1)) });

(async function() {
    const res = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=10');

    res.results.forEach(r => { console.log(r.name); });
})();

// Using function overloading way to avoid conditional checks, directly return response without as statement anymore ~
// (compared with conditional.mts file did, this is much cleaner) ~
