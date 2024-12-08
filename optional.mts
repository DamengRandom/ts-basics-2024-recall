function printIngredient(quantity: number, ingredient: string, note?: string) {
    console.log(`${ingredient} x ${quantity}${note ? ` ${note}` : ''}`);
}

printIngredient(1, 'Cheese', 'note ~');

printIngredient(1, 'Milk');


// object demo
interface User {
    id: string;
    name: string;
    info: {
        age?: number;
        email?: string;
    }
}

function getEmail(user: User) {
    if (user.info) {
        return user.info.email!;
    }

    return "No email detected";
}

function getEmailBetterSyntax(user: User) {
    return user?.info?.email ?? "No email detected";
} // this is better approach compared with above one !!!!!!
