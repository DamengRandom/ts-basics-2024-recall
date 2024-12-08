function pluck<DataType, KeyType extends keyof DataType>(items: DataType[], key: KeyType): DataType[KeyType][] {
    return items.map(item => item[key]);
}

const dogs = [
    {
        name: "Sony",
        age: 12
    },
    {
        name: "LG",
        age: 13
    }
];

console.log(pluck(dogs, "age"));
console.log(pluck(dogs, "name"));

// This is how to divide the object into differen arrays by the key !!!!!!
// This is done by using typescript generics !!!!


interface BaseEvent {
    time: number;
    user: string;
}

interface EventMap {
    addToCart: BaseEvent & { quantity: number, producetID: string },
    checkkout: BaseEvent
}

function sendEvent<Name extends keyof EventMap>(name: string, data: EventMap[Name]): void {
    console.log([name, data]);
}

sendEvent("addToCart", { quantity: 10, producetID: "81723", user: "Hehi", time: 1 });
sendEvent("checkkout", { user: "Kiji", time: 2 });