function ownForEach<T>(items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((acc, value) => {
        forEachFunc(value);
        return undefined
    }, undefined);
}

ownForEach(['1', '2', '3'], (value: string) => { console.log(`Own forEach returns: ${value}`) });

function ownFilter<T>(items: T[], filterFunc: (v: T) => boolean): T[] {
    return items.reduce<T[]>((acc, value) => filterFunc(value) ? [...acc, value] : acc, []);
}

console.log('ownFilter: ', ownFilter([1,2,4], (v: number) => v > 3));

function ownMap<T, K>(items: T[], mapFunc: (v: T) => K): K[] {
    return items.reduce<K[]>((acc, value) => [...acc, mapFunc(value)], []);
}

console.log('ownMap: ', ownMap([3,2,4], (v) => v * v));
