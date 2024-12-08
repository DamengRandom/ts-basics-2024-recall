interface MyUser {
    id: string;
    name: string;
    email?: string;
}

// bad approach
// interface MyUserOptionals {
//     id?: string;
//     name?: string;
//     email?: string;
// }

// good approach
type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrideUser: MyUserOptionals): MyUser => {
    return {
        ...user,
        ...overrideUser
    };
}

console.log(merge({ id: '1', name: 'juhi', email: 'te.st@co.tt' }, { email: 'yh.tt@test.co'}));

// other utility type definitions demo ~

type RequiredMyUser = Required<MyUser>;

type PickMyUserNameAndEmail = Pick<MyUser, 'name' | 'email'>;

type OmitMyUserId = Omit<MyUser, 'id'>;

// Map array to object format !!!!
const mapById = (users: MyUser[]): Record<MyUser["id"], OmitMyUserId> => {
    return users.reduce((acc, value) => {
        const { id, ...rest } = value;
        return {
            ...acc,
            [id]: rest,
        }
    }, {});
}

console.log(mapById([{ id: '23782', name: 'gfaa' }, { id: '83943', name: 'laksi', email: 'te.22yh@ty.oc' }]));
