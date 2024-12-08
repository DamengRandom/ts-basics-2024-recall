function add(a: number, b: number): number {
    return a + b;
}

function addString(a: string, b: string): Promise<string> {
    return Promise.resolve(`${a}, ${b}`);
}

// add(1, 2);

// console.log(add(1, 2));

export { add, addString };
