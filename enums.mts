// bad
// const beforeLoad = "beforeLoad";
// const loading = "loading";
// const loaded = "loaded";

// better
enum LOADING_STATES {
    beforeLoad = "beforeLoad",
    loading = "loading",
    loaded = "loaded"
}

const isLoading = (state: LOADING_STATES) => state === LOADING_STATES.loading;

// console.log(isLoading("dog")); // got error since dog is not part of LOADING_STATES enum
console.log(isLoading(LOADING_STATES.loading));

// Literal types
function rollDice(dice: 1 | 2 | 3): number {
    let pip = 0;

    for (let i = 0; i < dice; i++) {
        pip += Math.floor(Math.random() * 5) + 1;    
    }

    return pip;
}

// console.log(rollDice(4)); // because type is 1 | 2 | 3 which is literal type, so 4 is not allowed

console.log(rollDice(1));

function sendEvents(name: 'addToCart', data: { productID: number }): void;
function sendEvents(name: 'checkout', data: { cartCount: number }): void;
function sendEvents(name: string, data: unknown): void {
    console.log(`${name}: ${JSON.stringify(data)}`);
};

sendEvents('addToCart', { productID: 13232 }); // addToCart is the string literal
