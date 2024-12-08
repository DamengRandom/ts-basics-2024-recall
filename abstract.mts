abstract class StreetFighter {
    constructor() {}

    move() {}

    fight() {
        console.log(`${this.name}: attacks with ${this.getSpecialAttack()}`);
    }

    abstract getSpecialAttack(): string;
    abstract get name(): string;
}

class Ryu extends StreetFighter {
    getSpecialAttack(): string {
        return "Hadoken";
    }

    get name(): string {
        return `Wohaki`;
    }
}

const ryuInstance = new Ryu();

console.log(ryuInstance.getSpecialAttack());

console.log(ryuInstance.fight());
