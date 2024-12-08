import { add, addString } from "./function-types.mjs";

addString("Damon", "Wu").then((result: string) => {
    console.log(result); // run pormise.then last after console log runs !!!
});

console.log(add(1, 2));

// console.log(add(1, "Damon")); // auto type inference means String is not allowed, only number type is allowed 
