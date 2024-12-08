type NameType = {
    firstName: string;
    lastName: string;
}

function addFullName(name: NameType): NameType & { fullName: string } {
    return {
        ...name,
        fullName: `${name.firstName} ${name.lastName}`
    };
}

function permuteRows<T extends (...arg: any[]) => any>(iteratorFn: T, data: Parameters<T>[0][]): ReturnType<T>[] {
    return data.map(iteratorFn);
}

console.log(permuteRows(addFullName, [{ firstName: 'Jeezi', lastName: 'Bippo' }]));

class PersonWithFullName {
    constructor(public name: NameType) {}

    get fullName() {
        return `${this.name.firstName}, ${this.name.lastName}`; 
    }
}

function createObjects<T extends new (...args: any[]) => any>(ObjectType: T, data: ConstructorParameters<T>[0][]): InstanceType<T>[] {
    return data.map((item) => new ObjectType(item));
}

console.log(createObjects(PersonWithFullName, [{ firstName: 'Hghi', lastName: 'jiffa' }]).map(obj => obj.fullName));
