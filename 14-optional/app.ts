interface User {
    login: string,
    password?: string, // not (string | undefined)
}

const user: User = {
    login: "g@g.com",
    //password: "pass"
}

function multiply(first: number = 5, second?: number): number { //or (number | undefined)
    if (!second) {
        return first * first;
    }
    return first * second;
}

multiply(5);

interface HugeUser {
    login: string,
    password?: {
        type: "primary" | "secondary",
    },
}

function testPass(user: HugeUser) {
    // const t = user.password ? user.password.type : undefined;
    // const t = user.password!.type; // bad!!
    const t = user.password?.type;
}

function test(param?: string) {
    const t = param ?? multiply(5);
}