interface User {
    name: string,
    age: number,
    skills: string[],
    log: (id: number) => string;
}

// type User2 = {
//     name: string,
//     age: number,
//     skills: string[],
//     log: (id: number) => string;
// }

interface Role {
    roleId: number,
}

interface UserWithRole extends User, Role {
    createdAt: Date,
}

let user: UserWithRole = {
    name: "den",
    age: 22,
    skills: ["1", "2"],
    roleId: 1,
    createdAt: new Date(),
    log(id: number) {
        return "string"
    },
};

interface UserDictionary {
    [idx: number]: User
}

// type UserDictionary2 = {
//     [index: number]: User
// }

// type ud = Record<number, User>;