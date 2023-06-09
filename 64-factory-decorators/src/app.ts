interface IUserService {
    users: number;

    getUsersInDatabase(): number;
}

// @nullUser
@setUsers(2)
@log()
// @threeUserAdvanced
// @setUserAdvanced(4)
class UserService implements IUserService {        //"experimentalDecorators": true in tsconfig.json
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function nullUser(target: Function) {
    target.prototype.users = 0;
}

function setUsers(users: number) {
    console.log("setUsers init")
    return (target: Function) => {
        console.log("setUsers run")
        target.prototype.users = users;
    }
}

function log() {
    console.log("log init")
    return (target: Function) => {
        console.log("log run")
    }
}

// setUsers init
// log init
// log run
// setUsers run

function setUserAdvanced(users: number) {
    return <T extends { new(...args: any): {} }>(constructor: T) => {
        return class extends constructor {
            users = users;
        }
    }
}

function threeUserAdvanced<T extends { new(...args: any): {} }>(constructor: T) {
    return class extends constructor {
        users = 3;
    }
}

console.log(new UserService().getUsersInDatabase());                            // 0
