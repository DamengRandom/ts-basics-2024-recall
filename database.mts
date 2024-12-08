interface Database<K, T> {
    get(id: K): T;
    set(id: K, value: T): void;
}

interface Persistable {
    saveToString(): string;
    restoreFromString(storedState: string): void
}

type DataKeyType = string | number | symbol;

class InMemoryDatabase<K extends DataKeyType, T> implements Database<K, T> {
    protected db: Record<K, T> = {} as Record<K, T>;
    
    get(id: K): T {
        return this.db[id];
    };

    set(id: K, value: T): void {
        this.db[id] = value;
    };
}

class PersistentMemoryDB<K extends DataKeyType, T> extends InMemoryDatabase<K, T> implements Persistable {
    saveToString(): string {
        return JSON.stringify(this.db);
    }

    restoreFromString(staoreState: string): void {
        this.db = JSON.parse(staoreState);
    }
}

// When define db as private vaiable !!!!
// const myDB = new InMemoryDatabase();
// myDB.set('1', 'hah');
// console.log(myDB.get('1'));
// // myDB.db['1'] = 'hee'; // since db isprivate variable which can ONLY be accessed within InMemoryDatabase class, so we have error now
// myDB['db']['1'] = 'hee';
// // console.log(myDB['db']['1']);
// console.log(myDB.get('1'));

// When define db as protected vairable !!!!
// const myDB = new PersistentMemoryDB();

// myDB.set('2', 'jizi');
// // console.log(myDB.saveToString());
// console.log(myDB.get('2'));
// const saved = myDB.saveToString();
// myDB.set('2', 'frozen ????');
// console.log(myDB.get('2'));

// const myDB2 = new PersistentMemoryDB();
// myDB2.restoreFromString(saved); // able to frozen the state for updating !!!!
// console.log(myDB2.get('2'));

// Using generics way to define specoific value type !!!!
const myDB = new PersistentMemoryDB<string, number>();

myDB.set('2', 22);
// console.log(myDB.saveToString());
console.log(myDB.get('2'));
const saved = myDB.saveToString();
myDB.set('2', 23);
console.log(myDB.get('2'));

const myDB2 = new PersistentMemoryDB<string, number>();
myDB2.restoreFromString(saved); // able to frozen the state for updating !!!!
console.log(myDB2.get('2'));

// Above code is the one of the best examples of implementing protected variable definition inside class !!!!