interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserService {
    users: number = 1000;

    @Catch({rethrow: true})
    getUserInDatabase(): number {
        throw new Error("Error");
    }
}

function Catch({rethrow}: { rethrow: boolean } = {rethrow: false}) {
    return (
        target: Object,
        _: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any) => any>,
    ): TypedPropertyDescriptor<(...args: any) => any> | void => {
        const oldValue = descriptor.value;
        descriptor.value = async (...args: any[]) => {
            try {
                return await oldValue?.apply(target, args);
            } catch (e) {
                if (e instanceof Error) {
                    console.log(e.message);
                    if (rethrow) throw e;
                }
            }

        }
    }
}

console.log(new UserService().getUserInDatabase());
