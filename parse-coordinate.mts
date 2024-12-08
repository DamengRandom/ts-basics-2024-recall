interface Coordinate {
    x: number;
    y: number;
}

interface ReplaceCondition {
    arg1: string;
    arg2: string;
}

function trimSpliter(text: string, replaceCondition: ReplaceCondition, splitCondition: string) {
    return text?.replace(replaceCondition.arg1, replaceCondition.arg2)?.split(splitCondition);
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    // return {
    //     x: obj.x,
    //     y: obj.y
    // }
    return { ...obj };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return { x, y };
}

// function overloading demo:
function parseCoordinate(obj: Coordinate): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };

    if (typeof arg1 === "object") {
        coord = { ...(arg1 as Coordinate) };
    } else if (typeof arg1 === "string") {
        const strArr = trimSpliter(arg1, { arg1: ' ', arg2: ''}, ',');

        strArr.forEach(sa => {
            const [key, value] = trimSpliter(sa, { arg1: ' ', arg2: ''}, ':');
            coord[key as 'x' | 'y'] = parseFloat(value); // key either must be x or y !!!!
        });
    } else {
        coord = { x: arg1 as number, y: arg2 as number };
    }

    return coord;
};

console.log(parseCoordinate({ x: 1, y: 2 }));
console.log(parseCoordinate(3, 4));
console.log(parseCoordinate("x: 5,y :6"));
