interface IUserService {
    users: number;

    getUserInDatabase(): number;
}

class UserService implements UserService {
    users: number = 1000;

    @Log()
    getUserInDatabase(): number {
        throw new Error("Error");
    }
}

function Log() {
    return (
        target: Object,
        propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any) => any>,
    ): TypedPropertyDescriptor<(...args: any) => any> | void => {
        console.log(target)
        console.log(propertyKey)
        console.log(descriptor)
        // return {
        //     enumerable:true,
        // }
        // const oldValue = descriptor.value;
        descriptor.value = () => {
            console.log("No errors")
            // oldValue()
        }
    }
}

console.log(new UserService().getUserInDatabase());
