interface ILogger {
    log(...args): void;

    error(...args): void;
}

class Logger implements ILogger {
    error(...args): void {
        console.log(...args);
    }

    async log(...args): Promise<void> {
        //await
        console.log("Error:", ...args);
    }
}

interface IPayable {
    pay(paymentIs: number): void;

    price?: number;
}

interface IDeletable {
    delete():void;
}

class User implements IPayable,IDeletable {
    price: number | undefined;

    pay(paymentIs: number): void {
        //
    }
    delete(): void {

    }
}