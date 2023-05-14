interface IUser {
    name: string;
    age: number;
}

type KeysOfUser = keyof IUser;

const key: KeysOfUser = "age"  //age or name

function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const user: IUser = {
    name: "den",
    age: 22,
}

const userName = getValue(user, "name"); //key = age or name