function myLogger() {
    return (str: string) => str;
}

const logger = myLogger();
console.log(logger('hey hey hey ..'));

function createLoggerClass() {
    return class MyLoggerClass {
        private completeLog: string = "";

        log(str: string) {
            console.log(str);
            this.completeLog += str + "\n";
        }

        dumpLog() {
            return this.completeLog;
        }
    } 
}

const MyLoggerClassFromFn = createLoggerClass();

const myLoggerInstance = new MyLoggerClassFromFn();

myLoggerInstance.log('first log ...');
myLoggerInstance.log('second log ...');

myLoggerInstance.dumpLog();


function CreateSimpleMemeroyDatabase<T>() {
    return class SimpleMemoryDatabase {
        private db: Record<string, T> = {};

        set(id: string, value: T) {
            this.db[id] = value;
        }

        get(id: string): T {
            return this.db[id];
        }

        getDBObj(): object {
            return this.db;
        }
    }
}

const StringDatabaseClass = CreateSimpleMemeroyDatabase<string>();

const stringDatabaseClass = new StringDatabaseClass();

// stringDatabaseClass.set('qwqwq', 213); // 213 is number., but this class is defined as string typed class, so typescript error detected
stringDatabaseClass.set('qwqwq', '213'); // this is correct;
console.log(stringDatabaseClass.getDBObj());

type Constructor<T> = new (...args: any[]) => T; // This is needed when passing Class as a parameter into a function !!!!

// Creating a mixin type demo:
function Dumpable<T extends Constructor<{ getDBObj(): object }>>(BaseClass: T) {
    return class DumpableClass extends BaseClass {
        dump() {
            console.log(this.getDBObj());
        }
    }
}

const NumberDatabaseClass = CreateSimpleMemeroyDatabase<number>();

const DumpableFnClass = Dumpable(NumberDatabaseClass);

const dumpableFnClassInstance = new DumpableFnClass();

dumpableFnClassInstance.set('id', 21123122);

dumpableFnClassInstance.dump();
