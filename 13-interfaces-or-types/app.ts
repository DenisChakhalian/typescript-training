interface User {
    name: string,
}

interface User {
    age: number,
}

const user: User = {
    name: "den",
    age: 22,
}

type ID = string | number;

interface IDI {
    ID: string | number,
}