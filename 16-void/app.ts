function logId(id: string | number): void {
    console.log(id)
}

// const a = logId(1); // :void

function multiply(f: number, s?: number) { //  :number | undefined
    if (!s) {
        return f * f
    }
}

type voidFunc = () => void;

const f1: voidFunc = () => {

}

const f2: voidFunc = () => {
    return true;                  // not error!!
}

const b = f2(); // but :void

const arr = ["1", "2"]

const user = {
    s: ["s"]
}

arr.forEach((a) => user.s.push(a));  // :void, but push - :number