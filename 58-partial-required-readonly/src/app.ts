interface User {
    name: string;
    age?: number;
    email: string;
}

type partial = Partial<User>;   //:{name?: string, age?: number, email?: string}

const p: partial = {};           //valid

type required = Required<User>;         //:{name: string, age: number, email: string}
type readonly = Readonly<User>;        //:{readonly name: string, readonly age?: number, readonly email: string}
type readonlyAndRequired = Required<Readonly<User>>;  //:{name: string, age: number, email: string}