interface User {
    name: string,
    email: string,
    login: string,
}

const user: User = {
    name: "den",
    email: "den@g.com",
    login: "denays",
};

interface Admin {
    name: string,
    role: number,
}


function ligId(id: string | number) {
    if (typeof id === "string") {
        console.log(id);
    } else if (typeof id === "number") {
        console.log(id);
    }
    id                   // string | number
}

function ligId2(id: string | number) {
    if (isString(id)) {
        console.log(id);
    } else {
        console.log(id);
    }
}


function isString(x: string | number): x is string {
    return typeof x === "string"
}


function isAdmin(user: User | Admin): user is Admin {  // if boolean - error
    return "role" in user;
}

function isAdminAlt(user: User | Admin): user is Admin {
    return (user as Admin).role !== undefined;
}

function setRole(user: User | Admin) {
    if (isAdmin(user)) {
        user.role = 0;
    } else {
        user.role                //error
        throw new Error("Is not admin!");
    }
}