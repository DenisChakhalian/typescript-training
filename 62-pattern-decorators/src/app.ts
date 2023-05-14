interface IUserService {
    users: number;

    getUsersInDatabase(): number;
}

class UserService implements IUserService {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

function nullUser(obj: IUserService) {
    obj.users = 0;
    return obj;
}

function logUsers(obj: IUserService) {
    console.log("Users:",obj.users);
    return obj;
}

console.log(new UserService().getUsersInDatabase());                            // 1000
console.log(nullUser(new UserService()).getUsersInDatabase());                  //0
console.log(logUsers(nullUser(new UserService())).getUsersInDatabase());        //Users: 0      |   0
console.log(nullUser(logUsers(new UserService())).getUsersInDatabase());        //Users: 1000   |   0

