How to run code:

```shell
# eg: 
npm start utility-types-2.mts
```

### Type vs Interface vs Class

```typescript
// Type: for union, tuple types definitions
// Eg:
type Status = 'pending' | 'success' | 'failed';
type AdminUser = User & { adminPrivileges: string[] };
  type Point = [number, number];

// Interface: for data structure based type definitions
// Eg:
interface User {
    name: string;
    age: number;
    sayHello(): void;
}
// Class: for object based definitions, and those objects has functionalities
// Eg:
class User {
    // 实例属性
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    // 实例方法
    sayHello() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

```
