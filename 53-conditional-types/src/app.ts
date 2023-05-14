const a: number = Math.random() > 0.5 ? 1 : 0;

interface HTTPResponse<T extends "success" | "error"> {
    code: number;
    data: T extends "success" ? string : Error;
    additionalData: T extends "success" ? string : number;
}

const success: HTTPResponse<"success"> = {
    code: 200,
    data: "done",
    additionalData: "success",
}

const error: HTTPResponse<"error"> = {
    code: 200,
    data: new Error("Huge Error!"),
    additionalData: 404,
}

class User {
    id: number;
    name: string;
}

class UserPersistent extends User {
    dbId: string;
}

function getUser(Id: number): User;
function getUser(dbId: string): UserPersistent;
function getUser(dbIdOrId: string | number): User | UserPersistent {
    if (typeof dbIdOrId === "number") {
        return new User();
    } else {
        return new UserPersistent();
    }
}


type UserOrUserPersistent<T extends string | number> = T extends number ? User : UserPersistent;

function getUser2<T extends string | number>(id: T): UserOrUserPersistent<T> {
    if (typeof id === "number") {
        return new User() as UserOrUserPersistent<T>;
    } else {
        return new UserPersistent() as UserOrUserPersistent<T>;
    }
}


const res = getUser2(1);
const res2 = getUser2("dfgsdfg");