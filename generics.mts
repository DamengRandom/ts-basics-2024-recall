function simpleState<T>(initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        }
    ]
}

const [valReader, valSetter] = simpleState('damon');
console.log('valReader: ', valReader());
valSetter('ella');
console.log('valReader: ', valReader());

const [val2Reader, val2Setter] = simpleState<number | null>(null); // override generic type demo
console.log('val2Reader: ', val2Reader());
val2Setter(2);
console.log('val2Reader: ', val2Reader());

interface Rank<RankItem> {
    item: RankItem;
    rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (n: RankItem) => number): RankItem[] {
    const ranks: Rank<RankItem>[] = items.map(item => ({
        item,
        rank: rank(item)
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map(rank => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: 'Bulbasaur',
        hp: 120
    },
    {
        name: 'hika',
        hp: 30
    }
];

const rankResults = ranker(pokemon, ({ hp }) => hp);
console.log(rankResults);