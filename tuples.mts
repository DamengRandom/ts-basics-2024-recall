type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
    return [
        c1[0] + c2[0],
        c1[1] + c2[1],
        c1[2] + c2[2]
    ]
}

console.log(add3DCoordinate([20, 10, 0], [10, 20, 30]));

function simpleStringState(initial: string): [() => string, (v: string) => void] {
    let str: string = initial;
    return [
        () => str,
        (v: string) => {
            str = v;
        }
    ]
}

const [strReader, strSetter] = simpleStringState('damon');
console.log('strReader: ', strReader());
strSetter('ella');
console.log('strReader: ', strReader());

// typeical example
function getUser(): [string, string] {
    return ['a', 'b'];
}

const [_, id] = getUser(); // looks like useState 😂😂 ??
console.log("underscore tuple: ", _);
console.log("normal tuple value: ", id);