// type myFlexibleDOgInfo = { name: string; } & Record<string, string>;

type myFlexibleDOgInfo = { name: string; [key: string]: string | number };

const doggy: myFlexibleDOgInfo = {
    name: '',
    breed: '',
    age: 12
};

// [key: string]: string | number is very general way to define any prop with value format of types !!!!

interface DogInfo {
    name: string;
    age: number;
}

type OptionFlags<Type> = { [Property in keyof Type]: boolean };

type DogInfoOptionals = OptionFlags<DogInfo>; // convert all DogInfo types into boolean based on OptionFlags<Type> !!!

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (v: Type[Property]) => void
} & {
    [Property in keyof Type as `on${Capitalize<string & Property>}Delete`]?: (v: Type[Property]) => void
};

function listenToObjects<T>(obj: T, listeners: Listeners<T>): void {
    throw "Needs to be implemented";
}

const doog: DogInfo = {
    name: 'jiazz',
    age: 11,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObjects(doog, {
    onNameChange: (v: string) => {},
    onAgeChange: (v: number) => {},
    onAgeDelete: () => {}
});

// I am lost here, need to re-reada again !!! Mapped type is harder ...
