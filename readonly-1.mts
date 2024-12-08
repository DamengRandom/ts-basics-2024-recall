interface Cat {
    name: string;
    breed: string;
}

type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): ReadonlyCat {
    return {
        name,
        breed
    }
}

const kjaa = makeCat('Jezzik', 'Tabby');

// kjaa.name = 'chis'; // not allowed because of READONLY !!!!!!

function makeCorrdinate(x: number, y: number, z: number): readonly [number, number, number] {
    return [x,y,z];
}

const c0 = makeCorrdinate(1,2,3);
// c0[0] = 111; // not allwoed because of readonly !!! no reassign !!!