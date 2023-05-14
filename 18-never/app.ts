function generateError(message: string): never {
    throw new Error(message);
}

function hugeError(): never {
    while (true) {
    }
}

function rec(): never {
    return rec();
}

// const a: never = undefined;  //error
const a2: void = undefined;

type paymentAction = "refund" | "checkout" | "reject";


// first situation

function processAction(action: paymentAction) {
    switch (action) {
        case "refund":
            //...
            break;
        case "checkout":
            // .......
            break;
        case "reject":
            // .......
            break;
        default:
            const _: never = action;
            throw new Error("Does not exist");
    }
}



// second situation


function isString(x: string | number): boolean {  //but error
    if (typeof x === "string") {
        return true;
    } else if(typeof x === "number") {
        return false;
    }
}

function isString2(x: string | number): boolean {  //not error
    if (typeof x === "string") {
        return true;
    } else if(typeof x === "number") {
        return false;
    }
    generateError("Error!");
}
