interface Data {
    group: number;
    name: string;
}

const data: Data[] = [
    {group: 1, name: 'a'},
    {group: 1, name: 'b'},
    {group: 2, name: 'c'},
];

interface IGroupReturn<T> {
    [key: string]: T[];
}

type key = string | number | symbol;

function groupByKey<T extends Record<key, any>>(data: T[], key: keyof T): IGroupReturn<T> {
    return data.reduce<IGroupReturn<T>>((acc: IGroupReturn<T>, el) => {
        const elKey = el[key];
        let currentEl = acc[elKey];
        if (Array.isArray(currentEl)) {
            currentEl.push(el);
        } else {
            currentEl = [el];
        }
        acc[elKey] = currentEl
        return acc;
    }, {})
}

const res = groupByKey<Data>(data,"group");
console.log(res)