class GetterSetterDemo {
    private _job: string = "";

    constructor(public firstName: string, public lastName: string) {
        this._job = "";
    }

    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    } // getter demo

    set(job: string) {
        this._job = job;
    }

    get jobText() {
        return this._job;
    }
}

const getterSetter = new GetterSetterDemo('damon', 'celia');

getterSetter.set('Car Engineer');

const { fullName, jobText } = getterSetter;

console.log(`Name: ${fullName}, and job is ${jobText}`);