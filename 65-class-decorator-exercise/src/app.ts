interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

@CreatedAt
class UserService implements UserService {
    users: number = 1000;

    getUserInDatabase(): number {
        return this.users;
    }
}

function CreatedAt<T extends { new(...args: any): {} }>(constructor: T) {
    return class extends constructor {
        date: Date = new Date();
    }
}

type CreatedAt = {
    date: Date;
}

console.log(new UserService());
console.log((new UserService() as UserService & CreatedAt).date);