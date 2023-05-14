function toStringHuge<T>(el: T): string | undefined {
    if (typeof el === "number" || typeof el === "boolean") {
        return el.toString();
    } else if (Array.isArray(el)) {
        return el.join(" ");
    } else if (typeof el === "string") {
        return el;
    } else if (typeof el === "object") {
        return JSON.stringify(el);
    } else {
        return undefined;
    }
}

console.log(toStringHuge(1));
console.log(toStringHuge("sdfg"));
console.log(toStringHuge(true));
console.log(toStringHuge([true, "sfdgsdf", 112, ["dfgsd", 13123, 23, false], undefined]));
console.log(toStringHuge({a: "fdf", b: 1221, c: true,}));