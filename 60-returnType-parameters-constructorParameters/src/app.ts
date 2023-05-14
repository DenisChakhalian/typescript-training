class User {
    constructor(public id: number, public name: string) {
    }
}

function getData(id: number): User {
    return new User(1, "den");
}

type RT = ReturnType<typeof getData>;         //:User
type RT2 = ReturnType<()=>void>;           //:void
type RT3 = ReturnType<<T>()=>T>;                          //:unknown
type RT4 = ReturnType<<T extends string>()=>T>;           //:string
type y = typeof getData;                    //:(id: number) => User
type PT = Parameters<typeof getData>;           //:[number]
// type PT = Parameters<typeof getData>[0];           //:number

type first = PT[0];                         //:number

type CP = ConstructorParameters<typeof User>;          //:[number, string]
type IT = InstanceType<typeof User>;          //:User
