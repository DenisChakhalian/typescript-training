type Constructor = new (...args: any[]) => {};
type GConstructor<T = {}> = new (...args: any[]) => T;

class List {
    constructor(public itm: string[]) {
    }
}

class Acc {
    isOpen: boolean
}

type ListType = GConstructor<List>;
type AccType = GConstructor<Acc>;


class ExtendedListClass extends List {
    first() {
        return this.itm[0];
    }
}

function ExtendedList<TBase extends ListType & AccType>(Base: TBase) {
    return class ExtendedList extends Base {
        first() {
            return this.itm[0];
        }
    }
}

class AccList {
    isOpen: boolean;
    constructor(public itm: string[]) {
    }
}


const list = ExtendedList(AccList);
const res = new list(["1", "2"]);
console.log(res.first())
console.log(res.isOpen)
console.log(res.itm)