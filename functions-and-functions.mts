export function printToFile(text: string, callback: () => void): void {
    console.log(text)
    callback();
}

type MutationFunction = (n: number) => number;

export function arrayMutate(numbers: number[], mutate: MutationFunction): number[] {
    const tempArr: number[] = [];
    for (let num of numbers) {
        tempArr.push(mutate(num));
    }

    return tempArr;
}

console.log('quick mocked map function - incpmplete just for demo only:', arrayMutate([1,2,3], (n) => n * 3 + 1));

export function highOrderFunc(n1: number): MutationFunction {
    return (n2: number) => n1 * n2 + n1 / n2; 
}

// console.log(highOrderFunc(6)(3));
const callHoc = highOrderFunc(6);
console.log("HOC demo: ", callHoc(3));
