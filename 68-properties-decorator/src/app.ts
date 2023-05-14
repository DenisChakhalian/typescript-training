interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserService {
    @Max(100)
    users: number;

    getUserInDatabase(): number {
        throw new Error("Error");
    }
}

function Max(max: number) {
    return (
        target: Object,
        propertyKey: string | symbol
    ) => {
        let value: number;
        const setter = function (newValue: number) {
            if (newValue > max) {
                console.log("Cannot set >", max);
            } else {
                value = newValue;
            }
        }
        const getter = function () {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        })
    }
}

const userService = new UserService();

userService.users = 1;
console.log(userService.users);
userService.users = 1000;
console.log(userService.users);