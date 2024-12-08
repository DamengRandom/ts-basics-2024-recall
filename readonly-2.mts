class NewDoggy {
    constructor(public readonly name: string, public readonly age: number) {}
}

const newDoggyInstance = new NewDoggy('haqi', 8);
console.log(newDoggyInstance.name);
// newDoggyInstance.name = 'hawi'; // not allowed because of name is defined as readonly !!!!

// static readonly demo:
class DogList {
    private doggies: NewDoggy[] = [];

    static instance: DogList = new DogList(); // means no need to instantiate the class, can direct use class !!!!

    public addDog(dog: NewDoggy) {
        this.doggies.push(dog);
    }

    public listDogs() {
        console.log('doggies: ', this.doggies);
    }
}

DogList.instance.addDog({ name: 'jigi', age: 2 });

DogList.instance.listDogs();
