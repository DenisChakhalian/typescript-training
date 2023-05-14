import "reflect-metadata";

const POSITIVE_METADATA_KEY = Symbol("POSITIVE_METADATA_KEY");

interface IUserService {
    getUserInDatabase(): number;
}

class UserService implements UserService {
    private _users: number;

    getUserInDatabase(): number {
        return this._users;
    }

    @Validate()
    setUserInDatabase(@Positive() num: number): void {
        this._users = num;
    }
}

function Positive() {
    return (
        target: Object,
        propertyKey: string | symbol,
        parameterIndex: number
    ) => {
        console.log(Reflect.getOwnMetadata("design:type", target, propertyKey));                             //"emitDecoratorMetadata": true
        console.log(Reflect.getOwnMetadata("design:paramtypes", target, propertyKey));
        console.log(Reflect.getOwnMetadata("design:returntype", target, propertyKey));

        let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];

        existParams.push(parameterIndex);

        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);

    }
}

function Validate() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) => {
        let method = descriptor.value;
        descriptor.value = function (...args: any) {
            let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
            console.log(args)
            if (positiveParams) {
                for (let idx of positiveParams) {
                    if (args[idx] < 0) {
                        throw new Error("Number is not > 0");
                    }
                }
            }
            return method?.apply(this, args);
        }
    }
}

const userService = new UserService();
userService.setUserInDatabase(10)
userService.setUserInDatabase(-1)
// userService.users = 1;
// console.log(userService.users);